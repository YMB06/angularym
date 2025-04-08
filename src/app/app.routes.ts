import {Routes} from '@angular/router';
import { UserComponent } from '@app/user.component';
import { HomeComponent } from '@app/home/home.component';

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