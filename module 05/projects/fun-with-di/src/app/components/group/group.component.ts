import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalcComponent } from "../calc/calc.component";
import { AdditionService } from 'src/app/services/addition.service';

@Component({
    selector: 'app-group',
    standalone: true,
    templateUrl: './group.component.html',
    styleUrls: ['./group.component.css'],
    imports: [CommonModule, CalcComponent], 
    providers: [AdditionService]
})
export class GroupComponent {

}
