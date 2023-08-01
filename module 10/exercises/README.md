# Reactive Operators exercise

## Exercise 1: Pop Quiz App
This is actually the same exercise we have done in [Module 10](../../module%2010/exercises/README.md). In the original exercise we used a lot of behavior subjects for information that was derived from other subjects. And we used the service, to do the synchronization (whenever we pushed a value to one of the atomic subjects, we also updated the derived ones). This is bad architecture.

In this exercise you will fix the application by replacing the derived behavior subjects with observables that will be created using operators. So they will be automatically updated.

### Targets
- Using Observables
- Using RxJS operators

### Steps
- The `_currentQuestion$` and `_previousAnswer` subjects are the atomic ones, and they should remain. But we do want to ranme them internally: `_questions$` and `_answers$`. 
- Now the implementation of `answerCurrentQuestion` and `createNewQuestion` are simple:
    - `answerCurrentQuestion` only pushes a new answer to the `_answers$` subject and then call `createNewQuestion`
    - `createNewQuestion` only pushes a new question to the `_questions$` subject
- All the rest of the observables should be derived using operators:
    1. Implement the `currentQuestion$` observable. (Trivial)
    2. Implement the `previousQuestion$` observable. (Hint - use the `bufferCount` operator)
    3. Implement the `previousAnswer$` observable. This is actually quite simple, since this is the latest answer.
    4. Implement the `score$`, `rank$`, `isPreviousQuestionCorrect$` observables. To do that, 
        - Start by creating a `questionAnswer$` observable of type: `Observable<[Question, Answer]>`. This observable will push the next pair of question + answer. (Hint, use `zip` to pair together questions and answers)
        - Now create a `history$` observable of type `Observable<[Question, Answer][]>`. Each event will hold the entire list of questions that were answered as question+answer pair. (Hint, use `scan` to derive it from `questionAnswer$`)
        - Now you can use `map` to create `score$` which is the accumulated score.
        - In the same way you can derive `rank$` and `isPreviousQuestionCorrect$` from the `history$` observable using map. Each time implement the mapping function seperatly as a pure function
    

