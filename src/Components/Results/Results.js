import React from "react";
import { IoIosMan } from 'react-icons/io'

const Results = ({ onRouteChange }) => {
    return (
        <div className="mt6 ba w-80 center b--black-30">
            <div className="white tracked fw6 f4 mt3">
                Create your Character!
            </div>
            <div className="tl pa4">
                <IoIosMan className="f2 ml1"/>
                <div>
                    <label className="white">
                        Name:
                    </label>
                    <span className="white ml1"> Nelson Lopes </span>
                </div>
                <div className="mt2">
                    <label className="white">
                        Gender:
                    </label>
                    <span className="white ml1"> Male </span>
                </div>
                <div className="mt2">
                    <label className="white">
                        Age:
                    </label>
                    <span className="white ml1"> 21 </span>
                </div>
                <div className="mt2">
                    <label className="white">
                        Height:
                    </label>
                    <span className="white ml1"> 1.80-2.00m</span>
                </div>
                <div className="mt2">
                    <label className="white">
                        Weight:
                    </label>
                    <span className="white ml1"> 115Kg </span>
                </div>
                <div className="mt2">
                    <label className="white">
                        Hobby:
                    </label>
                    <span className="white ml1"> Programar e jogar videojogos </span>
                </div>
                <div className="mt2">
                    <label className="white">
                        Occupation:
                    </label>
                    <span className="white ml1"> Unemployed </span>
                </div>
                <div className="mt2">
                    <label className="white">
                        Community:
                    </label>
                    <span className="white ml1"> Geriante </span>
                </div>
                <div className="mt2">
                    <button type="button" onClick={() => onRouteChange('mainpage')} className="b--transparent br3 bg-dark-gray grow dim white pa2">Confirm</button>
                    <button type="button" onClick={() => onRouteChange('character')} className="b--transparent br3 bg-dark-gray grow dim white pa2 ml2">Edit</button>
                </div>
            </div>
        </div>
    )
}

export default Results;