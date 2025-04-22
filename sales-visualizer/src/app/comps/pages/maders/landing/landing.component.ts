import { Component } from '@angular/core';
import { KitchenDataService } from '../../../../services/kitchen-data.service';

@Component({
  selector: 'app-landing',
  imports: [],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class MadersLandingComponent {
  sales: any;
  isLoading: boolean = true;
  
  isError: boolean = false;

  
  constructor(
    private kds: KitchenDataService,
  ){}

  ngOnInit(){
    this.kds.getSalesData().subscribe({
      next: (data) => {
        this.sales = data;
        this.isLoading = false;
      },
      error: (error) =>{
        this.isLoading = false;
        this.isError = true;
      }
    })
  }

}
