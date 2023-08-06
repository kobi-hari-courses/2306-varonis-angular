import { Route } from "@angular/router";
import { XComponent } from "./x/x.component";
import { YComponent } from "./y/y.component";

export const routes: Route[] = [
    { path: '', redirectTo: 'x', pathMatch: 'full'},
    { path :'x', component: XComponent}, 
    { path: 'y', component: YComponent}
]