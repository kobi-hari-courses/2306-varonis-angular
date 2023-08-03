import { Question } from "src/app/models/question.model";
import { QuizState } from "./quiz.state";
import { QuizEntry } from "src/app/models/quiz-entry.model";

export function currentQuestion(state: QuizState): Question {
    return state.questions[state.answers.length];
}

export function buildQuizEntries(state: QuizState): QuizEntry[] {
    return state.questions.map((_, i) => i >= state.answers.length 
        ? 'Empty'
        : ((state.answers[i].isCorrect) ? 'Correct' : 'Wrong')
        )
}







// const a = [1, 2, 3];
// const b = [4, 5, 6];
// const c = [1, 1, 2, 3, 5, 8, 13, 21, 34];

// // a.push(4);
// const a2 = [...a, 4];

// // a.shift(4);
// const a3 = [4, ...a];

// // a.concat(b);
// const a4 = [...a, ...b];

// // delete all items with value 2
// const a5 = a.filter(n => n !== 2);

// // removing item by index with splice
// const a6 = c.filter((n, i) => i !== 4);
// const a7 = [...c.slice(0, 4), ...c.slice(5)];

// // a[4] = 16
// const a8 = [...c.slice(0, 4), 16, ...c.slice(5)];
// const a9 = c.map((n, i) => i === 4 ? 16 : n);

// const o = {
//     x: 15, 
//     y: 16, 
//     z: 17
// }

// const o3 = {
//     x: 100, 
//     z: 200
// }

// // o['x']=20
// const o2 = {
//     ...o, 
//     x: 20, 
// }

// const o4 = {
//     ...o, 
//     ...o3
// }

// const obj1 = {x: 1, y: 2}
// const obj2 = {x: 3, z: 15}

// const objApply = {
//     ...obj1, 
//     ...obj2, 
//     x: 60
// }   // {x: 60, y: 2, z: 15}


// Object.fromEntries(Object.entries(o).filter(pair => pair[0] !== 'y'));

// function removeKey<T extends Object, K extends keyof T>(obj: T, key: K): Omit<T, K> {
//     const tuples = Object.entries(obj);
//     const filtered = tuples.filter(pair => pair[0] !== key);
//     return Object.fromEntries(filtered) as Omit<T, K>;
// }

// const o10 = {x: 1, y: 2, z: 3};
// const o11 = removeKey(o10, 'x');


