import { Component,Input,EventEmitter, Output ,
  OnInit,OnChanges,DoCheck,AfterContentChecked,
  AfterContentInit,AfterViewChecked,AfterViewInit,
  OnDestroy
  } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnDestroy,OnInit,OnChanges,DoCheck,AfterContentChecked,AfterContentInit,AfterViewChecked,AfterViewInit{

  constructor() {
    console.log('constructor called')
  }

  @Input('img') postImg = '';
  @Output()imgSelected = new EventEmitter<string>();

  ngOnInit(){
    console.log('ngoninit() called',this.postImg)
  }

  ngOnChanges(){
    console.log("on changes called")
  }
  ngDoCheck(){
    console.log("docheck() called")
  }
  ngAfterContentChecked(){
    console.log("after content checked")
  }
  ngAfterContentInit(){
    console.log("after content init")
  }
  ngAfterViewChecked(){
    console.log("after view checked")
  }
  ngAfterViewInit(){
    console.log("after view init")
  }
  ngOnDestroy(): void {
    console.log('ngondestroy() called')
  }
}
