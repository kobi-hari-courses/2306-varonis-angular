import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ExpanderComponent } from "./components/expander/expander.component";
import { ExpanderToggleDirective } from "./components/expander/expander-toggle.directive";
import { ExpanderToggleComponent } from "./components/expander/expander-toggle/expander-toggle.component";

const exportables = [
    ExpanderComponent,
    ExpanderToggleDirective , 
    ExpanderToggleComponent
]


@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        ...exportables
    ], 
    exports: [
        ...exportables
    ]
})
export class SharedModule {

}