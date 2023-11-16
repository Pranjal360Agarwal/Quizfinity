export function handleStartClick() {

  return () => {

    this.setState({

      quizState: 'progress',

    });

    this.setQuestionState();

  };

}
