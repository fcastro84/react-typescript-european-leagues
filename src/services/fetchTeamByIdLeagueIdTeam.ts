import { TeamResult } from "../types.d";

const API_URL = 'https://v3.football.api-sports.io/fixtures?'
const LAST_PLAYED = 10

const fetchTeamByIdLeagueIdTeam= async( idTeam: number ) => {
    const year = new Date().getFullYear()


    const response = await fetch(`${API_URL}season=${ year - 1}&team=${idTeam}&last=${LAST_PLAYED}`, {
        method: 'GET',
        headers: {
            "x-rapidapi-host": "v3.football.api-sports.io",
            "x-rapidapi-key": import.meta.env.VITE_API_KEY
        }
    })
    if( !response.ok ) {
        throw new Error("Not connect with API");
        
    }

    const result = await response.json() as TeamResult
    
    return result
}

export default fetchTeamByIdLeagueIdTeam