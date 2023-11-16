export function handleBackClick(quizData) {

  return () => {

    this.setState(prevState => {

      if (this.state.questionId !== 0) {

        const questionId = prevState.questionId - 1;

        let nextState = {

          questionId,
          question: quizData.questions[questionId].question,
          choices: quizData.questions[questionId].choices

        };

        if (this.state.quizState === 'check') {

          nextState = Object.assign(nextState, { answer: quizData.questions[questionId].answer })

        }

        return nextState;

      }

    });

    this.setQuestionState();

  };

}
