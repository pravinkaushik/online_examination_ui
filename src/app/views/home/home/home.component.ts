import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  name:string;
  video: any = {id: 'S-lKVSkfCZQ'};
  url: any;
  baseUrl:string = 'https://www.youtube.com/embed/';
  constructor(private sanitizer: DomSanitizer,
    public translate: TranslateService) { 
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.baseUrl + this.video.id);    
  }

  ngOnInit(): void {
  }
  donateNow(){
    window.open("https://donorbox.org/easy-online-exam-support", "_blank");
}
}
