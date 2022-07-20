"use strict";
exports.__esModule = true;
exports.Team = void 0;
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
exports.Team = Team;
var astros = new Team(["Jacob", "Peter"]);
console.log(astros.generateLineup());
