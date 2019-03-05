"use strict"; 

class Stitcher {

   // consumes a config object (of KVP's to embed)
   constructor(config) {
    this.config = config; 
   }
   
   // consumes a templateString to inject config KVP's into 
   embed(templateString) {
    var keys = Object.keys(this.config);
    var func = Function(...keys, "return `" + templateString + "`;");
    return func(...keys.map(k => this.config[k]));
   }   

}

module.exports = Stitcher;