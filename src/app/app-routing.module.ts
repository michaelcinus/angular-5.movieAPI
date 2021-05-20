import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './page/categories/categories.component';
import { HomeComponent } from './page/home/home.component';
import { MovieComponent } from './page/movie/movie.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'movie', component: MovieComponent},
  { path: 'categories', component: CategoriesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
