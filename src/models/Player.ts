import { Team } from "./Team";

class Player {
  public id: number;
  public firstName: string;
  public lastName: string;
  public fantasyTeam?: Team; 
  public hasTeam: boolean; 
  
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

export { Player };