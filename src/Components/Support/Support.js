import React from "react";

const Support = ({ onRouteChange }) => {
    return (
        <div className="mt6 ba w-80 center b--black-30">
            <div className="white tracked fw6 f4 mt3">
                Submit your anonymous message
            </div>
            <form className="tc pa4">
                <div>
                    <label className="white fw4">
                        Message:
                    </label>
                    <div className="mt2">
                        <textarea className="ml2 w-50-ns w-70 h4 b--transparent br3 bg-gray grow white" />
                    </div>
                </div>
                <div className="tc mt1">
                    <button type="button" onClick={() => onRouteChange('mainpage')} className="b--transparent br3 bg-dark-gray grow dim white pa2">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Support;