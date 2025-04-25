import { Component } from '@angular/core';
import { LoadingComponent } from '../../../global/loading/loading.component';
import { SnackBarService } from '../../../../services/global/snack-bar.service';
import { MadersDataService } from '../../../../services/maders-data.service';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-landing',
  imports: [MatTableModule, LoadingComponent, MatIconModule],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class MadersLandingComponent {
  sales: any;
  isLoading: boolean = true;  
  isError: boolean = false;
  errorMessage : string = '';
  displayedColumns: string[] = ['date', 'sales', 'items_sold','actions'];
  snackMessage: string = '';


  constructor(
    private mds: MadersDataService,
    private snackBar: SnackBarService
  ){}

  ngOnInit(){
    this.mds.getSalesData().subscribe({
      next: (data) => {
        this.sales = data;
        this.isLoading = false;
        this.snackMessage = 'dataLoaded';
        this.snackBar.openSBAlert(this.snackMessage);
      },
      error: (error) =>{
        this.isLoading = false;
        this.isError = true;
        this.errorMessage = 'Error loading data';
        console.error('Error loading data:', error);
        this.snackMessage = 'loadError';
        this.snackBar.openSBError(this.snackMessage);
      }
    })
  }

  editSales(sale: any){}
  deleteSales(sale: any){}

}
