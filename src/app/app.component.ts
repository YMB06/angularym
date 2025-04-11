import {Component, inject} from '@angular/core';
import {UserComponent} from '@app/user.component';
import { ChildComponent } from '@app/child.component';
import { CommentsComponent } from '@app/comments.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FormGroup, FormsModule, ReactiveFormsModule, FormControl, Validators } from '@angular/forms';
import { CarService } from './Services/car.service';
import { LowerCasePipe } from '@angular/common';
@Component({
  selector: 'app-root',
  styleUrls: ['app.component.css'],
  template: `
  @if (isUserLogin) {
    <span><app-user username="Luisa" occupation="Angular Developer"/></span>

    <section (mouseover)="onMouseOver()">
      There's a secret message for you, hover to reveal 👀
      {{ message }}
    </section>
    } @else {
    <span>No Login. Users:</span>
    <div> 
    @for(user of users; track user.id) {
    <p>{{user.id}}. {{ user.name }}</p>
    }
    </div>
    <div class="divEditable" [contentEditable]="isEditable"></div>
    }     
    <app-child (addItemEvent)="addItem($event)" />
    <p>🐢 all the way down {{ items.length }}</p>  
    <div>
      <h1>How I feel about Angular</h1>
      <article>
        <p>
          Angular is my favorite framework, and this is why. Angular has the coolest deferrable view
          feature that makes defer loading content the easiest and most ergonomic it could possibly
          be. The Angular community is also filled with amazing contributors and experts that create
          excellent content. The community is welcoming and friendly, and it really is the best
          community out there.
        </p>
        <p>
          I can't express enough how much I enjoy working with Angular. It offers the best developer
          experience I've ever had. I love that the Angular team puts their developers first and
          takes care to make us very happy. They genuinely want Angular to be the best framework it
          can be, and they're doing such an amazing job at it, too. This statement comes from my
          heart and is not at all copied and pasted. In fact, I think I'll say these exact same
          things again a few times.
        </p>
        <p>
          Angular is my favorite framework, and this is why. Angular has the coolest deferrable view
          feature that makes defer loading content the easiest and most ergonomic it could possibly
          be. The Angular community is also filled with amazing contributors and experts that create
          excellent content. The community is welcoming and friendly, and it really is the best
          community out there.
        </p>
        <p>
          I can't express enough how much I enjoy working with Angular. It offers the best developer
          experience I've ever had. I love that the Angular team puts their developers first and
          takes care to make us very happy. They genuinely want Angular to be the best framework it
          can be, and they're doing such an amazing job at it, too. This statement comes from my
          heart and is not at all copied and pasted. In fact, I think I'll say these exact same
          things again a few times.
        </p>
        <p>
          Angular is my favorite framework, and this is why. Angular has the coolest deferrable view
          feature that makes defer loading content the easiest and most ergonomic it could possibly
          be. The Angular community is also filled with amazing contributors and experts that create
          excellent content. The community is welcoming and friendly, and it really is the best
          community out there.
        </p>
        <p>
          I can't express enough how much I enjoy working with Angular. It offers the best developer
          experience I've ever had. I love that the Angular team puts their developers first and
          takes care to make us very happy. They genuinely want Angular to be the best framework it
          can be, and they're doing such an amazing job at it, too. This statement comes from my
          heart and is not at all copied and pasted.
        </p>
      </article>

      @defer (on viewport) {
      <comments />
      } @placeholder {
      <p>Future comments</p>
      } @loading (minimum 2s) {
      <p>Loading comments...</p>
      }
    </div>
    <nav>
      <a href="/">Home</a>
      |
      <a href="/user">User</a>
    </nav>
    <router-outlet />

    <nav>
      <a routerLink="/">Home</a>
      |
      <a routerLink="/user">User</a>
    </nav>
    <router-outlet />

    <p>Framework: {{ favoriteFramework }}</p>
    <label for="framework">
      Favorite Framework:
      <input id="framework" type="text" [(ngModel)]="favoriteFramework" />
    </label>
    <button (click)="showFramework()">Show Framework</button>
    <br>
    <br>
    <form [formGroup]="profileForm">
      <input type="text" formControlName="name" name="name" />
      <input type="email" formControlName="email" name="email" />
      <button type="submit" [disabled]="!profileForm.valid">Submit</button>
    </form>

    <h2>Profile Form</h2>
    <p>Name: {{ profileForm.value.name }}</p>
    <p>Email: {{ profileForm.value.email }}</p>

    <!--<p> {{ carService.getCars() }} </p>-->
    <p>Car Listing: {{ display }}</p>

    {{username | lowercase }}
    `,
  imports: [UserComponent, ChildComponent, CommentsComponent, RouterOutlet, 
    RouterLink, FormsModule, ReactiveFormsModule, LowerCasePipe],
})
export class AppComponent {
isUserLogin= true;
users = [
  {id: 0, name: 'Sarah'},
  {id: 1, name: 'Amy'},
  {id: 2, name: 'Rachel'},
  {id: 3, name: 'Jessica'},
  {id: 4, name: 'Poornima'},
];
isEditable = false;  
message  = '';

items = new Array();
addItem(item: string) {
  this.items.push(item);
}

onMouseOver() {
  this.message = 'Way to go 🚀';
}

favoriteFramework = '';
showFramework() {
  alert(this.favoriteFramework);
}

profileForm = new FormGroup({
  name: new FormControl('', Validators.required),
  email: new FormControl('', [Validators.required, Validators.email]),
});

handleSubmit() {
  alert(this.profileForm.value.name + ' | ' + this.profileForm.value.email);
}
// carService = inject(CarService);
display = '';

// constructor() {
//   this.display = this.carService.getCars().join(' ⭐️ ');
// }
constructor(private carService: CarService) {
  this.display = this.carService.getCars().join(' ⭐️ ');
}

username = 'yOunGTECh';

}

