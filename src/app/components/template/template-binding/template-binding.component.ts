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
  public isDisable : boolean = true;
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
}
