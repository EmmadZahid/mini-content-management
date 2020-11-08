import { Observable, of } from 'rxjs';
import { Blog } from './models/blog'
import { debounce, map } from 'rxjs/operators';
import { interval } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class BlogService {
    private blogsList:Blog[] = []

    constructor(private http: HttpClient){
        let blogs:string = localStorage.getItem('blogs')
        if(blogs){
            try{
                this.blogsList = JSON.parse(blogs)
            } catch(e){
                console.error("Parsing blogs list failed")
                this.blogsList = []
            }
        }
    }

    createBlog(blog:Blog){
        let id:string = btoa(Math.random().toString()).substring(0, 12);
        blog.id = id
        this.blogsList.unshift(blog)
        localStorage.setItem('blogs', JSON.stringify(this.blogsList))

        return of({id: id, msg:"New blog created"})
    }

    getRandomImageForBlog(){
        return this.http.get('https://picsum.photos/200/200', {responseType: 'blob', observe: 'response'}).pipe(
            map((response:HttpResponse<any>)=>{
                let imageId:string = response.headers.get("picsum-id")
                return {id: imageId, imageUrl: response.url}
            })
        )
    }

    getBlogById(blogId:string):Observable<Blog>{
        return of(this.blogsList.find(item => item.id == blogId))
    }
}