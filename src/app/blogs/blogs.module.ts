import { NgModule } from '@angular/core';

import { BlogsRoutingModule } from './blogs-routing.module';
import { CommonModule } from '@angular/common';
import { BlogService } from './blog.service';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogListItemComponent } from './blog-list/blog-list-item/blog-list-item.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    BlogListComponent,
    BlogListItemComponent,
    BlogDetailComponent 
  ],
  imports: [
    BlogsRoutingModule, 
    CommonModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [BlogService]
})
export class BlogsModule { }
