const yargs = require('yargs');
const character = require('./asoiaf/fetchCharacterData');
const dataUtil = require('./util/parseCharacterData');

const argv = yargs
	.options({
		nm: {
			demand: true,
			alias: 'name',
			describe: 'Name of character',
			string: true
		}
	})
	.help()
	.alias('help', 'h')
	.argv;

var name = argv.name;

character.fetchCharacterData(name, (error, charData) => {
  if(error) {
    console.log('Error: ' + error);
  }

  let data = charData.data;
  dataUtil.parseCharData(data);

})
