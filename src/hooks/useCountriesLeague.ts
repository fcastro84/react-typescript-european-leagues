import { useQuery } from "@tanstack/react-query"
import fetchTeamsByCountry from "../services/fetchTeamsByCountry"


export const useCountriesLeague = (idSelected: number) => {
    const {data, isLoading} = useQuery({
        queryKey: ['league', idSelected],
        queryFn: () => fetchTeamsByCountry(idSelected),
        refetchOnWindowFocus: false,
        gcTime: 60 * 60 * 1000,
        staleTime: 60 * 60 * 1000
    })
  return {data, isLoading}
}


