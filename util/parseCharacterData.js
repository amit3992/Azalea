const parseCharData = (data) => {
  if(data) {
    let name = data.name;
    let culture = data.culture;
    let dob = data.born;
    let alias = data.aliases;
    let playedBy = data.playedBy;

    if(name) {
      console.log(name);
    }

    if(culture) {
      console.log("is a " + culture);
    }

    if(dob) {
      console.log("who was born in " + dob);
    }
    if(alias) {
      console.log("They are also called " + alias[0]);
    }
    if(playedBy) {
      console.log("played by actor " + playedBy[0]);
    }
  }
}

module.exports.parseCharData = parseCharData;
