import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { BlogCreateRoutingModule } from './blog-create-routing.module';
import { BlogCreateMainComponent } from './blog-create-main/blog-create-main.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { SharedModule } from 'src/app/shared/shared.module';
import { BlogImageGalleryComponent } from './blog-image-gallery/blog-image-gallery.component';
import { BlogImageItemComponent } from './blog-image-gallery/blog-image-item/blog-image-item.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    BlogCreateMainComponent,
    BlogImageGalleryComponent,
    BlogImageItemComponent
  ],
  imports: [
    BlogCreateRoutingModule, 
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    SharedModule,
    HttpClientModule
  ],
  providers: []
})
export class BlogCreateModule { }
