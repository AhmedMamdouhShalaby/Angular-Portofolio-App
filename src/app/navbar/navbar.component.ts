import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  isScrolled = false;

  @HostListener('window:scroll', [])
  handleScroll() {
    this.isScrolled = (window.scrollY > 0);
  }
}
