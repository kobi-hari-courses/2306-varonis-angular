import { inject } from "@angular/core";
import { MyService } from "./services/my.service";

export function initMyService() {
    const myService = inject(MyService);
    myService.a();
    myService.b();
    myService.a();
}