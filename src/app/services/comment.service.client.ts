import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Comment} from '../models/comment.model.client';

@Injectable()
export class CommentService {
  constructor(private _http: HttpClient) {
  }

  baseUrl = environment.baseUrl;

  createComment(houseId, comment) {
    return this._http.post<Comment>(this.baseUrl + '/api/house/' + houseId + '/comment', comment);
  }

  findCommentsByUser(houseId) {
    return this._http.get<[Comment]>(this.baseUrl + '/api/house/' + houseId + '/comment');
  }

  findCommentById(commentId) {
    return this._http.get<Comment>(this.baseUrl + '/api/comment/' + commentId);
  }

  updateComment(commentId, comment) {
    return this._http.put<Comment>(this.baseUrl + '/api/comment/' + commentId, comment);
  }

  deleteComment(commentId) {
    return this._http.delete<Comment>(this.baseUrl + '/api/comment/' + commentId);
  }
}
