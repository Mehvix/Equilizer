import json
import os
import sys

import aiohttp
import discord
from discord.ext import commands

# Defines Client
client = commands.Bot(description="If you have any issues please contact @Mehvix#7966",
                      command_prefix='!',
                      owner_id="196355904503939073",
                      case_insensitive=True)


@client.event
async def on_ready():
    global users
    users = len(set(client.get_all_members()))
    channels = len([c for c in client.get_all_channels()])
    server_list = list(client.guilds)
    dirpath = os.getcwd()

    print("==========================================")
    print(" _____                  _ _              ")
    print("| ____|__ _ _   _  __ _| (_)_______ _ __ ")
    print("|  _| / _` | | | |/ _` | | |_  / _ \ '__|")
    print("| |__| (_| | |_| | (_| | | |/ /  __/ |   ")
    print("|_____\__, |\__,_|\__,_|_|_/___\___|_|   ")
    print("         |_|                             ")
    print("• Bot Version:               {}".format(os.path.basename(dirpath)))
    print("• Discord Version:           {}".format(discord.__version__))
    print("• Python Version:            {}".format(sys.version.split()[0]))
    # print("• Client Version:            {}".format(settings.get_version()))
    # print("• Start Time:                {}".format()))
    print("• Client Name:               {}".format(client.user))
    print("• Client ID:                 {}".format(client.user.id))
    print("• Channels:                  {}".format(channels))
    print("• Users:                     {}".format(users))
    print("• Connected to " + str(len(client.guilds)) + " server(s):")
    for server in server_list:
        print("     > " + server.name)
    print("==========================================")

    # await client.change_presence(
    #     activity=discord.Streaming(name=flair(users), url='https://twitch.tv/mehvix',
    #                                twitch_name="Mehvix"))  # TODO add more presences

    # @client.event
    # async def on_resumed():
    #     print("{}: Resumed".format(curtime.get_time()))


# @client.event
# async def on_command_error(ctx, error):
#     print(error)
#     if isinstance(error, commands.NoPrivateMessage):
#         await ctx.send("This command cannot be used in private messages.")
#
#     elif isinstance(error, commands.DisabledCommand):
#         await ctx.send("Sorry. This command is disabled and cannot be used.")
#
#     elif isinstance(error, commands.CheckFailure):
#         await ctx.send("Sorry. You don't have permission to use this command.")
#
#     elif isinstance(error, commands.MissingRequiredArgument):
#         await ctx.send("You are missing a parameter. Do `.help [command name]` for more info")
#
#     elif isinstance(error, commands.NotOwner):
#         await ctx.send("Only the bot's owner can use this command")
#
#     elif isinstance(error, commands.BotMissingPermissions):
#         await ctx.send("I need special permissions to use that command.")
#
#     elif isinstance(error, commands.BadArgument):
#         await ctx.send(error)
#
#     elif isinstance(error, commands.TooManyArguments):
#         await ctx.send("You have too many arguments")
#
#     elif isinstance(error, commands.CommandOnCooldown):
#         await ctx.send(
#             "That command is on a cooldown for `{}` more seconds. It can be used every `{}` seconds".format(
#                 commands.CommandOnCooldown.cooldown, str(commands.CommandOnCooldown.retry_after)[:5]))
#
#     """
#     elif isinstance(error, commands.BadArgument):
#         command = ctx.message.content.split()[1]
#         await ctx.send("Missing an argument: " + command)
#     elif isinstance(error, commands.CommandNotFound):
#         await ctx.send("I don't recognize that command")
#     """

def calc_score_med(hpm, cpm, uph, dtm, dropspm, dropspu, deathspdt, kad, deathspm, upm):
    return round(10 * ((0.3 * ((hpm / 60) + (cpm / 5) + (uph / 0.00025) - (dtm / 75) - (dropspm / 0.6) - (dropspu / 0.025) - (deathspdt / 0.00075) + (kad / 0.03) - (deathspm / 0.08) + (upm / 0.05))) + 30)) / 10


def calc_score(dpm, cpm, kad, dahr, dadt, deathpm, dtm, kpm, kd):
    return round(10 * ((0.4 * ((dpm / 16) + (cpm / 3) + (kad / 0.6) + (dahr / 0.25) + (dadt / 0.2) - (deathpm / 0.1) - (dtm / 40) + (kpm / 0.1) + (kd / 0.2))) + 25)) / 10


