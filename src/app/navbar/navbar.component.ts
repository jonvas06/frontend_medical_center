import { Component, ViewChild, AfterViewInit, Renderer2, ElementRef } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements AfterViewInit {

  @ViewChild('menuToggle', { static: false }) menuToggle!: ElementRef;
  @ViewChild('navbarLinks', { static: false }) navbarLinks!: ElementRef;

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit() {
    // Verificamos que los elementos existen antes de agregar el listener
    if (this.menuToggle && this.navbarLinks) {
      this.renderer.listen(this.menuToggle.nativeElement, 'click', () => {
        this.navbarLinks.nativeElement.classList.toggle('active');
      });
    }
  }
}
