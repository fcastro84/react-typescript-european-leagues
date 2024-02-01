import { Teams } from "../types.teams.d";


const API_URL = 'https://v3.football.api-sports.io/standings?'

const fetchTeamsByCountry = async( codeCountry: number ) => {
    const year = new Date().getFullYear()

    const response = await fetch(`${API_URL}league=${codeCountry}&season=${ year -1 }`, {
        method: 'GET',
        headers: {
            "x-rapidapi-host": "v3.football.api-sports.io",
            "x-rapidapi-key": import.meta.env.VITE_API_KEY
        }
    })
    if( !response.ok ) {
        throw new Error("Not connect with API");
        
    }

    const result = await response.json() as Teams
    
    return result
}

export default fetchTeamsByCountry
