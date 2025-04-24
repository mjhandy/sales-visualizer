import { Component } from '@angular/core';


import { LoadingComponent } from '../../../global/loading/loading.component';

import { SnackBarService } from '../../../../services/global/snack-bar.service';
import { MadersDataService } from '../../../../services/maders-data.service';
import {MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-landing',
  imports: [MatTableModule, LoadingComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class MadersLandingComponent {
  sales: any;
  isLoading: boolean = true;  
  isError: boolean = false;
  errorMessage = "error";
  displayedColumns: string[] = ['date', 'sales', 'items_sold','actions'];


  constructor(
    private mds: MadersDataService,
  ){}

  ngOnInit(){
    this.mds.getSalesData().subscribe({
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

  editSales(sale: any){}
  deleteSales(sale: any){}

}
