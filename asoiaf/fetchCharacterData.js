const fetch = require('node-fetch');

const fetchCharacterData = (name,callback) => {
  var encodedName = encodeURIComponent(name);
  console.log('Getting character information for: ' + name);
  fetch('https://www.anapioficeandfire.com/api/characters/?name=' + encodedName)
    .then(res => res.json())
    .then(json => callback(undefined, {
      data: json[0]
    }))
    .catch(reason => callback(reason.message, undefined));
}

module.exports.fetchCharacterData = fetchCharacterData;
