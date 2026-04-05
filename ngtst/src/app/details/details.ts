import {Component, inject} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HousingService} from '../housing.service';
import {HousingLocationInfo} from '../housinglocation';

@Component({
  selector: 'app-details',
  imports: [],
  templateUrl: './details.html',
  styleUrl: './details.scss',
})
export class Details {
  route: ActivatedRoute = inject(ActivatedRoute);
    housingService: HousingService = inject(HousingService);
   housingLocationId = -1;
   housingLocation: HousingLocationInfo | undefined;
  
   constructor() {
     this.housingLocationId = Number(this.route.snapshot.params['id']);
     this.housingLocation = this.housingService.getHousingLocationById(this.housingLocationId);
   }
  }