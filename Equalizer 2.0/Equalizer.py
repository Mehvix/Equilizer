import json
import os
import sys
import math
import requests
     
def killScoreCalc(k, l):
    killExp = -0.25 * ((k * (1800 / l)) - 20)
    return 20 / (1 + math.exp(killExp))

def assistScoreCalc(a, l):
    assistExp = -0.5 * ((a * (1800 / l)) - 10)
    return 10 / (1 + math.exp(assistExp))

def deathScoreCalc(d, l):
    deathExp = -0.25 * ((d * (1800 / l)) - 20)
    return -20 / (1 + math.exp(deathExp)) + 20

def dmgScoreCalc(dm, l):
    dmgExp = -0.0015 * ((dm * (1800 / l)) - 7500)
    return 10 / (1 + math.exp(dmgExp))

def dtScoreCalc(dt, l):
    dtExp = -0.0015 * ((dt * (1800 / l)) - 7500)
    return -10 / (1 + math.exp(dtExp)) + 10

def cpcScoreCalc(c, l):
    cpcExp = -1.25 * ((c * (1800 / l)) - 7)
    return 10 / (1 + math.exp(cpcExp))

def healScoreCalc(h, l):
    healExp = -0.00075 * ((h * (1800 / l)) - 25500)
    return 10 / (1 + math.exp(healExp))

def dropScoreCalc(dr, l):
    dropExp = -2 * ((dr * (1800 / l)) - 1)
    return -10 / (1 + math.exp(dropExp)) + 10

def uberScoreCalc(ch, l):
    uberExp = -0.75 * ((ch * (1800 / l)) - 10)
    return 10 / (1 + math.exp(uberExp))

def commid_to_usteamid(commid):
    steamid64ident = 76561197960265728
    usteamid = []
    usteamid.append('[U:1:')
    steamidacct = int(commid) - steamid64ident
    
    usteamid.append(str(steamidacct) + ']')
    
    return ''.join(usteamid)


print('Enter LogID, link to log, Steam64 ID, or log profile')
inputID = input()
if 'logs.tf/profile' in inputID:
    profileID = inputID.split('logs.tf/profile/')[1].split('/')[0]
elif 'logs.tf' in inputID:
    logID = inputID.split("logs.tf/")[1].split("/")[0]
elif len(str(finalID)) == 17:
    profileID = int(inputID)
else:
    logID = int(inputID)
if 'profileID' in globals():
    profileLink = "http://logs.tf/api/v1/log?player=" + str(profileID)
    searchProfile = requests.get(profileLink)
    profileJson = searchProfile.json()
    print('How many logs do you want to track (Most Recent Logs)')
    logAmount = int(input())
    profileLogs = []
    steamID = commid_to_usteamid(profileID)
    for key in range(logAmount):
        profileLogsEnter = profileJson['logs'][key]["id"]
        profileLogLink = "http://logs.tf/json/" + str(profileLogsEnter)
        searchProfileLog = requests.get(profileLogLink)
        profileLogJson = searchProfileLog.json()
        player = profileLogJson['players'][steamID]
        kills = player['kills']
        assists = player['assists']
        deaths = player['deaths']
        dmg = player['dmg']
        dt = player['dt']
        cpc = player['cpc']
        heal = player['heal']
        drops = player['drops']
        ubers = player['ubers']
        match_time = profileLogJson['length']
        type = player["class_stats"][0]["type"]  
        if type == 'medic':
            if drops == 0:
                score = round((10/8) * (killScoreCalc(kills, match_time) + assistScoreCalc(assists, match_time) + deathScoreCalc(deaths, match_time) + dmgScoreCalc(dmg, match_time) + dtScoreCalc(dt, match_time) + cpcScoreCalc(cpc, match_time) + healScoreCalc(heal, match_time) + 10 + uberScoreCalc(ubers, match_time)))
            else:
                score = round((10/8) * (killScoreCalc(kills, match_time) + assistScoreCalc(assists, match_time) + deathScoreCalc(deaths, match_time) + dmgScoreCalc(dmg, match_time) + dtScoreCalc(dt, match_time) + cpcScoreCalc(cpc, match_time) + healScoreCalc(heal, match_time) + dropScoreCalc(drops, match_time) + uberScoreCalc(ubers, match_time)))
        else:
            if drops == 0:
                score = round((10/8) * (killScoreCalc(kills, match_time) + assistScoreCalc(assists, match_time) + deathScoreCalc(deaths, match_time) + dmgScoreCalc(dmg, match_time) + dtScoreCalc(dt, match_time) + cpcScoreCalc(cpc, match_time) + healScoreCalc(heal, match_time) + uberScoreCalc(ubers, match_time)))
            else:
                score = round((10/8) * (killScoreCalc(kills, match_time) + assistScoreCalc(assists, match_time) + deathScoreCalc(deaths, match_time) + dmgScoreCalc(dmg, match_time) + dtScoreCalc(dt, match_time) + cpcScoreCalc(cpc, match_time) + healScoreCalc(heal, match_time) + dropScoreCalc(drops, match_time) + uberScoreCalc(ubers, match_time)))
        profileLogs += [score]
    
    averageScore = sum(profileLogs) / len(profileLogs)
    print('Your average score in your last ' + str(logAmount) + ' games is ' + str(averageScore))
    print('Your scores were: ' + str(profileLogs))


