import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TemplateBindingComponent } from './components/template/template-binding/template-binding.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TemplateBindingComponent],
  // templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  template: `<app-template-binding/>`
})
export class AppComponent {
  title = 'mew-primeiro-projeto-latest';
}
