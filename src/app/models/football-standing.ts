export interface TeamDetails {
  id: number;
  name: string;
  logo: string;
}

export interface GameStats {
  played: number;
  win: number;
  draw: number;
  lose: number;
  goals: {
    for: number;
    against: number;
  };
}

export interface FootballStanding {
  rank: number;
  team: TeamDetails;
  points: number;
  goalsDiff: number;
  group: string;
  form: string;
  status: string;
  description: string;
  win: number;
  lose: number;
  draw: number;
}

export interface LeagueData {
  id: number;
  name: string;
  country: string;
  logo: string;
  flag: string;
  season: number;
  standings: FootballStanding[][];
}
