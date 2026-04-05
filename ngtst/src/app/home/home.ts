import { Component } from '@angular/core';
import { HousingLocation } from '../housing-location/housing-location';
import { inject } from '@angular/core';
import { HousingService } from '../housing.service';
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
 filteredLocationList: HousingLocationInfo[] = [];
 constructor() {
     this.housingService
      .getAllHousingLocations()
      .then((housingLocationList: HousingLocationInfo[]) => {
        this.housingLocationList = housingLocationList;
        this.filteredLocationList = housingLocationList;  
      });
    this.filteredLocationList = this.housingLocationList;
  }

  filterResults(text: string) {
    if (!text) {
      this.filteredLocationList = this.housingLocationList;
      return;
    }
    this.filteredLocationList = this.housingLocationList.filter((housingLocation) =>
      housingLocation?.city.toLowerCase().includes(text.toLowerCase()),
    );
  }
}
