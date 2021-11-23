import React from "react";


const Back = ({ onRouteChange, done }) => {

    if (!done) {
        return (
            <div className="fixed tl top-0 left-0 pa2 z-3">
                <button type="button" onClick={() => onRouteChange('homepage')} className="bg-transparent b--transparent white f3 fw5 underline">Go back to homepage</button>
            </div>
        )
    } else {
        return (
            <div className="fixed tl top-0 left-0 pa2 z-3">
                <button type="button" onClick={() => onRouteChange('mainpage')} className="bg-transparent b--transparent white f3 fw5 underline">Go back to Main Page</button>
            </div>
        )
    }


}

export default Back;