import { Team } from "./Team";

class User {
  public id: number;
  public name: string;
  public email: string;
  public teams: Array<Team>; 
  
  // public constructor(message: string) {
  //   this.greeting = message;
  // }

  joinLeague() {
    return "Hello";
  }

  leaveLeague() {
    return "Hello";
  }

  createTeam() {
    return "Hello";
  }
}

// let kamari = new User("hi");

export {User}