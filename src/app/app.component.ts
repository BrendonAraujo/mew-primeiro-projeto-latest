import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TemplateBindingComponent } from './components/template/template-binding/template-binding.component';
import { TemplateVariablesComponent } from './components/template/template-variables/template-variables.component';
import { TemplateControlFlowComponent } from './components/template/template-control-flow/template-control-flow.component';
import { TemplateDeferrableViewsComponent } from "./components/template/template-deferrable-views/template-deferrable-views.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TemplateBindingComponent, TemplateVariablesComponent, TemplateControlFlowComponent, TemplateDeferrableViewsComponent],
  // templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  template: `
    <app-template-deferrable-views/>
    <!-- <app-template-control-flow/> -->
    <!-- <h1>Angular</h1>
    <app-template-variables/>
    <div>End Of Template Variables</div>
    <app-template-binding/> -->
  `
})
export class AppComponent {
  title = 'mew-primeiro-projeto-latest';
}
