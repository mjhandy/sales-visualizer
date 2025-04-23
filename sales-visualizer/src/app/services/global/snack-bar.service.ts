import { inject, Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackBarService {
  message: string = '';  
  private snackBar = inject(MatSnackBar);
  constructor(
  ) { }

  openSBAlert(message: string) {
    this.message = message;
    this.snackBar.open(this.message, '', {
      duration: 1500,
      panelClass: ['snack-alert']
    });
  }

  openSBError(message: string){
    this.message = message;
    this.snackBar.open(this.message, '', {
      duration: 1500,
      panelClass: ['snack-error']
    });
  }
}
