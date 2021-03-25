import {Injectable} from '@angular/core'

@Injectable({providedIn: 'root'})
export class LikesService {
  likesArray: {
    name: string;
  }[] = []

  constructor() {
  }

  getLikesLength(): number {
    return this.likesArray.length
  }

  getLikesArrayFromLocalStorage(): any {
    const likes = localStorage.getItem('likes')
    if (likes != null) {
      return this.likesArray = JSON.parse(likes)
    }
  }

  isLiked(name: string): boolean {
    const candidate = this.likesArray.find(item => item.name === name)

    return !!candidate
  }

  addToLikes(item: {
    isLiked: boolean;
    name: string
  }): void {
    this.likesArray.push(item)

    localStorage.setItem('likes', JSON.stringify(this.likesArray))
  }

  removeFromLikes(name: string): void {
    const candidateIdx = this.likesArray.findIndex(item => item.name === name)

    this.likesArray.splice(candidateIdx, 1)

    localStorage.setItem('likes', JSON.stringify(this.likesArray))
  }
}
