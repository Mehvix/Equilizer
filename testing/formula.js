let medicKey;
  medicKey = Object.keys(logData['players'][steam6]['class_stats']);
  for (i = 0; i < medicKey.length; i++) {
      if (medicKey[i]['type'] == "medic") {
          t = logData['length'];
          heal = logData['players'][steam6]['heal'];
          cpm = logData['players'][steam6]['cpc'] / t;
          uph = logData['players'][steam6]['ubers'] / heal;
          dtm = logData['players'][steam6]['dt'] / t;
          dropspm = logData['players'][steam6]['drops'] / t;
          dropspu = logData['players'][steam6]['drops'] / logData['players'][steam6]['ubers'];
          dropspdt = logData['players'][steam6]['drops'] / logData['players'][steam6]['dt'];
          scoreKey = Object.keys(logData['teams']);
          if (scoreKey[0] = logData['players'][steam6]['team']) {
              rdiff = (logData['teams']['Red']['score'] - logData['teams']['Blue']['score']) / t;
          }
          else if (scoreKey[1] = logData['players'][steam6]['team']) {
              rdiff = (logData['teams']['Blue']['score'] - logData['teams']['Red']['score']) / t;
          }
          kad = logData['players'][steam6]['kapd'];
          deathpm = logData['players'][steam6]['deaths'] / t;
          upm = (logData['players'][steam6]['ubers'] + logData['players'][steam6]['drops']) / t;
          team = logData['players'][steam6]['team'];
          team6 = team;
          steam6game = Math.round(10 * ((0.7 * ((heal / 1800) + (cpm / 5) + (uph / 0.00025) + (dtm / 75) - (dropspm / 0.6) - (dropspu / 0.025) - (deathspdt / 0.00075) + (rdiff / 0.08) + (kad / 0.03) - (deathspm / 0.08) + (upm / 0.05))) + 15)) / 10;
      }
      else {
          t = logData['length'];
          dpm = logData['players'][steam6]['dapm'];
          cpm = (logData['players'][steam6]['cpc']) / t;
          kad = logData['players'][steam6]['kapd'];
          scoreKey = Object.keys(logData['teams']);
          if (scoreKey[0] = logData['players'][steam6]['team']) {
              rdiff = (logData['teams']['Red']['score'] - logData['teams']['Blue']['score']) / t;
          }
          else if (scoreKey[1] = logData['players'][steam6]['team']) {
              rdiff = (logData['teams']['Blue']['score'] - logData['teams']['Red']['score']) / t;
          }
          dahr = logData['players'][steam6]['dmg'] / logData['players'][steam6]['hr'];
          dadt = logData['players'][steam6]['dmg'] / logData['players'][steam6]['dt'];
          deathpm = logData['players'][steam6]['deaths'] / t;
          dtm = logData['players'][steam6]['dt'] / t;
          kpm = logData['players'][steam6]['kills'] / t;
          kd = logData['players'][steam6]['kpd'];
          team = logData['players'][steam6]['team'];
          team6 = team;
          steam6game = Math.round(10 * ((1.3 * ((dpm / 16) + (cpm / 3) + (kad / 0.6) + (rdiff / 0.075) + (dahr / 0.25) + (dadt / 0.2) - (deathpm / 0.1) - (dtm / 40) + (kpm / 0.1) + (kd / 0.2))) + 10)) / 10;
      }
  }