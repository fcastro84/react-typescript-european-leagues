import { Link } from "react-router-dom"
import { Standing, Teams } from "../../types.teams.d"




function TeamList({data}: {data: Teams}) {
    
  return (
    <div className="overflow-x-auto mb-4">
        <table className="table table-md table-pin-rows table-pin-cols">
            <thead>
            <tr>
                <th className="font-extrabold">Rank</th> 
                <th></th> 
                <th className="text-center">Name</th> 
                <th className="font-extrabold">Games</th> 
                <th className="font-extrabold">W</th> 
                <th className="font-extrabold">L</th> 
                <th className="font-extrabold">D</th>
                <th className="font-extrabold">Goal Difference</th>
                <th className="font-extrabold">Points</th>
            </tr>
            </thead> 
            <tbody>
                {
                    data.response[0].league.standings[0].map( (team: Standing) => (
                        <tr key={team.team.id}>
                            <td>{team.rank}</td> 
                            <td>
                                <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={team.team.logo} alt={team.team.name}/>
                                            </div>
                                        </div>
                                </div>
                            </td> 
                            <td className="text-center"> <Link to={`/team/${data.response[0].league.id}/${team.team.id}`}>{team.team.name}</Link></td> 
                            <td className="text-center">{team.all.played}</td> 
                            <td className="text-center">{team.all.win}</td> 
                            <td className="text-center">{team.all.lose}</td> 
                            <td className="text-center">{team.all.draw}</td> 
                            <td className="text-center">{team.goalsDiff}</td>
                            <td className="text-center">{team.points}</td>
                        </tr>
                    ))
                } 
            </tbody> 
        </table>
    </div>
  )
}

export default TeamList
