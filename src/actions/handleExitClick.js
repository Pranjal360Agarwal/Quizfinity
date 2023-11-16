export function handleExitClick() {

  return () => {
  
    this.setState(this.baseState);

    this.setState({
      userAnswers: new Map()
    });

  };

}
