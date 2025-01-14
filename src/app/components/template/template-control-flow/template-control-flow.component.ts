import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { delay, Observable, of } from 'rxjs';

@Component({
  selector: 'app-template-control-flow',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './template-control-flow.component.html',
  styleUrl: './template-control-flow.component.scss'
})
export class TemplateControlFlowComponent {
  public isTrue : boolean =  true;

  public data : string[] = [
    'First Item',
    'Second Item',
    'Third Item'
  ];

  public booleanChange(){
    this.isTrue = !this.isTrue;
  }
}
