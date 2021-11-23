import React from "react";
import { IoIosMan } from 'react-icons/io'

const Mainpage = ({ onRouteChange }) => {
    return (
        <div>
            <div className="mt6 ba b--black-30">
                <div className="f2 tc">
                    <IoIosMan className="f1 ml1" />
                    Hi! Nelson Lopes, here's your profile status.
                </div>
                <div className="f3 tc mt2">
                    Profile score: <span className="white">13.0</span>
                </div>
                <div>
                    <ul className="list tc center dib f4">
                        <li className="fl mr5"> Mental Health Score: <span className="white">16.3</span></li>
                        <li className="fl mr5"> Physical Health Score: <span className="white">12.7</span></li>
                        <li className="fl mr5"> Relations: <span className="white">10.0</span></li>
                        <li className="fl mr5"> Work: <span className="white">7.0</span></li>
                    </ul>
                </div>
            </div>
            <div>
                <button type="button" onClick={() => onRouteChange('editProfile')} className="bg-transparent b--transparent white f3 fw5 underline mt3">Edit your profile</button>
                <button type="button" onClick={() => onRouteChange('support')} className="bg-transparent b--transparent white f3 fw5 underline mt3">Anonymous support form</button>
            </div>
        </div>
    )
}

export default Mainpage;