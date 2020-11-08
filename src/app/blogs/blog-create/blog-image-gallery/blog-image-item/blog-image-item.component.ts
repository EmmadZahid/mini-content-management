import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { BlogService } from 'src/app/blogs/blog.service';
import { PicsumService } from 'src/app/shared/services/picsum.service';
@Component({
  selector: 'app-blog-image-item',
  templateUrl: './blog-image-item.component.html',
  styleUrls: ['./blog-image-item.component.scss']
})
export class BlogImageItemComponent implements OnInit, OnDestroy {
  @Output() onSelection:EventEmitter<{id:string, imageUrl:string}> = new EventEmitter<{id:string, imageUrl:string}>()
  @Input() set selectedId(val:string){
    if(this.id == val && val != ""){
      this.iAmSelected = true
    } else{
      this.iAmSelected = false
    }
  }
  iAmSelected:boolean = false
  
  private destroy$:Subject<void> = new Subject<void>()
  imageUrl:string = ''
  id:string = ''
  constructor(private blogService:BlogService, private picsumService:PicsumService) { }

  ngOnInit(): void {
    this.fetchImage()
  }

  fetchImage(){
    this.picsumService.getRandomPicsumImage().pipe(
      takeUntil(this.destroy$)
    )
    .subscribe((val)=>{
      this.imageUrl = val.imageUrl
      this.id = val.id
    }, err=>{
      console.error(err)
    })
  }

  refresh(){
    this.imageUrl = this.id = ''
    this.fetchImage()
  }

  onImageClick(){
    this.onSelection.emit({id: this.id, imageUrl: this.imageUrl})
  }

  ngOnDestroy(){
    this.destroy$.next()
    this.destroy$.complete()
  }
}
