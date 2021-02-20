import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {ActivatedRoute, Params} from '@angular/router';
import {GenresService} from '../genres.service';
import {LikesService} from '../likes.service';

@Component({
  selector: 'app-genre-albums',
  templateUrl: './genre-albums.component.html',
  styleUrls: ['./genre-albums.component.scss']
})
export class GenreAlbumsComponent implements OnInit {

  search = '';
  albums: {}[] = [];

  constructor(private location: Location, private route: ActivatedRoute, private genreService: GenresService, public likes: LikesService) {
  }

  ngOnInit(): void {
    this.likes.getLikesArrayFromLocalStorage();

    this.route.params.subscribe((params: Params) => {
      this.genreService.fetchAllByGenre(params.tag)
        .subscribe(genre => {
          this.albums = genre.albums.album;
        });
    });
  }

  goBack(): void {
    this.location.back();
  }
}
