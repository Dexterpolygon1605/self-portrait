import React from "react";

const Results = ({ onRouteChange, getFieldsValue }) => {

    return (
        <div className="mt6 ba w-80 center b--black-30">
            <div className="white tracked fw6 f4 mt3">
                Create your Character!
            </div>
            <div className="tc pa4">
                <div id="gIcon">

                </div>
                <div>
                    <label className="white underline">
                        Name:
                    </label>
                    <span id="rName" className="white ml1"> </span>
                </div>
                <div className="mt2">
                    <label className="white underline">
                        Gender:
                    </label>
                    <span id="rGender" className="white ml1"> </span>
                </div>
                <div className="mt2">
                    <label className="white underline">
                        Age:
                    </label>
                    <span id="rAge" className="white ml1"> </span>
                </div>
                <div className="mt2">
                    <label className="white underline">
                        Height:
                    </label>
                    <span id="rHeight" className="white ml1"></span>
                </div>
                <div className="mt2">
                    <label className="white underline">
                        Weight:
                    </label>
                    <span id="rWeight" className="white ml1">  </span>
                </div>
                <div className="mt2">
                    <label className="white underline">
                        Hobby:
                    </label>
                    <span id="rHobby" className="white ml1">  </span>
                </div>
                <div className="mt2">
                    <label className="white underline">
                        Occupation:
                    </label>
                    <span id="rOccupation" className="white ml1"> </span>
                </div>
                <div className="mt2">
                    <label className="white underline">
                        Community:
                    </label>
                    <span id="rCommunity" className="white ml1">  </span>
                </div>
                <div className="mt2">
                    <button type="button" onClick={getFieldsValue} className="b--transparent br3 bg-dark-gray grow dim white pa2">Show Results</button>
                    <button type="button" onClick={() => onRouteChange('mainpage')} className="b--transparent br3 bg-dark-gray grow dim white pa2 ml2">Confirm</button>
                    <button type="button" onClick={() => onRouteChange('character')} className="b--transparent br3 bg-dark-gray grow dim white pa2 ml2">Edit</button>
                </div>
            </div>
        </div>
    )
}

export default Results;