import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
@Component({
  selector: 'app-base-test',
  imports: [NgOptimizedImage],
  templateUrl: './base-test.html',
  styleUrl: './base-test.scss',
})
export class BaseTest {
  aa = false;
  logoUrl = '../assets/swkl.jpg';
  logoAlt = 'Angular logo';
  constructor() {
    // setTimeout(() => {
    //   this.viewport = true;
    // }, 5000);
   }


}