else:
    logLink = "http://logs.tf/json/" + str(logID)
    searchLog = requests.get(logLink)
    logJson = searchLog.json()
    playerScore = []
    names = logJson["names"]
    for key in logJson["players"]:
        player = logJson["players"][key]
        type = player["class_stats"][0]["type"]  
        match_time = logJson['length']
        player_team = player['team']
        kills = player['kills']
        assists = player['assists']
        deaths = player['deaths']
        dmg = player['dmg']
        dt = player['dt']
        cpc = player['cpc']
        heal = player['heal']
        drops = player['drops']
        ubers = player['ubers']
        if type == 'medic':
            if player_team == "Red":
                prefix = "[RED Medic] -"
            else:
                prefix = "[BLU Medic] -"
            if drops == 0:
                score = round((10/8) * (killScoreCalc(kills, match_time) + assistScoreCalc(assists, match_time) + deathScoreCalc(deaths, match_time) + dmgScoreCalc(dmg, match_time) + dtScoreCalc(dt, match_time) + cpcScoreCalc(cpc, match_time) + healScoreCalc(heal, match_time) + 10 + uberScoreCalc(ubers, match_time)))
            else:
                score = round((10/8) * (killScoreCalc(kills, match_time) + assistScoreCalc(assists, match_time) + deathScoreCalc(deaths, match_time) + dmgScoreCalc(dmg, match_time) + dtScoreCalc(dt, match_time) + cpcScoreCalc(cpc, match_time) + healScoreCalc(heal, match_time) + dropScoreCalc(drops, match_time) + uberScoreCalc(ubers, match_time)))
        else:
            if drops == 0:
                score = round((10/8) * (killScoreCalc(kills, match_time) + assistScoreCalc(assists, match_time) + deathScoreCalc(deaths, match_time) + dmgScoreCalc(dmg, match_time) + dtScoreCalc(dt, match_time) + cpcScoreCalc(cpc, match_time) + healScoreCalc(heal, match_time) + uberScoreCalc(ubers, match_time)))
            else:
                score = round((10/8) * (killScoreCalc(kills, match_time) + assistScoreCalc(assists, match_time) + deathScoreCalc(deaths, match_time) + dmgScoreCalc(dmg, match_time) + dtScoreCalc(dt, match_time) + cpcScoreCalc(cpc, match_time) + healScoreCalc(heal, match_time) + dropScoreCalc(drops, match_time) + uberScoreCalc(ubers, match_time)))
            if player_team == "Red":
                if type == "scout":
                    prefix = "[RED Scout] -"
                elif type == "soldier":
                    prefix = "[RED Solly] -"
                elif type == "pyro":
                    prefix = "[RED Pyro] -"
                elif type == "demoman":
                    prefix = "[RED Demo] -"
                elif type == "heavyweapons":
                    prefix = "[RED Heavy] -"
                elif type == "engineer":
                    prefix = "[RED Engie] -"
                elif type == "sniper":
                    prefix = "[RED Sniper] -"
                elif type == "spy":
                    prefix = "[RED Spy] -"
            else:
                if type == "scout":
                    prefix = "[BLU Scout] -"
                elif type == "soldier":
                    prefix = "[BLU Solly] -"
                elif type == "pyro":
                    prefix = "[BLU Pyro] -"
                elif type == "demoman":
                    prefix = "[BLU Demo] -"
                elif type == "heavyweapons":
                    prefix = "[BLU Heavy] -"
                elif type == "engineer":
                    prefix = "[BLU Engie] -"
                elif type == "sniper":
                    prefix = "[BLU Sniper] -"
                elif type == "spy":
                    prefix = "[BLU Spy] -"
        playerScore += [[names[key], prefix, score]]

        playerScoreLength = len(playerScore)
        lastArray = [playerScore[playerScoreLength - 1]]
        
        lastArray.sort(key=lambda x: x[2], reverse=True)

        finalLog = ""

        for i, player in enumerate(lastArray):
           finalLog += "{} {}: {}\n".format(player[1], player[0], player[2])

        print(finalLog)
    
                        