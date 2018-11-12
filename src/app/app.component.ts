import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular 7 with Material R & D ';

  constructor(private router:Router )
  {

  }

  onHome(){
    this.router.navigate(['/home']);
};

onAboutUs(){
  this.router.navigate(['/about']);
};
onServices(){
  this.router.navigate(['/service']);
};
onRegister(){
  this.router.navigate(['/register']);
};



}
