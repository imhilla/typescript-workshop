interface Team {
  score: number;
  name: string;
}

class BasketBallGame {
  private team1: Team;
  private team2: Team;

  constructor(teamName1: string, teamName2: string) {
    this.team1 = {
      score: 0,
      name: teamName1,
    };
    this.team2 = {
      score: 0,
      name: teamName2,
    };
  }
  getScore() {
    return `${this.team1.score}: ${this.team2.score}`;
  }
  updateScore(byPoints: number, updateTeam1: boolean) {
    audit("updateScore", byPoints, updateTeam1);
    const start = Date.now();
    if (isAuthorized()) {
      if (validatePoints(byPoints)) {
        if (updateTeam1) {
          this.team1.score += byPoints;
        } else {
          this.team2.score += byPoints;
        }
      } else {
        console.log(`Invalid point value ${byPoints}`);
      }
    } else {
      console.log("You're not authorized to change the score");
    }
    const end = Date.now();
    wrapWithDuration("updateScore", start, end);
  }
}

function wrapWithDuration(method: Function) {
  const result = {
    [method.name]: function (this: any, ...args: any[]) {
      const start = Date.now();
      const result = method.apply(this, args);
      const end = Date.now();
      logDuration(method.name, start, end);
      return result;
    },
  };
  return result[method.name];
}

const game = new BasketBallGame("LA Lakers", "Boston Celtics");
game.updateScore(3, true);
game.updateScore(2, false);
game.updateScore(2, true);
game.updateScore(2, false);
game.updateScore(2, false);
game.updateScore(2, true);
game.updateScore(2, false);
console.log(game.getScore());
