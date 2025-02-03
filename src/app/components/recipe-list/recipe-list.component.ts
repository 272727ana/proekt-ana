import { Component } from '@angular/core';
import { RecipeService } from '../../services/recipe.service';
import { NgFor, NgIf } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'
import { FormsModule, NgModel } from '@angular/forms';
import { Recipe } from '../../models/recipe';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  imports: [NgFor,NgIf,MatIconModule,MatFormFieldModule,MatInputModule,FormsModule,RouterModule],
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {

  recipes: Recipe[] = [];
  filteredRecipes: Recipe[] = [];

  constructor(private recipeService: RecipeService) {}

  ngOnInit() {
    this.getRecipes();
  }

  getRecipes():void {
    this.recipeService.fetchRecipes().subscribe((data)=>{
      this.recipes = data;
      this.filteredRecipes = [...this.recipes];
    })
  }

  isGridView = true;  // Toggle between grid view and list view
  searchTerm = '';

  toggleView() {
    this.isGridView = !this.isGridView;
  }

  filterRecipes() {
    this.filteredRecipes = this.recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      recipe?.ingredients.some(ingredient =>
        ingredient.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      )
    );
  }

  deleteRecipe(recipeId: number): void {
    if (confirm('Are you sure you want to delete this recipe?')) {
      this.recipeService.deleteRecipe(recipeId).subscribe(() => {
        console.log('Recipe deleted');
        this.getRecipes(); // Refresh the list after deletion
      });
    }
  }
}
