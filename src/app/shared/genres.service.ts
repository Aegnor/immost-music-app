import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'

@Injectable({providedIn: 'root'})
export class GenresService {
  constructor(private http: HttpClient) {
  }

  fetchAllByGenre(genre: string): Observable<any> {
    return this.http.get(`http://ws.audioscrobbler.com/2.0/?method=tag.gettopalbums&tag=${genre}&api_key=22e5dcb7293a23da484afeacce80c247&format=json`)
  }
}
