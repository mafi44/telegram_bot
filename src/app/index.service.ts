import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IndexService {

  constructor(private http:HttpClient) { }

  sendMessage(data:any){
    //tel-api work both(post/get)
    return this.http.post('https://api.telegram.org/bot8075369590:AAFnq75EXchvUChCw64EgIAi9AYfBqv-DXA/sendMessage',data);

  }
  sendPhoto(data:any){
    return this.http.post('https://api.telegram.org/bot8075369590:AAFnq75EXchvUChCw64EgIAi9AYfBqv-DXA/sendPhoto',data);

  }

  sendVideo(data:any){
    return this.http.post('https://api.telegram.org/bot8075369590:AAFnq75EXchvUChCw64EgIAi9AYfBqv-DXA/sendVideo',data);

  }

}
