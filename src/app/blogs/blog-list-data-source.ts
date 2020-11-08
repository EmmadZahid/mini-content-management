import { Observable, of } from 'rxjs'
import { tap } from 'rxjs/operators'
import { Blog } from './models/blog'

export class BlogListDataSource{
    blogsList:Blog[] = []
    pageSize:number = 2
    pageNum:number = 0
    private _isLoading:boolean = false
    constructor(){
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

    get isLoading():boolean{
        return this._isLoading
    }

    getBlogsPage():Observable<Blog[] | boolean>{
        if(this.blogsList.length < this.pageNum * this.pageSize){
            return of(false)
        }
        return this.loadBlogs()
    }

    private loadBlogs():Observable<Blog[]>{
        this._isLoading = true
        let blogs:Blog[] = this._getPage()
        this.pageNum++
        return of(blogs).pipe(tap(()=> this._isLoading = false))
    }

    private _getPage(){
        return this.blogsList.slice(this.pageNum * this.pageSize , (this.pageNum + 1) * this.pageSize)
    }
}