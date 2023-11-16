export function handleCheckClick(quizData) {

  return () => this.setState({

    quizState: 'check',
    questionState: 'first',
    questionId: 0,
    question: quizData.questions[0].question,
    choices: quizData.questions[0].choices,
    answer: quizData.questions[0].answer

  });

}