@client.command(aliases=["score", "gamematchscore"], description="Gets game score", brief="Gets score")
async def gamescore(ctx, *args: str):
    if (args is None) or (len(args) > 1):
        await ctx.send("You need give a logs.tf ID or link, e.g. \n"
                       "`!score http://logs.tf/matchid`")
        return

    id = args[0].lower()
    if "logs.tf" in id:
        id_num = id.split("logs.tf/")[1].split("/")[0]
    else:
        id_num = int(id)

    search = "http://logs.tf/json/" + str(id_num)

    async with aiohttp.ClientSession() as session:
        async with session.get(search) as r:
            if r.status == 200:
                data = await r.json(content_type='application/json')
                all_players = []

                names = data["names"]

                for key in data["players"]:
                    value = data["players"][key]
                    type = value["class_stats"][0]["type"]  # gets the first class, maybe add multi-class later?
                    match_time = data['length']
                    player_team = value['team']
                    emote = ""
                    if type == "medic":
                        hpm = value['heal'] / match_time
                        cpm = value['cpc'] / match_time
                        uph = 0 if value['heal'] == 0 else value['ubers'] / value['heal']
                        dtm = value['dt'] / match_time
                        dropspm = value['drops'] / match_time
                        dropspu = 0 if value['ubers'] == 0 else value['drops'] / value['ubers']
                        dropspdt = 0 if value['dt'] == 0 else value['drops'] / value['dt']
                        kad = float(value['kapd'])
                        deathpm = value['deaths'] / match_time
                        upm = (value['ubers'] + value['drops']) / match_time

                        score = calc_score_med(hpm, cpm, uph, dtm, dropspm, dropspu, dropspdt, kad,
                                               deathpm, upm)

                        print(player_team)
                        if player_team == "Red":
                            emote = "[RED Medic] -"
                        else:
                            emote = "[BLU Medic] -"
                    else:
                        dpm = value['dapm']
                        cpm = (value['cpc']) / match_time
                        kad = float(value['kapd'])
                        dahr = 0 if value['hr'] == 0 else value['dmg'] / value['hr']
                        dadt = 0 if value['dt'] == 0 else value['dmg'] / value['dt']
                        deathpm = value['deaths'] / match_time
                        dtm = value['dt'] / match_time
                        kpm = value['kills'] / match_time
                        kd = float(value['kpd'])

                        score = calc_score(dpm, cpm, kad, dahr, dadt, deathpm, dtm, kpm, kd)

                        if player_team == "Red":
                            if type == "scout":
                                emote = "[RED Scout] -"
                            elif type == "soldier":
                                emote = "[RED Solly] -"
                            elif type == "pyro":
                                emote = "[RED Pyro] -"
                            elif type == "demoman":
                                emote = "[RED Demo] -"
                            elif type == "heavyweapons":
                                emote = "[RED Heavy] -"
                            elif type == "engineer":
                                emote = "[RED Engie] -"
                            elif type == "sniper":
                                emote = "[RED Sniper] -"
                            elif type == "spy":
                                emote = "[RED Spy] -"
                        else:
                            if type == "scout":
                                emote = "[BLU Scout] -"
                            elif type == "soldier":
                                emote = "[BLU Solly] -"
                            elif type == "pyro":
                                emote = "[BLU Pyro] -"
                            elif type == "demoman":
                                emote = "[BLU Demo] -"
                            elif type == "heavyweapons":
                                emote = "[BLU Heavy] -"
                            elif type == "engineer":
                                emote = "[BLU Engie] -"
                            elif type == "sniper":
                                emote = "[BLU Sniper] -"
                            elif type == "spy":
                                emote = "[BLU Spy] -"

                    all_players += [[names[key], emote, score]]

                print(all_players)
                all_players.sort(key=lambda x: x[2], reverse=True)

                msg = ""
                for i, player in enumerate(all_players):
                    msg += "{} {}: {}\n".format(player[1], player[0], player[2])

                await ctx.send(msg)

            else:
                await ctx.message.channel.send("Error getting match json! Make sure your log is formatted correctly.")


with open('tokens.json') as f:
    token_data = json.load(f)

if __name__ == "__main__":
    # for extension in extensions:
    #     try:
    #         client.load_extension(extension)
    #     except Exception as e:
    #         exc = '{}: {}'.format(type(e).__name__, e)
    #         print('Failed to load extension {}\n{}'.format(extension, exc))

    client.run(token_data["token"])
