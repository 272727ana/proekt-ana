import { Component } from '@angular/core';
import { RouterOutlet,RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  routes = [
    { linkName: 'Recipes' , url: '/recipes' },
    { linkName: 'Meal Plans', url: '/meal-plans' },
    { linkName: 'Shopping list', url: '/shopping-list' }
  ];

}
