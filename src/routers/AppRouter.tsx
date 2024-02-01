import { BrowserRouter, Route, Routes } from "react-router-dom"

import { TeamDetails } from "../components/teams/TeamDetails"
import CountriesLeagues from "../components/CountriesLeagues"


const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<CountriesLeagues />}></Route>
            <Route path="/team/:idLeague/:idTeam" element={<TeamDetails />}></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
