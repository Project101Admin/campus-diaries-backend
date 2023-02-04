function csvArrayToJSON(csvArray) {
  const headers = csvArray[0];

  const jsonArray = [];

  for (let i = 1; i < csvArray.length; i++) {
    const values = csvArray[i];
    const obj = {};

    for (let j = 0; j < headers.length; j++) {
      obj[headers[j]] = values[j];
    }

    jsonArray.push(obj);
  }

  return jsonArray;
}

module.exports = { csvArrayToJSON };
