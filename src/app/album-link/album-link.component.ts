import {Component, Input} from '@angular/core'

import {LikesService} from '../shared/likes.service'

@Component({
  selector: 'app-album-link',
  templateUrl: './album-link.component.html',
  styleUrls: ['./album-link.component.scss']
})
export class AlbumLinkComponent {

  @Input() album: any | undefined
  isLiked = false

  constructor(public likes: LikesService) {
  }

  addLikesHandler(song: any): void {
    !this.likes.isLiked(song.name) ? this.likes.addToLikes(song) : this.likes.removeFromLikes(song)

    this.isLiked = !this.isLiked
  }
}
