import { Inject, Injectable } from "@angular/core";
import { PREFIX_TOKEN } from "../tokens/prefix.token";
import { TIMESTAMP_TOKEN } from "../tokens/timestamp.token";

@Injectable({
    providedIn: 'root'
})
export class HistoryService {
    id = Math.ceil(Math.random() * 100000);

    constructor(
        @Inject(PREFIX_TOKEN) private prefix: string, 
        @Inject(TIMESTAMP_TOKEN) private timestamp: () => string

    ) {
        console.log(`History Service created id = ${this.id}`);
    }
    records: string[] = [];

    audit(txt: string) {
        this.records.push(`${this.timestamp()} ${this.prefix} ${txt}`);
        console.log(this.records);
    }
}