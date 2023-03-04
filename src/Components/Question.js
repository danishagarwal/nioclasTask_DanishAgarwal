import { useEffect, useState } from "react";
import { MathJax } from 'better-react-mathjax';
const Question = ({ questionId }) => {

    const [question, setQuestion] = useState("");

    const getQuestion = async () => {
        const data = await fetch("https://0h8nti4f08.execute-api.ap-northeast-1.amazonaws.com/getQuestionDetails/getquestiondetails?QuestionID=" + questionId);
        const json = await data.json();
        // console.log(json[0].Question);
        setQuestion(json[0].Question);
    }

    useEffect(() => {
        getQuestion();
    }, [questionId]);

    return (
        <MathJax>
            {question}
        </MathJax>
    )
}

export default Question;