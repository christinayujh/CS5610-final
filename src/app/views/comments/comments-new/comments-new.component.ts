import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {HouseService} from '../../../services/house.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {SharedService} from '../../../services/shared.service';
import {CommentService} from '../../../services/comment.service.client';

@Component({
  selector: 'app-comments-new',
  templateUrl: './comments-new.component.html',
  styleUrls: ['./comments-new.component.css']
})
export class CommentsNewComponent implements OnInit {
  houseId: String;
  userId: String;
  @ViewChild('f') loginForm: NgForm;

  constructor(private commentService: CommentService, private router: Router, private activatedRoute: ActivatedRoute, private sharedService: SharedService) {
  }

  createComment() {
    const description = this.loginForm.value.description;
    const comment = { description: description, owner: this.sharedService.user};
    this.commentService.createComment(this.houseId, comment).subscribe(cmt => {
      this.router.navigateByUrl('/user/' + this.userId + '/house/' + this.houseId + '/detail');
    });
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: any) => {
      this.houseId = params['hid'];
      this.userId = params['uid'];
    });
  }

}
