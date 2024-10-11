import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../interfaces/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private httpClient = inject(HttpClient);
  private url = 'https://jsonplaceholder.typicode.com/posts';

  public getPosts(): Observable<Post[]> {
    return this.httpClient.get<Post[]>(this.url);
  }
}
