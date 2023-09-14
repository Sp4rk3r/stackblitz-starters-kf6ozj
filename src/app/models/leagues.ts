import { Country } from "./country";

export interface Leagues {
  league: League;
  country: Country;
}

export interface League {
  id: number;
  name: string;
  type: string;
  logo: string;

}