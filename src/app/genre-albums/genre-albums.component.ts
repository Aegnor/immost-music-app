import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {ActivatedRoute, Params} from '@angular/router';
import {GenresService} from '../genres.service';

@Component({
  selector: 'app-genre-albums',
  templateUrl: './genre-albums.component.html',
  styleUrls: ['./genre-albums.component.scss']
})
export class GenreAlbumsComponent implements OnInit {

  albums = [];

  constructor(private location: Location, private route: ActivatedRoute, private genreService: GenresService) {
  }

  ngOnInit(): void {
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
