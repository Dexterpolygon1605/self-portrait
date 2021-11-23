import React from "react";

const Quiz = ({onRouteChange}) => {
    return (
        <div className="w-70-ns w-80 h5 ba center mt6 b--black-50">
            <div className="f3-ns f5 fw5 tracked white mt3">
                What's this website about?
            </div>
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
                <button className="b--transparent br3 bg-dark-gray grow dim white pa2 ml2-ns mt0-ns mt2 w-70 w-10-ns" onClick={() => onRouteChange('results')}> Continue </button>
            </div>
        </div>
    )
}

export default Quiz;