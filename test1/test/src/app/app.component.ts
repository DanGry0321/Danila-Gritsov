import { Component } from '@angular/core';
import {
    OnInit,
    OnChanges,
    OnDestroy,
    AfterContentChecked,
    AfterViewChecked,
    AfterContentInit,
    AfterViewInit,
    DoCheck
  } 
    from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements 
  OnInit,
  OnChanges,
  OnDestroy,
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  DoCheck
 {
  ngOnInit(){
    console.log("OnInit")
  }
  ngOnChanges(){
    console.log("OnChanges")
  }
  ngOnDestroy()
  {console.log("OnDestroy")
}
  ngAfterContentChecked(){
    console.log("AfterContentChecked")
  }
  ngAfterContentInit(){
    console.log("AfterContentInit")
  }
  ngAfterViewChecked(){
    console.log("AfterViewChecked")
  }
  ngAfterViewInit(){
    console.log("AfterViewInit")
  }
  ngDoCheck(){
    console.log("DoCheck")
  }
}
