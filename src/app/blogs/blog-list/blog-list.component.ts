import { Component, HostListener, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { BlogListDataSource } from '../blog-list-data-source';
import { Blog } from '../models/blog';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss'],
  providers: [BlogListDataSource]
})
export class BlogListComponent implements OnInit, OnDestroy, OnChanges {
  blogs: Blog[] = []
  private destroy$: Subject<void> = new Subject<void>()

  constructor(private blogListDataSource: BlogListDataSource) { }

  @HostListener("window:scroll", ["$event"])
  onWindowScroll() {
    //In chrome and some browser scroll is given to body tag
    let pos = (document.documentElement.scrollTop || document.body.scrollTop) + document.documentElement.offsetHeight;
    let max = document.documentElement.scrollHeight;
    // pos/max will give you the distance between scroll bottom and and bottom of screen in percentage.
    if (pos >= (max - 50)) {
      if(!this.blogListDataSource.isLoading){
        this.getBlogsPage()
      }
    }
  }

  ngOnInit(): void {
    this.getBlogsPage()
  }

  ngOnChanges(){
    console.log("some change")
  }

  getBlogsPage() {
    this.blogListDataSource.getBlogsPage()
      .pipe(takeUntil(this.destroy$))
      .subscribe((blogs: boolean | Blog[]) => {
        if(blogs == false){
          return
        }
        this.blogs = this.blogs.concat(<Blog[]>blogs)
        setTimeout(()=>{
          if(this.checkIfLoadMoreRequired()){
            this.getBlogsPage() 
          }
        }, 500)
      })
  }

  checkIfLoadMoreRequired():boolean{
    let appLayout:HTMLElement = <HTMLElement>document.getElementsByClassName('app-layout')[0]
    let bodyHeight:number = document.body.offsetHeight
    if(appLayout.offsetHeight < bodyHeight){
      return true
    }
    return false
  }

  ngOnDestroy() {
    this.destroy$.next()
    this.destroy$.complete()
  }
}
