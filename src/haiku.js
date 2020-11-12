var cmu = require('cmu-pronouncing-dictionary');
const extractwords = require('extractwords');
const syllables = require('syllables');

export default class Haiku {
  constructor(line1, line2, line3) {
    this.line1 = line1;
    this.line2 = line2;
    this.line3 = line3;
  }
  vowelCount() {
    return this.line1.match(/[aeiou]/gi).length;
  }
  findSyllable() {
    let syllableCount = syllables(this.line1);
    return syllableCount;
  }
};