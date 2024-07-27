import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'treams';
  aside: any;

  side(){
    this.aside = document.querySelector('#aside');
    this.aside.classList.toggle("show");
  }
}
