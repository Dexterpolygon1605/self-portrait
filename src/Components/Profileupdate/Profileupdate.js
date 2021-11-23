import React from "react";

const Profileupdate = ({ onRouteChange }) => {
    return (
        <div>
            <div className="mt6 ba w-80 center b--black-30">
                <div className="white tracked fw6 f4 mt3">
                    Create your Character!
                </div>
                <form className="tl pa4">
                    <div>
                        <label className="white">
                            Name:
                        </label>
                        <input className="ml2 w-20-ns w-70 b--transparent br3 bg-gray grow white" />
                    </div>
                    <div className="mt2">
                        <label className="white">
                            Gender:
                        </label>
                        <select className="ml2 b--transparent br3 bg-gray white grow white">
                            <option>Male</option>
                            <option>Female</option>
                        </select>
                    </div>
                    <div className="mt2">
                        <label className="white">
                            Age:
                        </label>
                        <select className="ml2 b--transparent br3 bg-gray white grow white">
                            <option>12-14</option>
                            <option>16-18</option>
                            <option>+18</option>
                        </select>
                    </div>
                    <div className="mt2">
                        <label className="white">
                            Height:
                        </label>
                        <select className="ml2 b--transparent br3 bg-gray white grow white">
                            <option>-1.60</option>
                            <option>1.60-1.70</option>
                            <option>1.70-1.80</option>
                            <option>1.80-2.00</option>
                            <option>+2.00</option>
                        </select>
                    </div>
                    <div className="mt2">
                        <label className="white">
                            Weight:
                        </label>
                        <input className="ml2 w-10-ns w-20 b--transparent br3 bg-gray grow white" />
                    </div>
                    <div className="mt2">
                        <label className="white">
                            Hobby:
                        </label>
                        <input className="ml2 w-30-ns w-70 b--transparent br3 bg-gray grow white" />
                    </div>
                    <div className="mt2">
                        <label className="white">
                            Occupation:
                        </label>
                        <select className="ml2 b--transparent br3 bg-gray white grow white">
                            <option>Employed</option>
                            <option>Estudant</option>
                            <option>Unemployed</option>
                        </select>
                    </div>
                    <div className="mt2">
                        <label className="white">
                            Community:
                        </label>
                        <input className="ml2 w-30-ns w-50 b--transparent br3 bg-gray grow white" />
                    </div>
                    <div className="mt2">
                        <button type="button" onClick={() => onRouteChange('quiz')} className="b--transparent br3 bg-dark-gray grow dim white pa2">Submit</button>
                    </div>
                </form>
            </div>
            <div className="w-80 ba center mt3 b--black-50 mb6">
                <div className="mt3-ns mt2 f4-ns f6 fw3 white tc pa4-ns pa3">
                    Quanto tempo do seu dia-a-dia você passa no seu computador?
                </div>
                <div>
                    <button className="br3 b--transparent shadow-5 pa2 grow dim mr2 bg-gray white">
                        1h-4h
                    </button>
                    <button className="br3 b--transparent shadow-5 pa2 grow dim mr2 mt0-ns bg-gray white">
                        5h-8h
                    </button>
                    <button className="br3 b--transparent shadow-5 pa2 grow dim mt0-ns mt2 bg-gray white">
                        Praticamente o dia todo
                    </button>
                    <button className="b--transparent br3 bg-dark-gray grow dim white pa2 ml2-ns mt0-ns mt2 w-70 w-10-ns mb4" onClick={() => onRouteChange('results')}> Continue </button>
                </div>
            </div>
            <button className="b--transparent br3 bg-dark-gray grow dim white pa2 ml2-ns mt0-ns mt2 w-70 w-10-ns mb4" onClick={() => onRouteChange('mainpage')}> Update </button>
        </div>
    )
}

export default Profileupdate;