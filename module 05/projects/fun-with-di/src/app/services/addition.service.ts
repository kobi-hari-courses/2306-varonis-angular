import { Injectable } from "@angular/core";
import { HistoryService } from "./history.service";
import { IAdditionService } from "./iaddition-service";

@Injectable({
    providedIn: 'root'
})
export class AdditionService implements IAdditionService {
    id = Math.ceil(Math.random() * 100000);

    constructor(private historyService: HistoryService) {
        console.log(`Addition Service created id = ${this.id}`);
    }

    add(a: number, b: number) {
        this.historyService.audit(`Adding ${a} and ${b}`)
        return a + b;
    }
}