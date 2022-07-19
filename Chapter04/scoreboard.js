"use strict";
exports.__esModule = true;
exports.Team = void 0;
var Team = /** @class */ (function () {
    function Team() {
    }
    Team.prototype.generateLineup = function () {
        return "Lineup will go here.";
    };
    return Team;
}());
exports.Team = Team;
var astros = new Team();
console.log(astros.generateLineup());
