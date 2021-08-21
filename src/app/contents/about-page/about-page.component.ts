import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css']
})
export class AboutPageComponent implements OnInit {

  constructor() { }

  divs = ["div1", "div2", "div3", "div4"]
  visibleDiv = "div1"
  lastScrollTop: number = 0;

  ngOnInit(): void {
  }

  
}
