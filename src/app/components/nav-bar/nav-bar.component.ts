import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  activeId = 1;
  // rootElement;

  constructor() { }

  ngOnInit(): void {
    var scrollToTopBtn = document.getElementById("scroll-to-top");
    scrollToTopBtn.addEventListener("click", this.scrollToTop);
  }

  scrollToTop() {
    // console.log("clicked");
    // Scroll to top logic
    var rootElement = document.documentElement;
    rootElement.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

}
