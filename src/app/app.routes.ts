import { Routes } from '@angular/router';
import { RecipeListComponent } from './components/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './components/recipe-detail/recipe-detail.component';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { RecipeFormComponent } from './components/recipe-form/recipe-form.component';
export const routes: Routes = [
  {path:'',redirectTo: '/recipes',pathMatch:'full'},
  {path:'recipes',component:RecipeListComponent},
  {path:'recipes/add',component:RecipeFormComponent},
  {path:'recipes/:id',component:RecipeDetailComponent},
  {path:'recipes/:id/edit',component:RecipeFormComponent},
  {path:'shopping-list',component:ShoppingListComponent},
];
