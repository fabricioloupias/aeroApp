import { NgModule } from '@angular/core';
import {MatToolbarModule, MatIconModule, MatPaginatorModule, MatFormFieldModule, MatSelectModule, MatDialogModule, MatButtonModule, MatProgressSpinnerModule, MatSnackBarModule, MatMenuModule} from '@angular/material';


@NgModule({
  imports: [MatToolbarModule, MatIconModule, MatPaginatorModule, MatFormFieldModule, MatSelectModule, MatDialogModule, MatButtonModule, MatProgressSpinnerModule, MatSnackBarModule, MatMenuModule],
  exports: [MatToolbarModule, MatIconModule, MatPaginatorModule, MatFormFieldModule, MatSelectModule, MatDialogModule, MatButtonModule, MatProgressSpinnerModule, MatSnackBarModule, MatMenuModule],
})
export class MaterialModule { }
