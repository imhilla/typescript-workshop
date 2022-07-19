export class Team {
  name: string;
  players: string[];
  constructor(name: string, players: string[]) {
    this.name = name;
    this.players = players;
  }
  generateLineup() {
    return "Lineup will go here.";
  }
}

const astros = new Team("hillary", [""]);
console.log(astros.generateLineup());
