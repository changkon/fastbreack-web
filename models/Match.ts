export default interface Match {
  matchId: string;
  datetime: Date;
  venue: string;
  isFinished: boolean;
  timeElapsedInMs: number;
  home: {
    city: string;
    name: string;
    score: number;
    wins: number;
    loss: number;
    seeding: number;
    conference: "east" | "west";
    division: string;
  };
  away: {
    city: string;
    name: string;
    score: number;
    wins: number;
    loss: number;
    seeding: number;
    conference: "east" | "west";
    division: string;
  };
}
