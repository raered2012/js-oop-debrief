class Elephants {
  constructor (name, age, species) {
    this._name = name;
    this._age = age;
    this._species = species;
  } 
  greet() {
    console.log('Hello! I am an elephant called' + this.name '.')
  }
  };


  //tusk ability = the ability to grow tusks
  //One question I have would be, for tuskbAlity, since I want it to be boolean, do I set it equal to tuskAbility or a boolean?
  class loxoontaAfricana extends Elephant {
    constructor(name, age, _tuskAbility) {
      super(name, age, 'African');
      this._tuskAbility = 'false';
    }


  };

  class elephasMaximus extends Elephant {
    constructor(name, age, capeColor) {
      super(name, age, 'Asian');
      this._capeColor = capeColor;
    }
    get CapeColor() {
      return this._capeColor;
    }
  };