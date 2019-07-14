import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent {
  like: number = 100;
  isLiked: boolean;
  likeP(){
    this.like += (this.isLiked) ? -1:1;
    this.isLiked = !this.isLiked;
  }

}
