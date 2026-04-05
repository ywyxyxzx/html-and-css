import { Component } from '@angular/core';
import { HousingLocation } from '../housing-location/housing-location';
import { inject } from '@angular/core';
import { HousingService } from '../housingService';
import {HousingLocationInfo} from '../housinglocation';
@Component({
  selector: 'app-home',
  imports: [HousingLocation],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
 housingLocationList: HousingLocationInfo[] = [];
 housingService: HousingService = inject(HousingService);
  constructor() {
   // setTimeout(() => {  
       this.housingLocationList = this.housingService.getAllHousingLocations();
    //   })
   
  }
}
