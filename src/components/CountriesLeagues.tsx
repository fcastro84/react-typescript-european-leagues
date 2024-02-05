import { useState } from "react"
import { COUNTRIES } from "../data/countries"
import TeamList from "./teams/TeamList"
import { useCountriesLeague } from "../hooks/useCountriesLeague"

function CountriesLeagues() {
    
    const [idSelected, setIdSelected] = useState( window.history.state?.usr?.id ?? 39)
    const { data, isLoading } = useCountriesLeague(idSelected)

    const handleeClickCountrie = (codeCountrie: number) => () => {
        setIdSelected(codeCountrie)
        window.history.replaceState(null, '', '/')
        window.history.replaceState(null, '', '/countries-league')
    }
    
  return (
    <div className="flex flex-col w-full mt-0">
        <header className="card w-full bg-slate-50 mt-0">
            <div className="card-body justify-center items-center">
                <h2 className="card-title uppercase font-bold text-center">Football Updates</h2>
                <p>Football Updates Application: (React + Vite + TypeScript + React Query + daisyUI + Tailwind CSS + React Router)</p>
                <p>The repository code can be found at the following link: <a href="https://github.com/fcastro84/react-typescript-european-leagues" target='_blank' className='text-blue-700 font-bold'>Here</a></p>
            </div>
        </header>
        <div className="navbar bg-blue-600 text-primary-content">
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    {
                        COUNTRIES.map( country => (
                        <li key={country.id} className="text-xl" id={`${country.name}Select`}>
                            <button type="button" className={`${idSelected === country.code ? 'btn-active text-pink-500': 'text-gray-200' } btn btn-link`}  onClick={handleeClickCountrie(country.code)}>
                                {country.name}
                            </button>
                        </li> 
                        ))
                    }
                    
                    
                </ul>
                </div>
                <a className="btn btn-ghost text-xl">European Leagues</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                {
                        COUNTRIES.map( country => (
                        <li key={country.id} className="text-xl" id={`${country.name}Select`}>
                            <button type="button" className={`${idSelected === country.code ? 'btn-active text-pink-500': 'text-gray-200' } btn btn-link`}  onClick={handleeClickCountrie(country.code)}>
                                {country.name}
                            </button>
                        </li> 
                        ))
                    }
                </ul>
            </div>
            <div className="navbar-end">
            
            </div>
        </div>
        <div className="flex justify-center mt-5">
            {
                isLoading && (
                    <>
                        <span className="loading loading-spinner text-primary w-20 h-20"></span>
                        <span className="loading loading-spinner text-secondary w-20 h-20"></span>
                        <span className="loading loading-spinner text-accent w-20 h-20"></span>
                        <span className="loading loading-spinner text-neutral w-20 h-20"></span>
                    </>
                )
            }
            {
                (!isLoading && data) && <TeamList data={data} /> 
            }
        </div>
        
    </div>
    
  )
}

export default CountriesLeagues
