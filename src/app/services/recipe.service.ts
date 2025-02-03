import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recipe } from '../models/recipe';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private apiUrl='http://localhost:3000/recipes'

  constructor(private http:HttpClient) { }

  createRecipe(recipe:Recipe):Observable<Recipe>{
    return this.http.post<Recipe>(this.apiUrl,recipe);
  }

  fetchRecipes():Observable<Recipe[]>{
    return this.http.get<Recipe[]>(this.apiUrl);
  }

  fetchSpecificRecipe(recipeId:number):Observable<Recipe>{
    return this.http.get<Recipe>(`${this.apiUrl}/${recipeId}`);
  }

  deleteRecipe(recipeId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${recipeId}`);
  }

  updateRecipe(recipe: Recipe): Observable<Recipe> {
    return this.http.put<Recipe>(`${this.apiUrl}/${recipe.id}`, recipe);
  }
}
