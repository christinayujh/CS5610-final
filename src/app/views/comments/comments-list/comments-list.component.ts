import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CommentService} from '../../../services/comment.service.client';
import {SharedService} from '../../../services/shared.service';

@Component({
  selector: 'app-comments-list',
  templateUrl: './comments-list.component.html',
  styleUrls: ['./comments-list.component.css']
})
export class CommentsListComponent implements OnInit {
  userId: String;
  houseId: String;
  comments = [{}];
  user: String;
  role: String;

  constructor(private commentService: CommentService, private activatedRoute: ActivatedRoute, private sharedService: SharedService) {
    this.user = sharedService.user;
    this.role = sharedService.role;
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: any) => {
      this.userId = params['uid'];
      this.houseId = params['hid'];
    });
    this.commentService.findCommentsByUser(this.houseId)
      .subscribe(data => {
        console.log('in comment-list comp...');
        console.log(data);
        this.comments = data;
      });
  }

}
