import { HashRouter, Route, Routes } from "react-router-dom"

import { TeamDetails } from "../components/teams/TeamDetails"
import CountriesLeagues from "../components/CountriesLeagues"


const AppRouter = () => {
  return (
    <HashRouter>
        <Routes>
            <Route path="/" element={<CountriesLeagues />}></Route>
            <Route path="/countries-league" element={<CountriesLeagues />}></Route>
            <Route path="/team/:idLeague/:idTeam" element={<TeamDetails />}></Route>
        </Routes>
    </HashRouter>
  )
}

export default AppRouter
