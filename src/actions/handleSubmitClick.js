export function handleSubmitClick() {

  return () => {

    this.setState({

      quizState: 'end'

    });

    this.setScore();

  };

}
