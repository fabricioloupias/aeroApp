import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule }    from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

//material
import { MaterialModule } from './ui/material/material.module'
import { NgxPaginationModule } from 'ngx-pagination';

//components
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';
import { NavTopComponent } from './nav-top/nav-top.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogPointsComponent } from './nav-top/dialog-points/dialog-points.component';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { MAT_SNACK_BAR_DEFAULT_OPTIONS, MAT_DIALOG_DATA, MatDialogRef, MatSnackBarRef, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    HomeComponent,
    NavTopComponent,
    DialogPointsComponent,
    SnackbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  entryComponents: [
    DialogPointsComponent,
    SnackbarComponent
  ],
  providers: [
    { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: true} },
    { provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {} },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
