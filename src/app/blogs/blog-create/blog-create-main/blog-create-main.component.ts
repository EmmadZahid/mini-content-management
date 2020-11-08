import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AppValidators } from 'src/app/shared/validators/app-validators.service';
import { BlogService } from '../../blog.service';
import { Blog } from '../../models/blog';
import { BlogImageGalleryComponent } from '../blog-image-gallery/blog-image-gallery.component';

@Component({
  selector: 'app-blog-create-main',
  templateUrl: './blog-create-main.component.html',
  styleUrls: ['./blog-create-main.component.scss']
})
export class BlogCreateMainComponent implements OnInit, OnDestroy {
  form:FormGroup
  disableSaveBtn:boolean
  imageUrl:string = ''
  imageId:string = ''
  @ViewChild('gallery') gallery:BlogImageGalleryComponent
  private destroy$: Subject<void> = new Subject<void>();
  constructor(private blogService:BlogService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      'title': new FormControl('', [Validators.required, AppValidators.emptyFieldValidator()]),
      'content': new FormControl('', [Validators.required, AppValidators.emptyFieldValidator()])
    })
  }


  onBlogSave(){
    if(this.form.valid && this.imageUrl.length > 0){
      this.disableSaveBtn = true
      let newBlog:Blog = new Blog()
      newBlog.title = this.form.controls['title'].value.trim()
      newBlog.content = this.form.controls['content'].value.trim()
      newBlog.imageUrl = this.imageUrl
      newBlog.imageId = this.imageId
      this.blogService.createBlog(newBlog).pipe(
        takeUntil(this.destroy$)
      ).subscribe(
        ()=>{
          this.disableSaveBtn = false
          this.form.reset()
          this.gallery.refresh()
          this.imageUrl = ''
        }, err =>{
          console.log(err)
        }
      )
    } else{
      this.disableSaveBtn = true
    }
  }

  onImageSelection(data){
    this.imageUrl = data['imageUrl']
    this.imageId = data['id']
  }

  ngOnDestroy(){
    this.destroy$.unsubscribe()
  }
}
