import { useQuery } from "@tanstack/react-query"
import fetchTeamByIdLeagueIdTeam from "../services/fetchTeamByIdLeagueIdTeam"


export const useTeamResult = (idLeague: string | undefined, idTeam: string | undefined) => {

    const {data, isLoading} = useQuery({
        queryKey: ['team', {idLeague, idTeam}],
        queryFn: () => fetchTeamByIdLeagueIdTeam(Number(idTeam)),
        refetchOnWindowFocus: false,
        gcTime: 60 * 60 * 1000,
        staleTime: 60 * 60 * 1000
    })
  return {data, isLoading}
}
