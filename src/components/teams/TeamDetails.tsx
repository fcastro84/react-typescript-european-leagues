import { useNavigate, useParams } from "react-router-dom"
import { useTeamResult } from "../../hooks/useTeamResult";


export const TeamDetails = () => {
    const { idLeague, idTeam} = useParams()
    const navigate = useNavigate();
    const { data, isLoading} = useTeamResult(idLeague, idTeam)
    

    const handleBack = () => {
        navigate('/countries-league', { state: { id: Number(idLeague) }} )
    }
  return (
    <>
    {
        isLoading && (
            <div className="mt-60 flex items-center content-center">
                <span className="loading loading-spinner text-primary w-20 h-20"></span>
                <span className="loading loading-spinner  text-secondary w-20 h-20"></span>
                <span className="loading loading-spinner text-accent w-20 h-20"></span>
                <span className="loading loading-spinner text-neutral w-20 h-20"></span>
            </div>
        )
    }
    {
        (!isLoading && data) && (
            <div className="flex flex-col w-full justify-center mt-1">
                    <div className="card w-4/5 shadow-xl mx-auto bg-slate-200">
                        <div className="card-body w-full">
                            <h2 className="card-title justify-center uppercase">The last 10 game results:</h2>
                            {
                                data.response.map( (item, index) => (
                                    <div className="flex flex-row justify-between items-center mt-2 w-full" key={index}>
                                        <div className="avatar">
                                            <div className="w-12 rounded-full">
                                                <img src={item.teams.home.logo}  alt="logo" />
                                            </div>
                                        </div>
                                        <span className="text-start text-wrap" style={{width: '9rem'}}>{ item.teams.home.name }</span>
                                        <span className="text-end">{ item.goals.home}</span>
                                        <span className="text-end">-</span>
                                        <span className="text-end">{ item.goals.away}</span>
                                        <span className="text-end text-wrap" style={{width: '9rem'}}>{ item.teams.away.name }</span>
                                        <div className="avatar">
                                            <div className="w-12 rounded-full">
                                            <img src={ item.teams.away.logo } alt="logo" width="4%" height="4%"></img>
                                            </div>
                                        </div>
                                        
                                    </div>
                                ))
                            }
                            
                            
                        
                            
                        </div>
                    </div>
                    <div className="mx-auto mt-2 w-4/5">
                        <button className="btn btn-primary px-20" onClick={handleBack}>Back</button>
                    </div>
                    
            </div>
                    
                )
    }
    
    </>
  )
}
