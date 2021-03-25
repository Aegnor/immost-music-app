import {Component} from '@angular/core'

@Component({
  selector: 'app-genre-link',
  templateUrl: './genre-links.component.html',
  styleUrls: ['./genre-links.component.scss']
})
export class GenreLinksComponent {
  genresArray = [
    {
      name: 'Rock',
      imgSrc: '../../assets/images/1.webp',
      imgAlt: 'ralph tv cabin fever dreams'
    },
    {
      name: 'Electro',
      imgSrc: '../../assets/images/2.webp',
      imgAlt: 'roman flugel garden party'
    },
    {
      name: 'Hip-Hop',
      imgSrc: '../../assets/images/3.webp',
      imgAlt: 'two stone hands'
    },
    {
      name: 'Pop',
      imgSrc: '../../assets/images/4.webp',
      imgAlt: 'Juan MacLean manthony'
    },
    {
      name: 'R&B',
      imgSrc: '../../assets/images/5.webp',
      imgAlt: 'Las Vegas'
    },
    {
      name: 'Indie',
      imgSrc: '../../assets/images/6.webp',
      imgAlt: 'Two kids'
    }
  ]

  constructor() {
  }

}
