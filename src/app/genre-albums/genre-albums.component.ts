import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-genre-albums',
  templateUrl: './genre-albums.component.html',
  styleUrls: ['./genre-albums.component.scss']
})
export class GenreAlbumsComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit(): void {
  }

  goBack(): void {
    this.location.back();
  }
}
