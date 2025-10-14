import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  path: string = 'assets/images/bennett_blount_senior_photo.jpg';
  alttext: string = 'Ben Crouching Next to a Tree (Not featured his much longer hair now)';
}
