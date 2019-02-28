"use strict"; 

class Stitcher {

   constructor(templateString, config) {
    this.templateString = templateString;
    this.config = config; 
   }

   embed() {
    var keys = Object.keys(this.config);
    var func = Function(...keys, "return `" + this.templateString + "`;");
    return func(...keys.map(k => this.config[k]));
   }

}

module.exports = Stitcher;