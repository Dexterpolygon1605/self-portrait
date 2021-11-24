import React from "react";

const Character = ({ onRouteChange, getValues }) => {

    return (
        <div className="mt6 ba w-80 center b--black-30">
            <div className="white tracked fw6 f4 mt3">
                Create your Character!
            </div>
            <form className="tl pa4">
                <div>
                    <label className="white">
                        Name:
                    </label>
                    <input onChange={getValues} id="name" className="ml2 w-20-ns w-70 b--transparent br3 bg-gray grow white" />
                </div>
                <div className="mt2">
                    <label className="white">
                        Gender:
                    </label>
                    <select onChange={getValues} id="gender" className="ml2 b--transparent br3 bg-gray white grow white">
                        <option>Male</option>
                        <option>Female</option>
                    </select>
                </div>
                <div className="mt2">
                    <label className="white">
                        Age:
                    </label>
                    <input onChange={getValues} id="age" className="ml2 w-10-ns w-70 b--transparent br3 bg-gray grow white" />
                </div>
                <div className="mt2">
                    <label className="white">
                        Height:
                    </label>
                    <input onChange={getValues} id="height" className="ml2 w-10-ns w-70 b--transparent br3 bg-gray grow white" />
                </div>
                <div className="mt2">
                    <label className="white">
                        Weight:
                    </label>
                    <input onChange={getValues} id="weight" className="ml2 w-10-ns w-20 b--transparent br3 bg-gray grow white" />
                </div>
                <div className="mt2">
                    <label className="white">
                        Hobby:
                    </label>
                    <input onChange={getValues} id="hobby" className="ml2 w-30-ns w-70 b--transparent br3 bg-gray grow white" />
                </div>
                <div className="mt2">
                    <label className="white">
                        Occupation:
                    </label>
                    <select onChange={getValues} id="occupation" className="ml2 b--transparent br3 bg-gray white grow white">
                        <option>Employed</option>
                        <option>Estudant</option>
                        <option>Unemployed</option>
                    </select>
                </div>
                <div className="mt2">
                    <label className="white">
                        Community:
                    </label>
                    <input onChange={getValues} id="community" className="ml2 w-30-ns w-50 b--transparent br3 bg-gray grow white" />
                </div>
                <div className="mt2">
                    <button type="button" onClick={() => onRouteChange('quiz')} className="b--transparent br3 bg-dark-gray grow dim white pa2">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Character;