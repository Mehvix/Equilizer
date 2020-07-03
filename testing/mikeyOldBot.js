//start bullshit
const Discord = require('discord.js');
const fetch = require("node-fetch");
const fs = require("fs");
const { waitForDebugger } = require('inspector');
const { WSAETIMEDOUT } = require('constants');
const { default: Collection } = require('@discordjs/collection');
const client = new Discord.Client();
const prefix = "!"

var channelMap = new Map();

client.on('ready', () => {
  console.log('Logged in as '+client.user.tag);
});


var logMemory = [];
var logID = [];
var steamMemory = [];
var dmg = [];
var h = [];
var k = [];
var d = [];
var dt = [];
var cap = [];
var mdk = [];
var a = [];
var as = [];
var hp = [];
var hr = [];
var adv = [];
var advt = [];
var t = [];
var jsonURL = [];
var response = [];

//start the bot
client.on('message', msg => {
    let content = msg.content.toLowerCase();
    if (content.startsWith(prefix)) {
        //allows for commands with parameters
        const args = msg.content.slice(prefix.length).split(/ +/);
        const command = args.shift().toLowerCase();
        //splits the logs.tf url by forward slashes
        const logArgs = msg.content.slice(prefix.length).split(`/`);

        if (command === "gamescore") {
            //logMemory is equal to the first parameter (the logs.tf url)
            let logMemory = args[0];
            //if the first parameter is not a number, split the url by forward slashes and take the fourth component (logid)
            if (isNaN(logMemory)) {
                logID = logArgs[3];
                console.log(logID);
            }
            //otherwise, just take the first arg as the logID
            else {
                logID = logMemory;
            }
            //if what we got is not a number, it's not an actual logID
            if (isNaN(logID)) {
                msg.channel.send('This is not a valid logID');
            }
            //actual code starts here
            else {
                let logData;
                let dmg;
                let h;
                let k;
                let d;
                let dt;
                let cap;
                let mdk;
                let a;
                let as;
                let hp;
                let mid;
                let t;
                let team;

                let mdkKey;
                let killKey;
                let num;

                //convert the logs.tf link into the link that contains a json version
                let jsonURL = "http://logs.tf/json/" + logID
                let steamKey;
                let steamLength;
                let steam1;
                let steam2;
                let steam3;
                let steam4;
                let steam5;
                let steam6;
                let steam7;
                let steam8;
                let steam9;
                let steam10;
                let steam11;
                let steam12;
                let steam13;
                let steam14;
                let steam15;
                let steam16;
                let steam17;
                let steam18;
                let steam19;
                let steam20;
                let steam21;
                let steam22;
                let steam23;
                let steam24;
                let steam1name;
                let steam2name;
                let steam3name;
                let steam4name;
                let steam5name;
                let steam6name;
                let steam7name;
                let steam8name;
                let steam9name;
                let steam10name;
                let steam11name;
                let steam12name;
                let steam13name;
                let steam14name;
                let steam15name;
                let steam16name;
                let steam17name;
                let steam18name;
                let steam19name;
                let steam20name;
                let steam21name;
                let steam22name;
                let steam23name;
                let steam24name;
                let steam1game;
                let steam2game;
                let steam3game;
                let steam4game;
                let steam5game;
                let steam6game;
                let steam7game;
                let steam8game;
                let steam9game;
                let steam10game;
                let steam11game;
                let steam12game;
                let steam13game;
                let steam14game;
                let steam15game;
                let steam16game;
                let steam17game;
                let steam18game;
                let steam19game;
                let steam20game;
                let steam21game;
                let steam22game;
                let steam23game;
                let steam24game;
                //send the logs.tf normal link (no json)
                msg.channel.send("http://logs.tf/" + logID);
                //parse the json and store it into logData
                fetch(jsonURL)
                    .then(res => res.json())
                    .then(data => logData = data)
                    .then(() => {
                        //find how many people are in the log
                        steamKey = Object.keys(logData['players'])
                        steamLength = steamKey.length
                        //set up as many variables as necessary according to how many people played (if 8 people played, we only need 8 variables)
                        if (steamLength > 0) {
                            steam1 = steamKey[0];
                            steam1name = logData['names'][steam1];
                        };
                        if (steamLength > 1) {
                            steam2 = steamKey[1];
                            steam2name = logData['names'][steam2];
                        };
                        if (steamLength > 2) {
                            steam3 = steamKey[2];
                            steam3name = logData['names'][steam3];
                        };
                        if (steamLength > 3) {
                            steam4 = steamKey[3];
                            steam4name = logData['names'][steam4];
                        };

                        if (steamLength > 4) {
                            steam5 = steamKey[4];
                            steam5name = logData['names'][steam5];
                        };

                        if (steamLength > 5) {
                            steam6 = steamKey[5];
                            steam6name = logData['names'][steam6];
                        };

                        if (steamLength > 6) {
                            steam7 = steamKey[6];
                            steam7name = logData['names'][steam7];
                        };

                        if (steamLength > 7) {
                            steam8 = steamKey[7];
                            steam8name = logData['names'][steam8];
                        };

                        if (steamLength > 8) {
                            steam9 = steamKey[8];
                            steam9name = logData['names'][steam9];
                        };

                        if (steamLength > 9) {
                            steam10 = steamKey[9];
                            steam10name = logData['names'][steam10];
                        };

                        if (steamLength > 10) {
                            steam11 = steamKey[10];
                            steam11name = logData['names'][steam11];
                        };

                        if (steamLength > 11) {
                            steam12 = steamKey[11];
                            steam12name = logData['names'][steam12];
                        };

                        if (steamLength > 12) {
                            steam13 = steamKey[12];
                            steam13name = logData['names'][steam13];
                        };

                        if (steamLength > 13) {
                            steam14 = steamKey[13];
                            steam14name = logData['names'][steam14];
                        };

                        if (steamLength > 14) {
                            steam15 = steamKey[14];
                            steam15name = logData['names'][steam15];
                        };

                        if (steamLength > 15) {
                            steam16 = steamKey[15];
                            steam16name = logData['names'][steam16];
                        };

                        if (steamLength > 16) {
                            steam17 = steamKey[16];
                            steam17name = logData['names'][steam17];
                        };

                        if (steamLength > 17) {
                            steam18 = steamKey[17];
                            steam18name = logData['names'][steam18];
                        };

                        if (steamLength > 18) {
                            steam19 = steamKey[18];
                            steam19name = logData['names'][steam19];
                        };

                        if (steamLength > 19) {
                            steam20 = steamKey[19];
                            steam20name = logData['names'][steam20];
                        };

                        if (steamLength > 20) {
                            steam21 = steamKey[20];
                            steam21name = logData['names'][steam21];
                        };

                        if (steamLength > 21) {
                            steam22 = steamKey[21];
                            steam22name = logData['names'][steam22];
                        };

                        if (steamLength > 22) {
                            steam23 = steamKey[22];
                            steam23name = logData['names'][steam23];
                        };

                        if (steamLength > 23) {
                            steam24 = steamKey[23];
                            steam24name = logData['names'][steam24];
                        };
                    })
                    //the rest of this shit except for the last part is copypasted 24 times so just read these comments and scroll down to the end
                    .then(() => {
                        /*Aight so
                         * the logs.tf json does this really weird shit that forces me to write this part
                         * basically, if you didn't get any medic kills, the json doesn't say "medic-kills": 0 - it just downright removes the category
                         * what I ORIGINALLY DID (that didn't work) was to see if there was even a category called "medic-kills" using a for loop(not the actual name, the actual name is "medic")
                         * THE PROBLEM IS
                         * if you didn't get any kills, the category containing "medic-kills" also disappears
                         * so, i had to create ANOTHER for loop outside of the first one to see if there was even a category for "class-kills" (also not the actual name)
                         * that's why the first part of this looks so shit*/
                        if (steamLength > 0) { //steamLength just counts how many people are on the server
                            killKey = Object.keys(logData['classkills']); //see if they got any kills
                            for (i = 0; i < killKey.length; i++) { //looking to see if the steamid matches
                                if (killKey[i] == steam1) { //if the steamid actually got a frag
                                    mdkKey = Object.keys(logData['classkills'][steam1]); //see if they got any medic kills
                                    for (num = 0; num < mdkKey.length; num++) { //looking within the steam id
                                        if (mdkKey[num] == "medic") { //if they have a category named medic kills
                                            mdk = logData['classkills'][steam1]['medic']; //store the amount of medic kills in mdk
                                        }
                                    }
                                }
                                else { //if they don't have any kills OR if they don't have any medic kills
                                    mdk = 0 //mdk is 0
                                }
                            };
                            //rest of this is basically store data from json into variables
                            dmg = logData['players'][steam1]['dmg'];
                            h = logData['players'][steam1]['heal'];
                            k = logData['players'][steam1]['kills'];
                            d = logData['players'][steam1]['deaths'];
                            dt = logData['players'][steam1]['dt'];
                            cap = logData['players'][steam1]['cpc'];
                            a = logData['players'][steam1]['assists'];
                            as = logData['players'][steam1]['as'];
                            hp = logData['players'][steam1]['medkits'];
                            team = logData['players'][steam1]['team']; //look at what team that they were on
                            mid = logData['teams'][team]['firstcaps']; //look at how many times their team won mid
                            t = logData['length'];
                            //the equation is this
                            steam1game = (Math.round(1000 * ((((dmg / 600) + (h / 1500) + ((k - d) * 0.8) - (dt / 1200) + (cap * 0.5) + (mdk * 1.5) + (a * 0.5) + (as * 0.5) - (hp * 0.1) - (5 - mid)) * (30 / t)))) / 10);
                        }
                    })
                    .then(() => {
                        if (steamLength > 1) {
                            killKey = Object.keys(logData['classkills']);
                            for (i = 0; i < killKey.length; i++) {
                                if (killKey[i] == steam2) {
                                    mdkKey = Object.keys(logData['classkills'][steam2]);
                                    for (num = 0; num < mdkKey.length; num++) {
                                        if (mdkKey[num] == "medic") {
                                            mdk = logData['classkills'][steam2]['medic'];
                                        }
                                    }
                                }
                                else {
                                    mdk = 0
                                }
                            };
                            dmg = logData['players'][steam2]['dmg'];
                            h = logData['players'][steam2]['heal'];
                            k = logData['players'][steam2]['kills'];
                            d = logData['players'][steam2]['deaths'];
                            dt = logData['players'][steam2]['dt'];
                            cap = logData['players'][steam2]['cpc'];
                            a = logData['players'][steam2]['assists'];
                            as = logData['players'][steam2]['as'];
                            hp = logData['players'][steam2]['medkits'];
                            team = logData['players'][steam2]['team'];
                            mid = logData['teams'][team]['firstcaps'];
                            t = logData['length'];
                            steam2game = (Math.round(1000 * ((((dmg / 600) + (h / 1500) + ((k - d) * 0.8) - (dt / 1200) + (cap * 0.5) + (mdk * 1.5) + (a * 0.5) + (as * 0.5) - (hp * 0.1) - (5 - mid)) * (30 / t)))) / 10);
                        }
                    })
                    .then(() => {
                        if (steamLength > 2) {
                            killKey = Object.keys(logData['classkills']);
                            for (i = 0; i < killKey.length; i++) {
                                if (killKey[i] == steam3) {
                                    mdkKey = Object.keys(logData['classkills'][steam3]);
                                    for (num = 0; num < mdkKey.length; num++) {
                                        if (mdkKey[num] == "medic") {
                                            mdk = logData['classkills'][steam3]['medic'];
                                        }
                                    }
                                }
                                else {
                                    mdk = 0
                                }
                            };
                            dmg = logData['players'][steam3]['dmg'];
                            h = logData['players'][steam3]['heal'];
                            k = logData['players'][steam3]['kills'];
                            d = logData['players'][steam3]['deaths'];
                            dt = logData['players'][steam3]['dt'];
                            cap = logData['players'][steam3]['cpc'];
                            a = logData['players'][steam3]['assists'];
                            as = logData['players'][steam3]['as'];
                            hp = logData['players'][steam3]['medkits'];
                            team = logData['players'][steam3]['team'];
                            mid = logData['teams'][team]['firstcaps'];
                            t = logData['length'];
                            steam3game = (Math.round(1000 * ((((dmg / 600) + (h / 1500) + ((k - d) * 0.8) - (dt / 1200) + (cap * 0.5) + (mdk * 1.5) + (a * 0.5) + (as * 0.5) - (hp * 0.1) - (5 - mid)) * (30 / t)))) / 10);
                        }
                    })
                    .then(() => {
                        if (steamLength > 3) {
                            killKey = Object.keys(logData['classkills']);
                            for (i = 0; i < killKey.length; i++) {
                                if (killKey[i] == steam4) {
                                    mdkKey = Object.keys(logData['classkills'][steam4]);
                                    for (num = 0; num < mdkKey.length; num++) {
                                        if (mdkKey[num] == "medic") {
                                            mdk = logData['classkills'][steam4]['medic'];
                                        }
                                    }
                                }
                                else {
                                    mdk = 0
                                }
                            };
                            dmg = logData['players'][steam4]['dmg'];
                            h = logData['players'][steam4]['heal'];
                            k = logData['players'][steam4]['kills'];
                            d = logData['players'][steam4]['deaths'];
                            dt = logData['players'][steam4]['dt'];
                            cap = logData['players'][steam4]['cpc'];
                            a = logData['players'][steam4]['assists'];
                            as = logData['players'][steam4]['as'];
                            hp = logData['players'][steam4]['medkits'];
                            team = logData['players'][steam4]['team'];
                            mid = logData['teams'][team]['firstcaps'];
                            t = logData['length'];
                            steam4game = (Math.round(1000 * ((((dmg / 600) + (h / 1500) + ((k - d) * 0.8) - (dt / 1200) + (cap * 0.5) + (mdk * 1.5) + (a * 0.5) + (as * 0.5) - (hp * 0.1) - (5 - mid)) * (30 / t)))) / 10);
                        }
                    })
                    .then(() => {
                        if (steamLength > 4) {
                            killKey = Object.keys(logData['classkills']);
                            for (i = 0; i < killKey.length; i++) {
                                if (killKey[i] == steam5) {
                                    mdkKey = Object.keys(logData['classkills'][steam5]);
                                    for (num = 0; num < mdkKey.length; num++) {
                                        if (mdkKey[num] == "medic") {
                                            mdk = logData['classkills'][steam5]['medic'];
                                        }
                                    }
                                }
                                else {
                                    mdk = 0
                                }
                            };
                            dmg = logData['players'][steam5]['dmg'];
                            h = logData['players'][steam5]['heal'];
                            k = logData['players'][steam5]['kills'];
                            d = logData['players'][steam5]['deaths'];
                            dt = logData['players'][steam5]['dt'];
                            cap = logData['players'][steam5]['cpc'];
                            a = logData['players'][steam5]['assists'];
                            as = logData['players'][steam5]['as'];
                            hp = logData['players'][steam5]['medkits'];
                            team = logData['players'][steam5]['team'];
                            mid = logData['teams'][team]['firstcaps'];
                            t = logData['length'];
                            steam5game = (Math.round(1000 * ((((dmg / 600) + (h / 1500) + ((k - d) * 0.8) - (dt / 1200) + (cap * 0.5) + (mdk * 1.5) + (a * 0.5) + (as * 0.5) - (hp * 0.1) - (5 - mid)) * (30 / t)))) / 10);
                        }
                    })
                    .then(() => {
                        if (steamLength > 5) {
                            killKey = Object.keys(logData['classkills']);
                            for (i = 0; i < killKey.length; i++) {
                                if (killKey[i] == steam6) {
                                    mdkKey = Object.keys(logData['classkills'][steam6]);
                                    for (num = 0; num < mdkKey.length; num++) {
                                        if (mdkKey[num] == "medic") {
                                            mdk = logData['classkills'][steam6]['medic'];
                                        }
                                    }
                                }
                                else {
                                    mdk = 0
                                }
                            };
                            dmg = logData['players'][steam6]['dmg'];
                            h = logData['players'][steam6]['heal'];
                            k = logData['players'][steam6]['kills'];
                            d = logData['players'][steam6]['deaths'];
                            dt = logData['players'][steam6]['dt'];
                            cap = logData['players'][steam6]['cpc'];
                            a = logData['players'][steam6]['assists'];
                            as = logData['players'][steam6]['as'];
                            hp = logData['players'][steam6]['medkits'];
                            team = logData['players'][steam6]['team'];
                            mid = logData['teams'][team]['firstcaps'];
                            t = logData['length'];
                            steam6game = (Math.round(1000 * ((((dmg / 600) + (h / 1500) + ((k - d) * 0.8) - (dt / 1200) + (cap * 0.5) + (mdk * 1.5) + (a * 0.5) + (as * 0.5) - (hp * 0.1) - (5 - mid)) * (30 / t)))) / 10);
                        }
                    })
                    .then(() => {
                        if (steamLength > 6) {
                            killKey = Object.keys(logData['classkills']);
                            for (i = 0; i < killKey.length; i++) {
                                if (killKey[i] == steam7) {
                                    mdkKey = Object.keys(logData['classkills'][steam7]);
                                    for (num = 0; num < mdkKey.length; num++) {
                                        if (mdkKey[num] == "medic") {
                                            mdk = logData['classkills'][steam7]['medic'];
                                        }
                                    }
                                }
                                else {
                                    mdk = 0
                                }
                            };
                            dmg = logData['players'][steam7]['dmg'];
                            h = logData['players'][steam7]['heal'];
                            k = logData['players'][steam7]['kills'];
                            d = logData['players'][steam7]['deaths'];
                            dt = logData['players'][steam7]['dt'];
                            cap = logData['players'][steam7]['cpc'];
                            a = logData['players'][steam7]['assists'];
                            as = logData['players'][steam7]['as'];
                            hp = logData['players'][steam7]['medkits'];
                            team = logData['players'][steam7]['team'];
                            mid = logData['teams'][team]['firstcaps'];
                            t = logData['length'];
                            steam7game = (Math.round(1000 * ((((dmg / 600) + (h / 1500) + ((k - d) * 0.8) - (dt / 1200) + (cap * 0.5) + (mdk * 1.5) + (a * 0.5) + (as * 0.5) - (hp * 0.1) - (5 - mid)) * (30 / t)))) / 10);
                        }
                    })
                    .then(() => {
                        if (steamLength > 7) {
                            killKey = Object.keys(logData['classkills']);
                            for (i = 0; i < killKey.length; i++) {
                                if (killKey[i] == steam8) {
                                    mdkKey = Object.keys(logData['classkills'][steam8]);
                                    for (num = 0; num < mdkKey.length; num++) {
                                        if (mdkKey[num] == "medic") {
                                            mdk = logData['classkills'][steam8]['medic'];
                                        }
                                    }
                                }
                                else {
                                    mdk = 0
                                }
                            };
                            dmg = logData['players'][steam8]['dmg'];
                            h = logData['players'][steam8]['heal'];
                            k = logData['players'][steam8]['kills'];
                            d = logData['players'][steam8]['deaths'];
                            dt = logData['players'][steam8]['dt'];
                            cap = logData['players'][steam8]['cpc'];
                            a = logData['players'][steam8]['assists'];
                            as = logData['players'][steam8]['as'];
                            hp = logData['players'][steam8]['medkits'];
                            team = logData['players'][steam8]['team'];
                            mid = logData['teams'][team]['firstcaps'];
                            t = logData['length'];
                            steam8game = (Math.round(1000 * ((((dmg / 600) + (h / 1500) + ((k - d) * 0.8) - (dt / 1200) + (cap * 0.5) + (mdk * 1.5) + (a * 0.5) + (as * 0.5) - (hp * 0.1) - (5 - mid)) * (30 / t)))) / 10);
                        }
                    })
                    .then(() => {
                        if (steamLength > 8) {
                            killKey = Object.keys(logData['classkills']);
                            for (i = 0; i < killKey.length; i++) {
                                if (killKey[i] == steam9) {
                                    mdkKey = Object.keys(logData['classkills'][steam9]);
                                    for (num = 0; num < mdkKey.length; num++) {
                                        if (mdkKey[num] == "medic") {
                                            mdk = logData['classkills'][steam9]['medic'];
                                        }
                                    }
                                }
                                else {
                                    mdk = 0
                                }
                            };
                            dmg = logData['players'][steam9]['dmg'];
                            h = logData['players'][steam9]['heal'];
                            k = logData['players'][steam9]['kills'];
                            d = logData['players'][steam9]['deaths'];
                            dt = logData['players'][steam9]['dt'];
                            cap = logData['players'][steam9]['cpc'];
                            a = logData['players'][steam9]['assists'];
                            as = logData['players'][steam9]['as'];
                            hp = logData['players'][steam9]['medkits'];
                            team = logData['players'][steam9]['team'];
                            mid = logData['teams'][team]['firstcaps'];
                            t = logData['length'];
                            steam9game = (Math.round(1000 * ((((dmg / 600) + (h / 1500) + ((k - d) * 0.8) - (dt / 1200) + (cap * 0.5) + (mdk * 1.5) + (a * 0.5) + (as * 0.5) - (hp * 0.1) - (5 - mid)) * (30 / t)))) / 10);
                        }
                    })
                    .then(() => {
                        if (steamLength > 9) {
                            killKey = Object.keys(logData['classkills']);
                            for (i = 0; i < killKey.length; i++) {
                                if (killKey[i] == steam10) {
                                    mdkKey = Object.keys(logData['classkills'][steam10]);
                                    for (num = 0; num < mdkKey.length; num++) {
                                        if (mdkKey[num] == "medic") {
                                            mdk = logData['classkills'][steam10]['medic'];
                                        }
                                    }
                                }
                                else {
                                    mdk = 0
                                }
                            };
                            dmg = logData['players'][steam10]['dmg'];
                            h = logData['players'][steam10]['heal'];
                            k = logData['players'][steam10]['kills'];
                            d = logData['players'][steam10]['deaths'];
                            dt = logData['players'][steam10]['dt'];
                            cap = logData['players'][steam10]['cpc'];
                            a = logData['players'][steam10]['assists'];
                            as = logData['players'][steam10]['as'];
                            hp = logData['players'][steam10]['medkits'];
                            team = logData['players'][steam10]['team'];
                            mid = logData['teams'][team]['firstcaps'];
                            t = logData['length'];
                            steam10game = (Math.round(1000 * ((((dmg / 600) + (h / 1500) + ((k - d) * 0.8) - (dt / 1200) + (cap * 0.5) + (mdk * 1.5) + (a * 0.5) + (as * 0.5) - (hp * 0.1) - (5 - mid)) * (30 / t)))) / 10);
                        }
                    })
                    .then(() => {
                        if (steamLength > 10) {
                            killKey = Object.keys(logData['classkills']);
                            for (i = 0; i < killKey.length; i++) {
                                if (killKey[i] == steam11) {
                                    mdkKey = Object.keys(logData['classkills'][steam11]);
                                    for (num = 0; num < mdkKey.length; num++) {
                                        if (mdkKey[num] == "medic") {
                                            mdk = logData['classkills'][steam11]['medic'];
                                        }
                                    }
                                }
                                else {
                                    mdk = 0
                                }
                            };
                            dmg = logData['players'][steam11]['dmg'];
                            h = logData['players'][steam11]['heal'];
                            k = logData['players'][steam11]['kills'];
                            d = logData['players'][steam11]['deaths'];
                            dt = logData['players'][steam11]['dt'];
                            cap = logData['players'][steam11]['cpc'];
                            a = logData['players'][steam11]['assists'];
                            as = logData['players'][steam11]['as'];
                            hp = logData['players'][steam11]['medkits'];
                            team = logData['players'][steam11]['team'];
                            mid = logData['teams'][team]['firstcaps'];
                            t = logData['length'];
                            steam11game = (Math.round(1000 * ((((dmg / 600) + (h / 1500) + ((k - d) * 0.8) - (dt / 1200) + (cap * 0.5) + (mdk * 1.5) + (a * 0.5) + (as * 0.5) - (hp * 0.1) - (5 - mid)) * (30 / t)))) / 10);
                        }
                    })
                    .then(() => {
                        if (steamLength > 11) {
                            killKey = Object.keys(logData['classkills']);
                            for (i = 0; i < killKey.length; i++) {
                                if (killKey[i] == steam12) {
                                    mdkKey = Object.keys(logData['classkills'][steam12]);
                                    for (num = 0; num < mdkKey.length; num++) {
                                        if (mdkKey[num] == "medic") {
                                            mdk = logData['classkills'][steam12]['medic'];
                                        }
                                    }
                                }
                                else {
                                    mdk = 0
                                }
                            };
                            dmg = logData['players'][steam12]['dmg'];
                            h = logData['players'][steam12]['heal'];
                            k = logData['players'][steam12]['kills'];
                            d = logData['players'][steam12]['deaths'];
                            dt = logData['players'][steam12]['dt'];
                            cap = logData['players'][steam12]['cpc'];
                            a = logData['players'][steam12]['assists'];
                            as = logData['players'][steam12]['as'];
                            hp = logData['players'][steam12]['medkits'];
                            team = logData['players'][steam12]['team'];
                            mid = logData['teams'][team]['firstcaps'];
                            t = logData['length'];
                            steam12game = (Math.round(1000 * ((((dmg / 600) + (h / 1500) + ((k - d) * 0.8) - (dt / 1200) + (cap * 0.5) + (mdk * 1.5) + (a * 0.5) + (as * 0.5) - (hp * 0.1) - (5 - mid)) * (30 / t)))) / 10);
                        }
                    })
                    .then(() => {
                        if (steamLength > 12) {
                            killKey = Object.keys(logData['classkills']);
                            for (i = 0; i < killKey.length; i++) {
                                if (killKey[i] == steam13) {
                                    mdkKey = Object.keys(logData['classkills'][steam13]);
                                    for (num = 0; num < mdkKey.length; num++) {
                                        if (mdkKey[num] == "medic") {
                                            mdk = logData['classkills'][steam13]['medic'];
                                        }
                                    }
                                }
                                else {
                                    mdk = 0
                                }
                            };
                            dmg = logData['players'][steam13]['dmg'];
                            h = logData['players'][steam13]['heal'];
                            k = logData['players'][steam13]['kills'];
                            d = logData['players'][steam13]['deaths'];
                            dt = logData['players'][steam13]['dt'];
                            cap = logData['players'][steam13]['cpc'];
                            a = logData['players'][steam13]['assists'];
                            as = logData['players'][steam13]['as'];
                            hp = logData['players'][steam13]['medkits'];
                            team = logData['players'][steam13]['team'];
                            mid = logData['teams'][team]['firstcaps'];
                            t = logData['length'];
                            steam13game = (Math.round(1000 * ((((dmg / 600) + (h / 1500) + ((k - d) * 0.8) - (dt / 1200) + (cap * 0.5) + (mdk * 1.5) + (a * 0.5) + (as * 0.5) - (hp * 0.1) - (5 - mid)) * (30 / t)))) / 10);
                        }
                    })
                    .then(() => {
                        if (steamLength > 13) {
                            killKey = Object.keys(logData['classkills']);
                            for (i = 0; i < killKey.length; i++) {
                                if (killKey[i] == steam14) {
                                    mdkKey = Object.keys(logData['classkills'][steam14]);
                                    for (num = 0; num < mdkKey.length; num++) {
                                        if (mdkKey[num] == "medic") {
                                            mdk = logData['classkills'][steam14]['medic'];
                                        }
                                    }
                                }
                                else {
                                    mdk = 0
                                }
                            };
                            dmg = logData['players'][steam14]['dmg'];
                            h = logData['players'][steam14]['heal'];
                            k = logData['players'][steam14]['kills'];
                            d = logData['players'][steam14]['deaths'];
                            dt = logData['players'][steam14]['dt'];
                            cap = logData['players'][steam14]['cpc'];
                            a = logData['players'][steam14]['assists'];
                            as = logData['players'][steam14]['as'];
                            hp = logData['players'][steam14]['medkits'];
                            team = logData['players'][steam14]['team'];
                            mid = logData['teams'][team]['firstcaps'];
                            t = logData['length'];
                            steam14game = (Math.round(1000 * ((((dmg / 600) + (h / 1500) + ((k - d) * 0.8) - (dt / 1200) + (cap * 0.5) + (mdk * 1.5) + (a * 0.5) + (as * 0.5) - (hp * 0.1) - (5 - mid)) * (30 / t)))) / 10);
                        }
                    })
                    .then(() => {
                        if (steamLength > 14) {
                            killKey = Object.keys(logData['classkills']);
                            for (i = 0; i < killKey.length; i++) {
                                if (killKey[i] == steam15) {
                                    mdkKey = Object.keys(logData['classkills'][steam15]);
                                    for (num = 0; num < mdkKey.length; num++) {
                                        if (mdkKey[num] == "medic") {
                                            mdk = logData['classkills'][steam15]['medic'];
                                        }
                                    }
                                }
                                else {
                                    mdk = 0
                                }
                            };
                            dmg = logData['players'][steam15]['dmg'];
                            h = logData['players'][steam15]['heal'];
                            k = logData['players'][steam15]['kills'];
                            d = logData['players'][steam15]['deaths'];
                            dt = logData['players'][steam15]['dt'];
                            cap = logData['players'][steam15]['cpc'];
                            a = logData['players'][steam15]['assists'];
                            as = logData['players'][steam15]['as'];
                            hp = logData['players'][steam15]['medkits'];
                            team = logData['players'][steam15]['team'];
                            mid = logData['teams'][team]['firstcaps'];
                            t = logData['length'];
                            steam15game = (Math.round(1000 * ((((dmg / 600) + (h / 1500) + ((k - d) * 0.8) - (dt / 1200) + (cap * 0.5) + (mdk * 1.5) + (a * 0.5) + (as * 0.5) - (hp * 0.1) - (5 - mid)) * (30 / t)))) / 10);
                        }
                    })
                    .then(() => {
                        if (steamLength > 15) {
                            killKey = Object.keys(logData['classkills']);
                            for (i = 0; i < killKey.length; i++) {
                                if (killKey[i] == steam16) {
                                    mdkKey = Object.keys(logData['classkills'][steam16]);
                                    for (num = 0; num < mdkKey.length; num++) {
                                        if (mdkKey[num] == "medic") {
                                            mdk = logData['classkills'][steam16]['medic'];
                                        }
                                    }
                                }
                                else {
                                    mdk = 0
                                }
                            };
                            dmg = logData['players'][steam16]['dmg'];
                            h = logData['players'][steam16]['heal'];
                            k = logData['players'][steam16]['kills'];
                            d = logData['players'][steam16]['deaths'];
                            dt = logData['players'][steam16]['dt'];
                            cap = logData['players'][steam16]['cpc'];
                            a = logData['players'][steam16]['assists'];
                            as = logData['players'][steam16]['as'];
                            hp = logData['players'][steam16]['medkits'];
                            team = logData['players'][steam16]['team'];
                            mid = logData['teams'][team]['firstcaps'];
                            t = logData['length'];
                            steam16game = (Math.round(1000 * ((((dmg / 600) + (h / 1500) + ((k - d) * 0.8) - (dt / 1200) + (cap * 0.5) + (mdk * 1.5) + (a * 0.5) + (as * 0.5) - (hp * 0.1) - (5 - mid)) * (30 / t)))) / 10);
                        }
                    })
                    .then(() => {
                        if (steamLength > 16) {
                            killKey = Object.keys(logData['classkills']);
                            for (i = 0; i < killKey.length; i++) {
                                if (killKey[i] == steam17) {
                                    mdkKey = Object.keys(logData['classkills'][steam17]);
                                    for (num = 0; num < mdkKey.length; num++) {
                                        if (mdkKey[num] == "medic") {
                                            mdk = logData['classkills'][steam17]['medic'];
                                        }
                                    }
                                }
                                else {
                                    mdk = 0
                                }
                            };
                            dmg = logData['players'][steam17]['dmg'];
                            h = logData['players'][steam17]['heal'];
                            k = logData['players'][steam17]['kills'];
                            d = logData['players'][steam17]['deaths'];
                            dt = logData['players'][steam17]['dt'];
                            cap = logData['players'][steam17]['cpc'];
                            a = logData['players'][steam17]['assists'];
                            as = logData['players'][steam17]['as'];
                            hp = logData['players'][steam17]['medkits'];
                            team = logData['players'][steam17]['team'];
                            mid = logData['teams'][team]['firstcaps'];
                            t = logData['length'];
                            steam17game = (Math.round(1000 * ((((dmg / 600) + (h / 1500) + ((k - d) * 0.8) - (dt / 1200) + (cap * 0.5) + (mdk * 1.5) + (a * 0.5) + (as * 0.5) - (hp * 0.1) - (5 - mid)) * (30 / t)))) / 10);
                        }
                    })
                    .then(() => {
                        if (steamLength > 17) {
                            killKey = Object.keys(logData['classkills']);
                            for (i = 0; i < killKey.length; i++) {
                                if (killKey[i] == steam18) {
                                    mdkKey = Object.keys(logData['classkills'][steam18]);
                                    for (num = 0; num < mdkKey.length; num++) {
                                        if (mdkKey[num] == "medic") {
                                            mdk = logData['classkills'][steam18]['medic'];
                                        }
                                    }
                                }
                                else {
                                    mdk = 0
                                }
                            };
                            dmg = logData['players'][steam18]['dmg'];
                            h = logData['players'][steam18]['heal'];
                            k = logData['players'][steam18]['kills'];
                            d = logData['players'][steam18]['deaths'];
                            dt = logData['players'][steam18]['dt'];
                            cap = logData['players'][steam18]['cpc'];
                            a = logData['players'][steam18]['assists'];
                            as = logData['players'][steam18]['as'];
                            hp = logData['players'][steam18]['medkits'];
                            team = logData['players'][steam18]['team'];
                            mid = logData['teams'][team]['firstcaps'];
                            t = logData['length'];
                            steam18game = (Math.round(1000 * ((((dmg / 600) + (h / 1500) + ((k - d) * 0.8) - (dt / 1200) + (cap * 0.5) + (mdk * 1.5) + (a * 0.5) + (as * 0.5) - (hp * 0.1) - (5 - mid)) * (30 / t)))) / 10);
                        }
                    })
                    .then(() => {
                        if (steamLength > 18) {
                            killKey = Object.keys(logData['classkills']);
                            for (i = 0; i < killKey.length; i++) {
                                if (killKey[i] == steam19) {
                                    mdkKey = Object.keys(logData['classkills'][steam19]);
                                    for (num = 0; num < mdkKey.length; num++) {
                                        if (mdkKey[num] == "medic") {
                                            mdk = logData['classkills'][steam19]['medic'];
                                        }
                                    }
                                }
                                else {
                                    mdk = 0
                                }
                            };
                            dmg = logData['players'][steam19]['dmg'];
                            h = logData['players'][steam19]['heal'];
                            k = logData['players'][steam19]['kills'];
                            d = logData['players'][steam19]['deaths'];
                            dt = logData['players'][steam19]['dt'];
                            cap = logData['players'][steam19]['cpc'];
                            a = logData['players'][steam19]['assists'];
                            as = logData['players'][steam19]['as'];
                            hp = logData['players'][steam19]['medkits'];
                            team = logData['players'][steam19]['team'];
                            mid = logData['teams'][team]['firstcaps'];
                            t = logData['length'];
                            steam19game = (Math.round(1000 * ((((dmg / 600) + (h / 1500) + ((k - d) * 0.8) - (dt / 1200) + (cap * 0.5) + (mdk * 1.5) + (a * 0.5) + (as * 0.5) - (hp * 0.1) - (5 - mid)) * (30 / t)))) / 10);
                        }
                    })
                    .then(() => {
                        if (steamLength > 19) {
                            killKey = Object.keys(logData['classkills']);
                            for (i = 0; i < killKey.length; i++) {
                                if (killKey[i] == steam20) {
                                    mdkKey = Object.keys(logData['classkills'][steam20]);
                                    for (num = 0; num < mdkKey.length; num++) {
                                        if (mdkKey[num] == "medic") {
                                            mdk = logData['classkills'][steam20]['medic'];
                                        }
                                    }
                                }
                                else {
                                    mdk = 0
                                }
                            };
                            dmg = logData['players'][steam20]['dmg'];
                            h = logData['players'][steam20]['heal'];
                            k = logData['players'][steam20]['kills'];
                            d = logData['players'][steam20]['deaths'];
                            dt = logData['players'][steam20]['dt'];
                            cap = logData['players'][steam20]['cpc'];
                            a = logData['players'][steam20]['assists'];
                            as = logData['players'][steam20]['as'];
                            hp = logData['players'][steam20]['medkits'];
                            team = logData['players'][steam20]['team'];
                            mid = logData['teams'][team]['firstcaps'];
                            t = logData['length'];
                            steam20game = (Math.round(1000 * ((((dmg / 600) + (h / 1500) + ((k - d) * 0.8) - (dt / 1200) + (cap * 0.5) + (mdk * 1.5) + (a * 0.5) + (as * 0.5) - (hp * 0.1) - (5 - mid)) * (30 / t)))) / 10);
                        }
                    })
                    .then(() => {
                        if (steamLength > 20) {
                            killKey = Object.keys(logData['classkills']);
                            for (i = 0; i < killKey.length; i++) {
                                if (killKey[i] == steam21) {
                                    mdkKey = Object.keys(logData['classkills'][steam21]);
                                    for (num = 0; num < mdkKey.length; num++) {
                                        if (mdkKey[num] == "medic") {
                                            mdk = logData['classkills'][steam21]['medic'];
                                        }
                                    }
                                }
                                else {
                                    mdk = 0
                                }
                            };
                            dmg = logData['players'][steam21]['dmg'];
                            h = logData['players'][steam21]['heal'];
                            k = logData['players'][steam21]['kills'];
                            d = logData['players'][steam21]['deaths'];
                            dt = logData['players'][steam21]['dt'];
                            cap = logData['players'][steam21]['cpc'];
                            a = logData['players'][steam21]['assists'];
                            as = logData['players'][steam21]['as'];
                            hp = logData['players'][steam21]['medkits'];
                            team = logData['players'][steam21]['team'];
                            mid = logData['teams'][team]['firstcaps'];
                            t = logData['length'];
                            steam21game = (Math.round(1000 * ((((dmg / 600) + (h / 1500) + ((k - d) * 0.8) - (dt / 1200) + (cap * 0.5) + (mdk * 1.5) + (a * 0.5) + (as * 0.5) - (hp * 0.1) - (5 - mid)) * (30 / t)))) / 10);
                        }
                    })
                    .then(() => {
                        if (steamLength > 21) {
                            killKey = Object.keys(logData['classkills']);
                            for (i = 0; i < killKey.length; i++) {
                                if (killKey[i] == steam22) {
                                    mdkKey = Object.keys(logData['classkills'][steam22]);
                                    for (num = 0; num < mdkKey.length; num++) {
                                        if (mdkKey[num] == "medic") {
                                            mdk = logData['classkills'][steam22]['medic'];
                                        }
                                    }
                                }
                                else {
                                    mdk = 0
                                }
                            };
                            dmg = logData['players'][steam22]['dmg'];
                            h = logData['players'][steam22]['heal'];
                            k = logData['players'][steam22]['kills'];
                            d = logData['players'][steam22]['deaths'];
                            dt = logData['players'][steam22]['dt'];
                            cap = logData['players'][steam22]['cpc'];
                            a = logData['players'][steam22]['assists'];
                            as = logData['players'][steam22]['as'];
                            hp = logData['players'][steam22]['medkits'];
                            team = logData['players'][steam22]['team'];
                            mid = logData['teams'][team]['firstcaps'];
                            t = logData['length'];
                            steam22game = (Math.round(1000 * ((((dmg / 600) + (h / 1500) + ((k - d) * 0.8) - (dt / 1200) + (cap * 0.5) + (mdk * 1.5) + (a * 0.5) + (as * 0.5) - (hp * 0.1) - (5 - mid)) * (30 / t)))) / 10);
                        }
                    })
                    .then(() => {
                        if (steamLength > 22) {
                            killKey = Object.keys(logData['classkills']);
                            for (i = 0; i < killKey.length; i++) {
                                if (killKey[i] == steam23) {
                                    mdkKey = Object.keys(logData['classkills'][steam23]);
                                    for (num = 0; num < mdkKey.length; num++) {
                                        if (mdkKey[num] == "medic") {
                                            mdk = logData['classkills'][steam23]['medic'];
                                        }
                                    }
                                }
                                else {
                                    mdk = 0
                                }
                            };
                            dmg = logData['players'][steam23]['dmg'];
                            h = logData['players'][steam23]['heal'];
                            k = logData['players'][steam23]['kills'];
                            d = logData['players'][steam23]['deaths'];
                            dt = logData['players'][steam23]['dt'];
                            cap = logData['players'][steam23]['cpc'];
                            a = logData['players'][steam23]['assists'];
                            as = logData['players'][steam23]['as'];
                            hp = logData['players'][steam23]['medkits'];
                            team = logData['players'][steam23]['team'];
                            mid = logData['teams'][team]['firstcaps'];
                            t = logData['length'];
                            steam23game = (Math.round(1000 * ((((dmg / 600) + (h / 1500) + ((k - d) * 0.8) - (dt / 1200) + (cap * 0.5) + (mdk * 1.5) + (a * 0.5) + (as * 0.5) - (hp * 0.1) - (5 - mid)) * (30 / t)))) / 10);
                        }
                    })
                    .then(() => {
                        if (steamLength > 23) {
                            killKey = Object.keys(logData['classkills']);
                            for (i = 0; i < killKey.length; i++) {
                                if (killKey[i] == steam24) {
                                    mdkKey = Object.keys(logData['classkills'][steam24]);
                                    for (num = 0; num < mdkKey.length; num++) {
                                        if (mdkKey[num] == "medic") {
                                            mdk = logData['classkills'][steam24]['medic'];
                                        }
                                    }
                                }
                                else {
                                    mdk = 0
                                }
                            };
                            dmg = logData['players'][steam24]['dmg'];
                            h = logData['players'][steam24]['heal'];
                            k = logData['players'][steam24]['kills'];
                            d = logData['players'][steam24]['deaths'];
                            dt = logData['players'][steam24]['dt'];
                            cap = logData['players'][steam24]['cpc'];
                            a = logData['players'][steam24]['assists'];
                            as = logData['players'][steam24]['as'];
                            hp = logData['players'][steam24]['medkits'];
                            team = logData['players'][steam24]['team'];
                            mid = logData['teams'][team]['firstcaps'];
                            t = logData['length'];
                            steam24game = (Math.round(1000 * ((((dmg / 600) + (h / 1500) + ((k - d) * 0.8) - (dt / 1200) + (cap * 0.5) + (mdk * 1.5) + (a * 0.5) + (as * 0.5) - (hp * 0.1) - (5 - mid)) * (30 / t)))) / 10);
                        }
                    })
                    /*STOP SCROLLING DOWN
                     * 
                     * 
                     * 
                     * 
                     * 
                     * 
                     * 
                     * 
                     * 
                     * 
                     * 
                     * 
                     * 
                     * 
                     * 
                     * 
                     * 
                     * Stop SCROLLING DOWN*/
                    //I don't support 25+ players so i say that only 24 people are displayed
                    .then(() => {
                        if (steamLength > 24) {
                            msg.channel.send("More than 24 players have been logged: Only the top 24 steamids are displayed.")
                        }
                    })
                    //send message depending on how many people were here
                    .then(() => {
                        if (steamLength == 1) {
                            msg.channel.send(steam1name + `'s Gamescore: ` + steam1game)
                        }
                        if (steamLength == 2) {
                            msg.channel.send(steam1name + `'s Gamescore: ` + steam1game + "\n" + steam2name + `'s Gamescore: ` + steam2game)
                        }
                        if (steamLength == 3) {
                            msg.channel.send(steam1name + `'s Gamescore: ` + steam1game + "\n" + steam2name + `'s Gamescore: ` + steam2game + "\n" + steam3name + `'s Gamescore: ` + steam3game)
                        }
                        if (steamLength == 4) {
                            msg.channel.send(steam1name + `'s Gamescore: ` + steam1game + "\n" + steam2name + `'s Gamescore: ` + steam2game + "\n" + steam3name + `'s Gamescore: ` + steam3game + "\n" + steam4name + `'s Gamescore: ` + steam4game)
                        }
                        if (steamLength == 5) {
                            msg.channel.send(steam1name + `'s Gamescore: ` + steam1game + "\n" + steam2name + `'s Gamescore: ` + steam2game + "\n" + steam3name + `'s Gamescore: ` + steam3game + "\n" + steam4name + `'s Gamescore: ` + steam4game + "\n" + steam5name + `'s Gamescore: ` + steam5game)
                        }
                        if (steamLength == 6) {
                            msg.channel.send(steam1name + `'s Gamescore: ` + steam1game + "\n" + steam2name + `'s Gamescore: ` + steam2game + "\n" + steam3name + `'s Gamescore: ` + steam3game + "\n" + steam4name + `'s Gamescore: ` + steam4game + "\n" + steam5name + `'s Gamescore: ` + steam5game + "\n" + steam6name + `'s Gamescore: ` + steam6game)
                        }
                        if (steamLength == 7) {
                            msg.channel.send(steam1name + `'s Gamescore: ` + steam1game + "\n" + steam2name + `'s Gamescore: ` + steam2game + "\n" + steam3name + `'s Gamescore: ` + steam3game + "\n" + steam4name + `'s Gamescore: ` + steam4game + "\n" + steam5name + `'s Gamescore: ` + steam5game + "\n" + steam6name + `'s Gamescore: ` + steam6game)
                            msg.channel.send(steam7name + `'s Gamescore: ` + steam7game)
                        }
                        if (steamLength == 8) {
                            msg.channel.send(steam1name + `'s Gamescore: ` + steam1game + "\n" + steam2name + `'s Gamescore: ` + steam2game + "\n" + steam3name + `'s Gamescore: ` + steam3game + "\n" + steam4name + `'s Gamescore: ` + steam4game + "\n" + steam5name + `'s Gamescore: ` + steam5game + "\n" + steam6name + `'s Gamescore: ` + steam6game)
                            msg.channel.send(steam7name + `'s Gamescore: ` + steam7game + "\n" + steam8name + `'s Gamescore: ` + steam8game)
                        }
                        if (steamLength == 9) {
                            msg.channel.send(steam1name + `'s Gamescore: ` + steam1game + "\n" + steam2name + `'s Gamescore: ` + steam2game + "\n" + steam3name + `'s Gamescore: ` + steam3game + "\n" + steam4name + `'s Gamescore: ` + steam4game + "\n" + steam5name + `'s Gamescore: ` + steam5game + "\n" + steam6name + `'s Gamescore: ` + steam6game)
                            msg.channel.send(steam7name + `'s Gamescore: ` + steam7game + "\n" + steam8name + `'s Gamescore: ` + steam8game + "\n" + steam9name + `'s Gamescore: ` + steam9game)
                        }
                        if (steamLength == 10) {
                            msg.channel.send(steam1name + `'s Gamescore: ` + steam1game + "\n" + steam2name + `'s Gamescore: ` + steam2game + "\n" + steam3name + `'s Gamescore: ` + steam3game + "\n" + steam4name + `'s Gamescore: ` + steam4game + "\n" + steam5name + `'s Gamescore: ` + steam5game + "\n" + steam6name + `'s Gamescore: ` + steam6game)
                            msg.channel.send(steam7name + `'s Gamescore: ` + steam7game + "\n" + steam8name + `'s Gamescore: ` + steam8game + "\n" + steam9name + `'s Gamescore: ` + steam9game + "\n" + steam10name + `'s Gamescore: ` + steam10game)
                        }
                        if (steamLength == 11) {
                            msg.channel.send(steam1name + `'s Gamescore: ` + steam1game + "\n" + steam2name + `'s Gamescore: ` + steam2game + "\n" + steam3name + `'s Gamescore: ` + steam3game + "\n" + steam4name + `'s Gamescore: ` + steam4game + "\n" + steam5name + `'s Gamescore: ` + steam5game + "\n" + steam6name + `'s Gamescore: ` + steam6game)
                            msg.channel.send(steam7name + `'s Gamescore: ` + steam7game + "\n" + steam8name + `'s Gamescore: ` + steam8game + "\n" + steam9name + `'s Gamescore: ` + steam9game + "\n" + steam10name + `'s Gamescore: ` + steam10game + "\n" + steam11name + `'s Gamescore: ` + steam11game)
                        }
                        if (steamLength == 12) {
                            msg.channel.send(steam1name + `'s Gamescore: ` + steam1game + "\n" + steam2name + `'s Gamescore: ` + steam2game + "\n" + steam3name + `'s Gamescore: ` + steam3game + "\n" + steam4name + `'s Gamescore: ` + steam4game + "\n" + steam5name + `'s Gamescore: ` + steam5game + "\n" + steam6name + `'s Gamescore: ` + steam6game)
                            msg.channel.send(steam7name + `'s Gamescore: ` + steam7game + "\n" + steam8name + `'s Gamescore: ` + steam8game + "\n" + steam9name + `'s Gamescore: ` + steam9game + "\n" + steam10name + `'s Gamescore: ` + steam10game + "\n" + steam11name + `'s Gamescore: ` + steam11game + "\n" + steam12name + `'s Gamescore: ` + steam12game)
                        }
                        if (steamLength == 13) {
                            msg.channel.send(steam1name + `'s Gamescore: ` + steam1game + "\n" + steam2name + `'s Gamescore: ` + steam2game + "\n" + steam3name + `'s Gamescore: ` + steam3game + "\n" + steam4name + `'s Gamescore: ` + steam4game + "\n" + steam5name + `'s Gamescore: ` + steam5game + "\n" + steam6name + `'s Gamescore: ` + steam6game)
                            msg.channel.send(steam7name + `'s Gamescore: ` + steam7game + "\n" + steam8name + `'s Gamescore: ` + steam8game + "\n" + steam9name + `'s Gamescore: ` + steam9game + "\n" + steam10name + `'s Gamescore: ` + steam10game + "\n" + steam11name + `'s Gamescore: ` + steam11game + "\n" + steam12name + `'s Gamescore: ` + steam12game)
                            msg.channel.send(steam13name + `'s Gamescore: ` + steam13game)
                        }
                        if (steamLength == 14) {
                            msg.channel.send(steam1name + `'s Gamescore: ` + steam1game + "\n" + steam2name + `'s Gamescore: ` + steam2game + "\n" + steam3name + `'s Gamescore: ` + steam3game + "\n" + steam4name + `'s Gamescore: ` + steam4game + "\n" + steam5name + `'s Gamescore: ` + steam5game + "\n" + steam6name + `'s Gamescore: ` + steam6game)
                            msg.channel.send(steam7name + `'s Gamescore: ` + steam7game + "\n" + steam8name + `'s Gamescore: ` + steam8game + "\n" + steam9name + `'s Gamescore: ` + steam9game + "\n" + steam10name + `'s Gamescore: ` + steam10game + "\n" + steam11name + `'s Gamescore: ` + steam11game + "\n" + steam12name + `'s Gamescore: ` + steam12game)
                            msg.channel.send(steam13name + `'s Gamescore: ` + steam13game + "\n" + steam14name + `'s Gamescore: ` + steam14game)
                        }
                        if (steamLength == 15) {
                            msg.channel.send(steam1name + `'s Gamescore: ` + steam1game + "\n" + steam2name + `'s Gamescore: ` + steam2game + "\n" + steam3name + `'s Gamescore: ` + steam3game + "\n" + steam4name + `'s Gamescore: ` + steam4game + "\n" + steam5name + `'s Gamescore: ` + steam5game + "\n" + steam6name + `'s Gamescore: ` + steam6game)
                            msg.channel.send(steam7name + `'s Gamescore: ` + steam7game + "\n" + steam8name + `'s Gamescore: ` + steam8game + "\n" + steam9name + `'s Gamescore: ` + steam9game + "\n" + steam10name + `'s Gamescore: ` + steam10game + "\n" + steam11name + `'s Gamescore: ` + steam11game + "\n" + steam12name + `'s Gamescore: ` + steam12game)
                            msg.channel.send(steam13name + `'s Gamescore: ` + steam13game + "\n" + steam14name + `'s Gamescore: ` + steam14game + "\n" + steam15name + `'s Gamescore: ` + steam15game)
                        }
                        if (steamLength == 16) {
                            msg.channel.send(steam1name + `'s Gamescore: ` + steam1game + "\n" + steam2name + `'s Gamescore: ` + steam2game + "\n" + steam3name + `'s Gamescore: ` + steam3game + "\n" + steam4name + `'s Gamescore: ` + steam4game + "\n" + steam5name + `'s Gamescore: ` + steam5game + "\n" + steam6name + `'s Gamescore: ` + steam6game)
                            msg.channel.send(steam7name + `'s Gamescore: ` + steam7game + "\n" + steam8name + `'s Gamescore: ` + steam8game + "\n" + steam9name + `'s Gamescore: ` + steam9game + "\n" + steam10name + `'s Gamescore: ` + steam10game + "\n" + steam11name + `'s Gamescore: ` + steam11game + "\n" + steam12name + `'s Gamescore: ` + steam12game)
                            msg.channel.send(steam13name + `'s Gamescore: ` + steam13game + "\n" + steam14name + `'s Gamescore: ` + steam14game + "\n" + steam15name + `'s Gamescore: ` + steam15game + "\n" + steam16name + `'s Gamescore: ` + steam16game)
                        }
                        if (steamLength == 17) {
                            msg.channel.send(steam1name + `'s Gamescore: ` + steam1game + "\n" + steam2name + `'s Gamescore: ` + steam2game + "\n" + steam3name + `'s Gamescore: ` + steam3game + "\n" + steam4name + `'s Gamescore: ` + steam4game + "\n" + steam5name + `'s Gamescore: ` + steam5game + "\n" + steam6name + `'s Gamescore: ` + steam6game)
                            msg.channel.send(steam7name + `'s Gamescore: ` + steam7game + "\n" + steam8name + `'s Gamescore: ` + steam8game + "\n" + steam9name + `'s Gamescore: ` + steam9game + "\n" + steam10name + `'s Gamescore: ` + steam10game + "\n" + steam11name + `'s Gamescore: ` + steam11game + "\n" + steam12name + `'s Gamescore: ` + steam12game)
                            msg.channel.send(steam13name + `'s Gamescore: ` + steam13game + "\n" + steam14name + `'s Gamescore: ` + steam14game + "\n" + steam15name + `'s Gamescore: ` + steam15game + "\n" + steam16name + `'s Gamescore: ` + steam16game + "\n" + steam17name + `'s Gamescore: ` + steam17game)
                        }
                        if (steamLength == 18) {
                            msg.channel.send(steam1name + `'s Gamescore: ` + steam1game + "\n" + steam2name + `'s Gamescore: ` + steam2game + "\n" + steam3name + `'s Gamescore: ` + steam3game + "\n" + steam4name + `'s Gamescore: ` + steam4game + "\n" + steam5name + `'s Gamescore: ` + steam5game + "\n" + steam6name + `'s Gamescore: ` + steam6game)
                            msg.channel.send(steam7name + `'s Gamescore: ` + steam7game + "\n" + steam8name + `'s Gamescore: ` + steam8game + "\n" + steam9name + `'s Gamescore: ` + steam9game + "\n" + steam10name + `'s Gamescore: ` + steam10game + "\n" + steam11name + `'s Gamescore: ` + steam11game + "\n" + steam12name + `'s Gamescore: ` + steam12game)
                            msg.channel.send(steam13name + `'s Gamescore: ` + steam13game + "\n" + steam14name + `'s Gamescore: ` + steam14game + "\n" + steam15name + `'s Gamescore: ` + steam15game + "\n" + steam16name + `'s Gamescore: ` + steam16game + "\n" + steam17name + `'s Gamescore: ` + steam17game + "\n" + steam18name + `'s Gamescore: ` + steam18game)
                        }
                        if (steamLength == 19) {
                            msg.channel.send(steam1name + `'s Gamescore: ` + steam1game + "\n" + steam2name + `'s Gamescore: ` + steam2game + "\n" + steam3name + `'s Gamescore: ` + steam3game + "\n" + steam4name + `'s Gamescore: ` + steam4game + "\n" + steam5name + `'s Gamescore: ` + steam5game + "\n" + steam6name + `'s Gamescore: ` + steam6game)
                            msg.channel.send(steam7name + `'s Gamescore: ` + steam7game + "\n" + steam8name + `'s Gamescore: ` + steam8game + "\n" + steam9name + `'s Gamescore: ` + steam9game + "\n" + steam10name + `'s Gamescore: ` + steam10game + "\n" + steam11name + `'s Gamescore: ` + steam11game + "\n" + steam12name + `'s Gamescore: ` + steam12game)
                            msg.channel.send(steam13name + `'s Gamescore: ` + steam13game + "\n" + steam14name + `'s Gamescore: ` + steam14game + "\n" + steam15name + `'s Gamescore: ` + steam15game + "\n" + steam16name + `'s Gamescore: ` + steam16game + "\n" + steam17name + `'s Gamescore: ` + steam17game + "\n" + steam18name + `'s Gamescore: ` + steam18game)
                            msg.channel.send(steam19name + `'s Gamescore: ` + steam19game)
                        }
                        if (steamLength == 20) {
                            msg.channel.send(steam1name + `'s Gamescore: ` + steam1game + "\n" + steam14name + `'s Gamescore: ` + steam14game + "\n" + steam3name + `'s Gamescore: ` + steam3game + "\n" + steam4name + `'s Gamescore: ` + steam4game + "\n" + steam5name + `'s Gamescore: ` + steam5game + "\n" + steam6name + `'s Gamescore: ` + steam6game)
                            msg.channel.send(steam7name + `'s Gamescore: ` + steam7game + "\n" + steam8name + `'s Gamescore: ` + steam8game + "\n" + steam9name + `'s Gamescore: ` + steam9game + "\n" + steam10name + `'s Gamescore: ` + steam10game + "\n" + steam11name + `'s Gamescore: ` + steam11game + "\n" + steam12name + `'s Gamescore: ` + steam12game)
                            msg.channel.send(steam13name + `'s Gamescore: ` + steam13game + "\n" + steam14name + `'s Gamescore: ` + steam14game + "\n" + steam15name + `'s Gamescore: ` + steam15game + "\n" + steam16name + `'s Gamescore: ` + steam16game + "\n" + steam17name + `'s Gamescore: ` + steam17game + "\n" + steam18name + `'s Gamescore: ` + steam18game)
                            msg.channel.send(steam19name + `'s Gamescore: ` + steam19game + "\n" + steam20name + `'s Gamescore: ` + steam20game)
                        }
                        if (steamLength == 21) {
                            msg.channel.send(steam1name + `'s Gamescore: ` + steam1game + "\n" + steam2name + `'s Gamescore: ` + steam2game + "\n" + steam3name + `'s Gamescore: ` + steam3game + "\n" + steam4name + `'s Gamescore: ` + steam4game + "\n" + steam5name + `'s Gamescore: ` + steam5game + "\n" + steam6name + `'s Gamescore: ` + steam6game)
                            msg.channel.send(steam7name + `'s Gamescore: ` + steam7game + "\n" + steam8name + `'s Gamescore: ` + steam8game + "\n" + steam9name + `'s Gamescore: ` + steam9game + "\n" + steam10name + `'s Gamescore: ` + steam10game + "\n" + steam11name + `'s Gamescore: ` + steam11game + "\n" + steam12name + `'s Gamescore: ` + steam12game)
                            msg.channel.send(steam13name + `'s Gamescore: ` + steam13game + "\n" + steam14name + `'s Gamescore: ` + steam14game + "\n" + steam15name + `'s Gamescore: ` + steam15game + "\n" + steam16name + `'s Gamescore: ` + steam16game + "\n" + steam17name + `'s Gamescore: ` + steam17game + "\n" + steam18name + `'s Gamescore: ` + steam18game)
                            msg.channel.send(steam19name + `'s Gamescore: ` + steam19game + "\n" + steam20name + `'s Gamescore: ` + steam20game + "\n" + steam21name + `'s Gamescore: ` + steam21game)
                        }
                        if (steamLength == 22) {
                            msg.channel.send(steam1name + `'s Gamescore: ` + steam1game + "\n" + steam2name + `'s Gamescore: ` + steam2game + "\n" + steam3name + `'s Gamescore: ` + steam3game + "\n" + steam4name + `'s Gamescore: ` + steam4game + "\n" + steam5name + `'s Gamescore: ` + steam5game + "\n" + steam6name + `'s Gamescore: ` + steam6game)
                            msg.channel.send(steam7name + `'s Gamescore: ` + steam7game + "\n" + steam8name + `'s Gamescore: ` + steam8game + "\n" + steam9name + `'s Gamescore: ` + steam9game + "\n" + steam10name + `'s Gamescore: ` + steam10game + "\n" + steam11name + `'s Gamescore: ` + steam11game + "\n" + steam12name + `'s Gamescore: ` + steam12game)
                            msg.channel.send(steam13name + `'s Gamescore: ` + steam13game + "\n" + steam14name + `'s Gamescore: ` + steam14game + "\n" + steam15name + `'s Gamescore: ` + steam15game + "\n" + steam16name + `'s Gamescore: ` + steam16game + "\n" + steam17name + `'s Gamescore: ` + steam17game + "\n" + steam18name + `'s Gamescore: ` + steam18game)
                            msg.channel.send(steam19name + `'s Gamescore: ` + steam19game + "\n" + steam20name + `'s Gamescore: ` + steam20game + "\n" + steam21name + `'s Gamescore: ` + steam21game + "\n" + steam22name + `'s Gamescore: ` + steam22game)
                        }
                        if (steamLength == 23) {
                            msg.channel.send(steam1name + `'s Gamescore: ` + steam1game + "\n" + steam2name + `'s Gamescore: ` + steam2game + "\n" + steam3name + `'s Gamescore: ` + steam3game + "\n" + steam4name + `'s Gamescore: ` + steam4game + "\n" + steam5name + `'s Gamescore: ` + steam5game + "\n" + steam6name + `'s Gamescore: ` + steam6game)
                            msg.channel.send(steam7name + `'s Gamescore: ` + steam7game + "\n" + steam8name + `'s Gamescore: ` + steam8game + "\n" + steam9name + `'s Gamescore: ` + steam9game + "\n" + steam10name + `'s Gamescore: ` + steam10game + "\n" + steam11name + `'s Gamescore: ` + steam11game + "\n" + steam12name + `'s Gamescore: ` + steam12game)
                            msg.channel.send(steam13name + `'s Gamescore: ` + steam13game + "\n" + steam14name + `'s Gamescore: ` + steam14game + "\n" + steam15name + `'s Gamescore: ` + steam15game + "\n" + steam16name + `'s Gamescore: ` + steam16game + "\n" + steam17name + `'s Gamescore: ` + steam17game + "\n" + steam18name + `'s Gamescore: ` + steam18game)
                            msg.channel.send(steam19name + `'s Gamescore: ` + steam19game + "\n" + steam20name + `'s Gamescore: ` + steam20game + "\n" + steam21name + `'s Gamescore: ` + steam21game + "\n" + steam22name + `'s Gamescore: ` + steam22game + "\n" + steam23name + `'s Gamescore: ` + steam23game)
                        }
                        if (steamLength == 24) {
                            msg.channel.send(steam1name + `'s Gamescore: ` + steam1game + "\n" + steam2name + `'s Gamescore: ` + steam2game + "\n" + steam3name + `'s Gamescore: ` + steam3game + "\n" + steam4name + `'s Gamescore: ` + steam4game + "\n" + steam5name + `'s Gamescore: ` + steam5game + "\n" + steam6name + `'s Gamescore: ` + steam6game)
                            msg.channel.send(steam7name + `'s Gamescore: ` + steam7game + "\n" + steam8name + `'s Gamescore: ` + steam8game + "\n" + steam9name + `'s Gamescore: ` + steam9game + "\n" + steam10name + `'s Gamescore: ` + steam10game + "\n" + steam11name + `'s Gamescore: ` + steam11game + "\n" + steam12name + `'s Gamescore: ` + steam12game)
                            msg.channel.send(steam13name + `'s Gamescore: ` + steam121game + "\n" + steam14name + `'s Gamescore: ` + steam14game + "\n" + steam15name + `'s Gamescore: ` + steam15game + "\n" + steam16name + `'s Gamescore: ` + steam16game + "\n" + steam17name + `'s Gamescore: ` + steam17game + "\n" + steam18name + `'s Gamescore: ` + steam18game)
                            msg.channel.send(steam19name + `'s Gamescore: ` + steam19game + "\n" + steam20name + `'s Gamescore: ` + steam20game + "\n" + steam21name + `'s Gamescore: ` + steam3game + "\n" + steam22name + `'s Gamescore: ` + steam22game + "\n" + steam23name + `'s Gamescore: ` + steam23game + "\n" + steam24name + `'s Gamescore: ` + steam24game)
                        }

                    })

            }
        }
        //future command
        if (command === "gamescorelog") {

        }
    }
})

client.login("secret");