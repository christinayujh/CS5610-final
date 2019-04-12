import { Component, OnInit } from '@angular/core';
import {Comment} from '../../../models/comment.model.client';
import {CommentService} from '../../../services/comment.service.client';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-comments-edit',
  templateUrl: './comments-edit.component.html',
  styleUrls: ['./comments-edit.component.css']
})
export class CommentsEditComponent implements OnInit {
  comment: Comment;
  userId: String;
  houseId: String;

  constructor(private commentService: CommentService, private router: Router, private activatedRouter: ActivatedRoute) {
    this.comment = new Comment('123', 'Facebook');
  }

  updateComment() {
    this.commentService.updateComment(this.comment._id, this.comment).subscribe(comment => {
      this.router.navigateByUrl('/user/' + this.userId + '/house/' + this.houseId + '/detail');
    });
  }

  deleteComment() {
    this.commentService.deleteComment(this.comment._id).subscribe(comment => {
      this.router.navigateByUrl('/user/' + this.userId + '/house/' + this.houseId + '/detail');
    });
  }

  ngOnInit() {
    this.activatedRouter.params.subscribe(params => {
      this.comment._id = params['cid'];
      this.userId = params['uid'];
      this.houseId = params['hid'];
      console.log('comment id: ' + this.comment._id);
    });
    this.commentService.findCommentById(this.comment._id)
      .subscribe(data => {
        console.log('in comment-edit comp...');
        console.log(data);
        this.comment = data;
      });

  }

}
