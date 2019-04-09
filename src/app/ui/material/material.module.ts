import { NgModule } from '@angular/core';
import {MatToolbarModule, MatIconModule, MatPaginatorModule, MatFormFieldModule, MatSelectModule, MatDialogModule, MatButtonModule} from '@angular/material';


@NgModule({
  imports: [MatToolbarModule, MatIconModule, MatPaginatorModule, MatFormFieldModule, MatSelectModule, MatDialogModule, MatButtonModule],
  exports: [MatToolbarModule, MatIconModule, MatPaginatorModule, MatFormFieldModule, MatSelectModule, MatDialogModule, MatButtonModule],
})
export class MaterialModule { }
