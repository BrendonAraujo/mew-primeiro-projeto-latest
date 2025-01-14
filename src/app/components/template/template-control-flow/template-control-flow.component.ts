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

  public dataWithObject : Person[] = [
    // new Person('1', 'Brendon Araújo'),
    // new Person('2', 'Ana Roger'),
    // new Person('3', 'Ana Carolina'),
    // new Person('4', 'Nicole Ewelyn'),
    // new Person('5', 'Analú Zafrin'),
    // new Person('6', 'Yasmin Saturnino'),
  ];

  public addNewName(name : string){
    let index = (this.dataWithObject.length + 1).toString();
    this.dataWithObject.push(new Person (index, name))
  }

  public booleanChange(){
    this.isTrue = !this.isTrue;
  }
}

class Person {
  constructor(id : string, name:string){
    this.id = id;
    this.name = name
  }

  public id : string = '';
  public name : string = '';
}
