"use strict";
exports.__esModule = true;
var Player_1 = require("./models/Player");
var generatePlayers = function () {
    // generate a player Bom, Trady
    var player1 = new Player_1.Player();
    player1.id = 1;
    player1.firstName = "Bom";
    player1.lastName = "Trady";
    player1.fantasyTeam = undefined;
    player1.hasTeam = false;
    // generate a player
    var player2 = new Player_1.Player();
    player1.id = 2;
    player1.firstName = "Stat";
    player1.lastName = "Mafford";
    player1.fantasyTeam = undefined;
    player1.hasTeam = false;
    // generate a player
    var player3 = new Player_1.Player();
    player1.id = 3;
    player1.firstName = "Famous";
    player1.lastName = "Winston";
    player1.fantasyTeam = undefined;
    player1.hasTeam = false;
};
