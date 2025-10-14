import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Typewriter } from './components/typewriter';
import { Navbar } from './components/navbar/navbar';
import { About } from './components/about/about';
import { Coursework } from './components/coursework/coursework';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'typewriter', component: Typewriter },
  { path: 'about', component: About },
  { path: 'coursework', component: Coursework },
];
