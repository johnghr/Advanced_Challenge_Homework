const PangramFinder = function (phrase) {
  this.phrase = phrase.toLowerCase().split('')
  this.alphabet = 'qwertyuiopasdfghjklzxcvbnm'.split('');
}



PangramFinder.prototype.isPangram = function () {
  let filteredPhrase = this.phrase.filter(character => character != ' ' && '_' && '!');
  console.log("filtered phrase:",filteredPhrase);

  return this.alphabet.every((letter) => filteredPhrase.includes(letter));
}

module.exports = PangramFinder;

// PangramFinder.prototype.isPangram = function () {
//   let filteredPhrase = this.phrase.filter(character => character != ' ' && '_')

//   //go through each letter in the alphabet
//   for(letter of alphabet) {
//       if(filteredPhrase.includes(letter) === false) {
//           //if one of the letters is missing from our phrase return false
//           return false;
//       }
//   }
//   //otherwise return true
//   return true
// }

// PangramFinder.prototype.isPangram = function () {
//   let filteredPhrase = this.phrase.filter(character => character != ' ' && '_')

//   //go through each letter in the alphabet
//   for(letter of alphabet) {
//       //e.g is a missing from the 'the quick brown fox'
//       //is b missing from the 'the quick brown fox'
//       //is c missing from the 'the quick brown fox' etc  
//       if(filteredPhrase.includes(letter) ==false) {
//           //if one of the letters is missing from our phrase return false
//           return false;
//       }
//   }
//   //otherwise return true
//   return true
// }