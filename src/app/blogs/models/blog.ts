export class Blog{
    id:string = ''
    title:string = ''
    content:string = ''
    imageUrl:string = ''
    imageId:string = ''
    constructor(item?:any){
        if(!item)
            return
        this.id = item['id']
        this.title = item['title']
        this.content = item['content']
        this.imageUrl = item['imageUrl']
        this.imageId = item['imageId']
    }
}