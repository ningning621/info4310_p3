// used to pre-process yelp_pittsburgh.csv
// sorting criteria: getFrequencyByTwoKeys(yelpData, "type", "review count")
function getFrequencyByTwoKeys(data, str1, str2) {
    let map = {};
    for (var i = 0; i < data.length; i++) {
        let key = data[i][str1].split(":")[0];
        let key2 = data[i][str2];
        if (!(key in map)) {
            map[key] = {};
            map[key][key2] = [data[i]]
        } else {

          if (!(key2 in map[key])) {
            map[key][key2] = [data[i]]
          } else {
            map[key][key2].push(data[i])
          }
        }
    }

    return map;
}

// sort original filtered list by type
function sortDataByType(data) {
  let map = {};
  for (item of data) {
    let key = item["type"];
    if (!(key in map)) {
        map[key] = [item];
    } else {
        map[key].push(item);
    }
  }
  return map;
}

// given number of locations needed, randomly select [num] amts
function getListByTypeAndAmt(originalList, num) {
  let copyList = [...originalList];
  let finalList = [];
  if (num > 0) {
    for (var i = 0; i < num; i++) {
      let randomNum = Math.floor(Math.random() * Math.floor(copyList.length-1));
      finalList.push(copyList[randomNum]);
      copyList.splice(randomNum, 1);
    }
  }

  return finalList;
}
