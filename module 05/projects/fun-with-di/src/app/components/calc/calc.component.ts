import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdditionService } from 'src/app/services/addition.service';
import { GroupComponent } from '../group/group.component';

@Component({
  selector: 'app-calc',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css'], 
  providers: [
    
  ]
})
export class CalcComponent {
  constructor(
    protected additionService: AdditionService, 
    protected groupParent: GroupComponent){}

  result: number = -1;

  add(op1: number, op2: number) {
    this.result = this.additionService.add(op1, op2);
  }

}
