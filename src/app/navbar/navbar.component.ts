import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  scrolling:boolean = false;
  ngOnInit(): void {
    window.addEventListener("scroll", () => {
      if(window.scrollY > 30) {
        this.scrolling = true;
      }else {
        this.scrolling = false;
      }
    })
  }
}
