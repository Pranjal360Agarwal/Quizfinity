# Quiz Structure

## Components

### Static Components

- Quiz Title

### Dynamic Components

- Quiz Progress
- Quiz Content
  - Start Page
  - Questions Page
    - Question
    - Choices
  - Score Page
- Quiz Nav

## States

### For Quiz Content Component

- Begin
  - Start Page
- Progress
  - Questions Page
- End
  - Score Page
- CheckAnswers
  - Questions Page: Choices disabled

### For Quiz Nav Component

- Begin
  - Start Btn
- Progress
  - First Question
    - Next Btn Only
  - Other Questions
    - Back Btn 
    - Next Btn
  - Last Questions
    - Back Btn 
    - Submit Btn
      - Warn => if Answers.length != Questions.length
- End
  - Check Answers Btn
- CheckAnswers
  - Back Btn
  - Next Btn
