import { Component, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdditionService } from 'src/app/services/addition.service';
import { GroupComponent } from '../group/group.component';
import { IAdditionService } from 'src/app/services/iaddition-service';
import { WrongAdditionService } from 'src/app/services/wrong-addition.service';

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
    protected wrongAdditionService: WrongAdditionService
  ){}

  result: number = -1;

  add(op1: number, op2: number) {
    this.result = this.additionService.add(op1, op2);
  }

}
