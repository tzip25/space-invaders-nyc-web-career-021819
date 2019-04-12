class Spaceship {

  constructor(name, crew, phasers, shields){
    this.name = name;

    this.crew = crew;
    this.crew.forEach(crewMember => crewMember.currentShip = this)

    this.phasers = phasers;
    this.shields = shields;
    this.cloaked = false;
    this.warpDrive = "disengaged";
    this.phasersCharge = "uncharged";
  }

  get docked(){
    if(this.crew.length){
      return false
    } else {
      return true
    }
  }

}
