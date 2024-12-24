import { Component } from '@angular/core';

@Component({
  selector: 'app-template-binding',
  standalone: true,
  imports: [],
  templateUrl: './template-binding.component.html',
  styleUrl: './template-binding.component.scss'
})
export class TemplateBindingComponent {
  public name : string = "Brendon Araújo";
  public age : number = 23;

  public sum(firstValue : number, secondNumber : number){
    return firstValue + secondNumber;
  }
}
