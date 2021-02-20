import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {GenreLinksComponent} from './genre-links/genre-links.component';
import {HttpClientModule} from '@angular/common/http';
import {GenreAlbumsComponent} from './genre-albums/genre-albums.component';
import {HomeComponent} from './home/home.component';
import {FormsModule} from '@angular/forms';
import { FilterPipe } from './pipes/filter.pipe';
import { AlbumLinkComponent } from './album-link/album-link.component';

@NgModule({
  declarations: [
    AppComponent,
    GenreLinksComponent,
    GenreAlbumsComponent,
    HomeComponent,
    FilterPipe,
    AlbumLinkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
