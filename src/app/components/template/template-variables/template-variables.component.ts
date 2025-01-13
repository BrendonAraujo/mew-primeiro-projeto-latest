import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild, viewChild } from '@angular/core';

@Component({
  selector: 'app-template-variables',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './template-variables.component.html',
  styleUrl: './template-variables.component.scss'
})
export class TemplateVariablesComponent implements AfterViewInit {

  @ViewChild('name') nameInput! : ElementRef;

  ngAfterViewInit(): void {
    console.log(this.nameInput.nativeElement.value)
  }

}
