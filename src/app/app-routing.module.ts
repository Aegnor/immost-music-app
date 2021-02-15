import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GenreAlbumsComponent } from './genre-albums/genre-albums.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'genre-albums/:tag',
    component: GenreAlbumsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
