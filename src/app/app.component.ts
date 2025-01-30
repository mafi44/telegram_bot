import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { IndexService } from './index.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private indexservice:IndexService){}
  title = '';
  reply_markup=''
  sendMessage(){
    var data={
      chat_id:269842404,
      text:this.title,
      reply_markup:{
        inline_keyboard:[
          [
          {text:'Red team 🔴',callback_data:'btn'},
          {text:'Blue team 🔵',callback_data:'btn'},
        ]],
        
        keyboard:[
          [
          {text:'menu',callback_data:'btn'},
          {text:'exit',callback_data:'btn'},
          {text:'tools',callback_data:'btn'},
          {text:'backup',callback_data:'btn'},
        ]
        ]
      }
      
    }



    

    return this.indexservice.sendMessage(data).subscribe({
      next:()=>{}
    })

  }








photo=''
caption=''
  sendPhoto(){
    var data={
      chat_id:269842404,
      photo:this.photo,
      caption:this.caption
    }
    return this.indexservice.sendPhoto(data).subscribe({
      next:()=>{}
    })
}








caption_video=''
video='';
  sendVideo(){
    var data={
      chat_id:269842404,
      video:this.video,
      caption:this.caption_video,}


    return this.indexservice.sendVideo(data).subscribe({
      next:()=>{}
    })
}





}
