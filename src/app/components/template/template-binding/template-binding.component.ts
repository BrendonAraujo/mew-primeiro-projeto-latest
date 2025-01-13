import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-binding',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './template-binding.component.html',
  styleUrl: './template-binding.component.scss'
})
export class TemplateBindingComponent {
  public name : string = "Brendon Araújo";
  public age : number = 23;
  public isDisable : boolean = true;
  public isTextDecotation = this.age >= 23 ? 'underline' : 'none';
  public srcValue : string = "https://yt3.googleusercontent.com/4z0oRVDPoyuGeYAXx4ctU1xAoVSdrqtENmIoWQZSd4MQJkizoMVsOdoN5_Qp9n0duQXsFo_w=s160-c-k-c0x00ffffff-no-rj";
  public imgName : string = "image"

  constructor(){
    // setTimeout(() => {
    //   this.name = "Raul Seixas"
    // }, 1000);
  }

  public sum(firstValue : number, secondNumber : number){
    return firstValue + secondNumber;
  }

  public sumAge(){
    this.age++;
  }

  public SubAge(){
    this.age--;
  }

  public onkeyDown(event : Event){
    return console.log(event);
  }

  public onMouseEvent(event : MouseEvent){
    return console.log(event.clientX);
  }
}
