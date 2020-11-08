import { Component, EventEmitter, Input, OnInit, Output, QueryList, ViewChildren } from '@angular/core';
import { BlogImageItemComponent } from './blog-image-item/blog-image-item.component';

@Component({
  selector: 'app-blog-image-gallery',
  templateUrl: './blog-image-gallery.component.html',
  styleUrls: ['./blog-image-gallery.component.scss']
})
export class BlogImageGalleryComponent implements OnInit {
  @Output() onSelection:EventEmitter<{id:string, url:string}> = new EventEmitter<{id:string, url:string}>()
  @ViewChildren('imageItems') imageItems:QueryList<BlogImageItemComponent>
  selectedId:string = ""
  constructor() { }

  ngOnInit(): void {
  }

  refresh(){
    this.selectedId = ""
    for(let item of this.imageItems){
      item.refresh()
    }
  }

  onImageSelected(data:any){
    this.selectedId = data["id"]
    this.onSelection.emit(data)
  }
}
