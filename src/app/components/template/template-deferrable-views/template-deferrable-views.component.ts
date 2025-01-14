import { Component } from '@angular/core';
import { TemplateBindingComponent } from "../template-binding/template-binding.component";

@Component({
  selector: 'app-template-deferrable-views',
  standalone: true,
  imports: [TemplateBindingComponent],
  templateUrl: './template-deferrable-views.component.html',
  styleUrl: './template-deferrable-views.component.scss'
})
export class TemplateDeferrableViewsComponent {

}
