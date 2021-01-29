import {Player} from "./models/Player";
import {User} from "./models/User";
import {Team} from "./models/Team";


  // generate a player Bom, Trady
  let player1 = new Player();
  player1.id = 1;
  player1.firstName = "Bom";
  player1.lastName = "Trady";
  player1.fantasyTeam = undefined;
  player1.hasTeam = false;

    // generate a player
    let player2 = new Player();
    player2.id = 2;
    player2.firstName = "Stat";
    player2.lastName = "Mafford";
    player2.fantasyTeam = undefined;
    player2.hasTeam = false;

    // generate a player
    let player3 = new Player();
    player3.id = 3;
    player3.firstName = "Famous";
    player3.lastName = "Winston";
    player3.fantasyTeam = undefined;
    player3.hasTeam = false;

console.log(player1);
console.log(player2);
console.log(player3);


let user1 = new User();
user1.id = 1;
user1.name = "joe blow";
user1.email = "fake@fake.fake"

let user2 = new User();
user2.id = 2;
user2.name = "blow joe";
user2.email = "faker@fake.fake"

console.log(user1);
console.log(user2);

// user1 creates a team
let fantasyTeam1 = new Team();
fantasyTeam1.id = 1;
fantasyTeam1.name = "dragons";
fantasyTeam1.logo = "photo.png";
fantasyTeam1.colorScheme = ["FFFFFF, 000000"]
fantasyTeam1.roster = [player1,player2];

console.log(fantasyTeam1);
console.log(fantasyTeam1.roster);
