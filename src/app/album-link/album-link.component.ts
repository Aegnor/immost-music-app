import {Component, Input} from '@angular/core'

import {LikesService} from '../shared/likes.service'

@Component({
  selector: 'app-album-link',
  templateUrl: './album-link.component.html',
  styleUrls: ['./album-link.component.scss']
})
export class AlbumLinkComponent {

  @Input() album: {} | undefined
  isLiked = false

  constructor(public likes: LikesService) {
  }

  addLikesHandler(item: {
    name: string,
    isLiked: boolean
  }): void {
    if (!this.likes.isLiked(item.name)) {
      this.isLiked = item.isLiked = true
      this.likes.addToLikes(item)
    } else {
      this.isLiked = item.isLiked = false
      this.likes.removeFromLikes(item.name)
    }
  }
}
