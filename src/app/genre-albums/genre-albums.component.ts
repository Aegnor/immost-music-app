import {Component, OnDestroy, OnInit} from '@angular/core'
import {Location} from '@angular/common'
import {ActivatedRoute, Params} from '@angular/router'
import {Subscription} from 'rxjs'

import {GenresService} from '../shared/genres.service'
import {LikesService} from '../shared/likes.service'

@Component({
  selector: 'app-genre-albums',
  templateUrl: './genre-albums.component.html',
  styleUrls: ['./genre-albums.component.scss']
})
export class GenreAlbumsComponent implements OnInit, OnDestroy {

  search = ''
  albums: any | undefined = []
  routeSubscriber: Subscription | undefined
  genreServiceFetchSubscriber: Subscription | undefined

  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private genreService: GenresService,
    public likes: LikesService
  ) {}

  ngOnInit(): void {
    let paramsTag = ''
    this.likes.getLikesArrayFromLocalStorage()

    this.routeSubscriber = this.route.params.subscribe((params: Params) => {
      paramsTag = params.tag
    })

    this.genreServiceFetchSubscriber = this.genreService.fetchAllByGenre(paramsTag)
      .subscribe(genre => {
        this.albums = genre.albums.album
      })
  }

  ngOnDestroy(): void {
    this.routeSubscriber?.unsubscribe()
    this.genreServiceFetchSubscriber?.unsubscribe()
  }

  goBack(): void {
    this.location.back()
  }
}
