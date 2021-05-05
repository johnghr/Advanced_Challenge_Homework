const IsogramFinder = function (word) {
    this.word = word.toLowerCase().split('');
}

IsogramFinder.prototype.isIsogram = function () {
    
    return this.word.every((letter) => this.word.filter((letterTwo) => letter == letterTwo ).length <= 1)
}

module.exports = IsogramFinder;
