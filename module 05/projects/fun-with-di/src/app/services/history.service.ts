import { Inject, Injectable } from "@angular/core";
import { PREFIX_TOKEN } from "../tokens/prefix.token";

@Injectable({
    providedIn: 'root'
})
export class HistoryService {
    id = Math.ceil(Math.random() * 100000);

    constructor(
        @Inject(PREFIX_TOKEN) private prefix: string

    ) {
        console.log(`History Service created id = ${this.id}`);
    }
    records: string[] = [];

    audit(txt: string) {
        this.records.push(`${this.prefix} ${txt}`);
        console.log(this.records);
    }
}