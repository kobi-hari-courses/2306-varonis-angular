import { inject } from "@angular/core";
import { MyService } from "../services/my.service";

export abstract class BaseClass {
    private myService = inject(MyService);
    constructor(){


    }

}