import React from "react";

const About = ({onRouteChange}) => {
    return(
        <div className="w-70-ns w-80 ba center mt6 b--black-50">
            <div id="ok" className="f3-ns f5 fw5 tracked white mt3">
                What's this website about?
            </div>
            <div className="mt3-ns mt2 f4-ns f6 fw3 white tl pa4-ns pa3">
            An Website that you will create a character that is a mirror of yourself.
            It will help you be better for yourself and make you acknowledge that not everything is ok.
            You can be a part of a community with your friends or people that are in the same situation as you.
            Learn how to love yourself!
            </div>
            <div>
                <button onClick={() => onRouteChange('character')} className="br3 b--transparent shadow-5 pa2 grow dim mb3">Create your Character!</button>
            </div>
        </div>
    )
}

export default About;