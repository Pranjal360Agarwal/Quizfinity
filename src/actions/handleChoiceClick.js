export function handleChoiceClick() {

  return (questionId, choiceId) => {

    this.setState(prevState => ({
      answers: prevState.userAnswers.set(questionId, choiceId)
    }));

  };

}
