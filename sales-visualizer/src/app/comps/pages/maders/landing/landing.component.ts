import { Component } from '@angular/core';
import { KitchenDataService } from '../../../../services/kitchen-data.service';
import {MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-landing',
  imports: [MatTableModule],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class MadersLandingComponent {
  sales: any;
  isLoading: boolean = true;  
  isError: boolean = false;
  displayedColumns: string[] = ['date', 'sales', 'items_sold'];


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
