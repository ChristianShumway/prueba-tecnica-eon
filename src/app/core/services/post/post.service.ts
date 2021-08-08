import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../../environments/environment';
import { Observable } from 'rxjs';
import { Post, ComentarioPost } from './../../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(
    private http: HttpClient
  ) { }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${environment.apiUrl}/posts`);
  }

  comentariosPost(idPost: number): Observable<ComentarioPost[]> {
    return this.http.get<ComentarioPost[]>(`${environment.apiUrl}/posts/${idPost}/comments`);
  }
}
