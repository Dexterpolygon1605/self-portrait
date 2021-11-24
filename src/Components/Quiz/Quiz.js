import React, { useEffect } from "react";

const Quiz = ({ onRouteChange, answerCheck }) => {

    const database = [
        {
            question: 'Quanto tempo do seu dia-a-dia voce passa no computador?',
            answers: [
                '1h-2h',
                '2h-4h',
                '4h-6h',
                'Praticamente o dia todo'
            ]
        },
        {
            question: 'Quantas horas de exercicio faz por semana?',
            answers: [
                '1:30h-3h',
                '4h-6h',
                '7h-8h',
                'Mais'
            ]
        },
        {
            question: 'Quantas vezes socializa com os seus amigos?',
            answers: [
                'Quase nunca',
                'As vezes',
                'Uma vez por semana',
                'Quase todos os dias',
                'Todos os dias'
            ]
        }
    ]

    let index = 0;

    const onButtonPressed = () => {
        index++;
        createQuiz();
    }

    const createQuiz = () => {
        if (index < database.length) {
            let span = "<span>";
            let send = span += database[index].question + "</span>";
            document.getElementById('question').innerHTML = send;
            let daLen = database[index].answers.length;
            let div = "<div>";
            for (let i = 0; i < daLen; i++) {
                div += "<input type='radio' name='answer' id='check' class='mr1 ml3 mb2'>" + "<span class='white' id='choice'>" + database[index].answers[i] + "</span>" + "</input>"
            }
            div += "</div>";
            document.getElementById('answers').innerHTML = div;
        } else {
            console.log('your done')
        }
    }

    useEffect(() => {
        createQuiz();
    });


    return (
        <div className="w-70-ns w-80 ba center mt6 b--black-50">
            <div className="f3-ns f5 fw5 tracked white mt3">
                Character Quiz
            </div>
            <div id="question" className="mt3-ns mt2 f4-ns f6 fw3 white tc pa4-ns pa3">

            </div>
            <div>
                <div id="answers">

                </div>
                <button id="continue" type="button" className="b--transparent br3 bg-dark-gray grow dim white pa2 ml2-ns mt2-ns mt2 w-70 w-20-ns mb3" onClick={answerCheck}> Continue </button>
            </div>
        </div>
    )
}

export default Quiz;