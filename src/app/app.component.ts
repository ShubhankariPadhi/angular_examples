import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-ang8-app';

 firstvar = ' subhankari';
 lastname = 'padhi';
 number1 = 10;
 number2 = 20;
 fullname = ' two way binding';
 imgUrl = 'https://angular.io/assets/images/logos/angular/angular.svg';
  addTwonumbers($event) {
   console.log( 'we got addTwonumbers op' );
  // alert('ghjgjhg');
 }
  onSave($event) {
    console.log('Save button is clicked!', $event);
  }
  onDivClick() {
    console.log('DIV is clicked!');
  }
}
