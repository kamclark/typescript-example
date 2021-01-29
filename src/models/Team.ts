import {Player} from "./Player";

class Team {
  public id: number;
  public name: string;
  public logo: string;
  public colorScheme: Array<string>; 
  public roster: Array<Player>; 
  
  // public constructor(message: string) {
  //   this.greeting = message;
  // }

  addPlayer() {
    return "Hello";
  }

  dropPlayer() {
    return "Hello";
  }
}

// let kamari = new User("hi");

export { Team };