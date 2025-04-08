import {Routes} from '@angular/router';
import { UserComponent } from './user.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
      path: '',
      title: 'App Home Page',
      component: HomeComponent,
    },
    {
      path: 'user',
      title: 'App User Page',
      component: UserComponent,
    },];