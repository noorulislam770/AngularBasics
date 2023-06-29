import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'noor ul islam';
  currentDate = new Date();
  pizza = {
    toppings: ['pepperoni', 'beacon'],
    size: 'large',
  };
  cost = 2000;
  blueClass = false;
  fontSize = 20;
  temperature = 25.3;
  imgUrl = 'https://picsum.photos/id/237/500/500';
  images = [
    'https://picsum.photos/id/237/500/500',
    'https://picsum.photos/id/236/500/500',
    'https://picsum.photos/id/235/500/500',
  ];
  getName() {
    return this.name.toUpperCase();
  }

  changeImage(e: KeyboardEvent) {
    this.imgUrl = (e.target as HTMLInputElement).value;
  }

  logImg(event: string) {
    console.log(event);
  }
}
