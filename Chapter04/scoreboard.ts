export class Team {
  players: string[];
  constructor(players) {
    this.players = players;
  }
  generateLineup(): string {
    const playersWithOrderNumber = this.players.map((player, idx) => {
      return `<div>${idx + 1} - ${player}</div>`;
    });
    return playersWithOrderNumber.join(" ");
  }
}

const astros = new Team(["Jacob", "Peter"]);
console.log(astros.generateLineup());
