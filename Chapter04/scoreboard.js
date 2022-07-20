"use strict";
exports.__esModule = true;
var Scoreboard = /** @class */ (function () {
    function Scoreboard(args) {
        this.homeTean = args.homeTean;
        this.awayTeam = args.awayTeam;
        this.date = args.date;
    }
    return Scoreboard;
}());
var Team = /** @class */ (function () {
    function Team(players) {
        this.players = players;
    }
    Team.prototype.generateLineup = function () {
        var playersWithOrderNumber = this.players.map(function (player, idx) {
            return "<div>" + (idx + 1) + " - " + player + "</div>";
        });
        return playersWithOrderNumber.join(" ");
    };
    return Team;
}());
var astros = new Team(["Jacob", "Peter"]);
console.log(astros.generateLineup());
