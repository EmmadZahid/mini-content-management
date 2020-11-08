import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class PicsumService {
    constructor(private http: HttpClient){
    }

    getRandomPicsumImage(){
        return this.http.get('https://picsum.photos/200/200', {responseType: 'blob', observe: 'response'}).pipe(
            map((response:HttpResponse<any>)=>{
                let imageId:string = response.headers.get("picsum-id")
                return {id: imageId, imageUrl: response.url}
            })
        )
    }

    getLargeImageUrl(id:string):Observable<string>{
        return this.getImageInfo(id).pipe(
            map((res:any)=>{
                return res.download_url
            })
        )
    }

    private getImageInfo(id:string){
        return this.http.get(`https://picsum.photos/id/${id}/info`, {responseType: 'json'})
    }
}