import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Recipe } from '../../models/recipe';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  imports: [MatCardModule, NgIf, RouterModule],
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css',
})
export class RecipeDetailComponent {
  recipe: Recipe | null = null;
  recipeId!: number;

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id) {
        this.recipeId = +id; // Convert to number
        this.getRecipe(this.recipeId);
      }
    });
  }
  getRecipe(recipeId: number) {
    this.recipeService.fetchSpecificRecipe(recipeId).subscribe((data)=>{
      this.recipe=data;
    })
  }

  goBack(): void {
    this.router.navigate(['/recipes']); // Navigate back to student listing
  }
}
