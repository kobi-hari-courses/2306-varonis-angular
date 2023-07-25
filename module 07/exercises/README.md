# Reactive Services Exercise

## Exercise 1: Pop Quiz App
In this exercise you will create an application that will allow the user to practice math problems in an infinite quiz where the user scores points for every correct answer

### Targets
- Using Observables
- Using Subjects
- Consuming state wrapped in subjects
- Using the async pipe

### Requirements
- The applications will present the "next question" to the user
- Each question is a multiplication between 2 numbers between 5 and 20. (17 * 10 = ?)
- The user types the answer in a number input and then clicks "submit"
- The app then moves on to the next question which it randomizes
- The app also accumulates scores. Your current score is the number of correct answers divided by the total number of questions, so if you have answered correctly 15 out of 30 times, your current score is 50%
- The app also hold a "current rank" as following
    - If your score is below 50% or you have not yet answered 5 questions, you are 'Beginner'
    - If your score is between 50 and 75% and you have answered at least 10 questions, you are 'Advaced'
    - If your score is above 75% and you have answered more than 15 questions, you are 'Pro'
- At each time the question should present
    - Your score
    - Your rand
    - The next question
    - The previous question and its details (correct answer, your answer, paint it red if it is incorrect, paint it green if it correct)

## Guidelines
1. You should use a service to hold the state
2. The service should expose all pieces of data as observables (use the correct kind of subject)
3. Maintain service encapsulation. Make sure you only expose observables, not subjects.
4. The components should use `async` pipe to present the data.
5. The components should all be configured to `Change Detection Strategy: Push`

