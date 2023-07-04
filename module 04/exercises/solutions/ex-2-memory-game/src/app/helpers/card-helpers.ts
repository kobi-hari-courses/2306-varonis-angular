import { Card } from "../models/card.model";

export function shuffleArray<T>(source: T[]): T[] {
    const res = [...source];
    for (let i = res.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [res[i], res[j]] = [res[j], res[i]];
    }
    return res;
}

let idCounter = 45234;

export function generateId(): string {
    return `id${++idCounter}`
}

export function createSuffledCards(): Card[] {
    const cards: Card[] = [];

    for (let index = 0; index < 21; index++) {
        for (let i = 0; i < 2; i++) {
            cards.push({
                id: generateId(), 
                image: i.toString()
            })
        }
    }

    return shuffleArray(cards);    
}