import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PicsumService } from 'src/app/shared/picsum.service';
import { BlogService } from '../blog.service';
import { Blog } from '../models/blog';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss']
})
export class BlogDetailComponent implements OnInit {
  blog:Blog
  imageUrl:string
  constructor(private activatedRoute:ActivatedRoute, private router:Router, private blogService:BlogService, private picsumService:PicsumService) { }

  ngOnInit(): void {
    this.blogService.getBlogById(this.activatedRoute.snapshot.params['id'])
    .subscribe(blog=>{
      if(!blog){
        this.router.navigateByUrl('pages/blog/list')
      }
      this.blog = blog
      this.picsumService.getLargeImageUrl(this.blog.imageId).subscribe(imageUrl=>{
        this.imageUrl = imageUrl
      })
    })
  }

  goBack(){
    this.router.navigateByUrl('pages/blog/list')
  }
}
