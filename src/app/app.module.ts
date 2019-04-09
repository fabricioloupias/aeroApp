import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule }    from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

//material
import { MaterialModule } from './ui/material/material.module'

//components
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';
import { NavTopComponent } from './nav-top/nav-top.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogPointsComponent } from './nav-top/dialog-points/dialog-points.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    HomeComponent,
    NavTopComponent,
    DialogPointsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    DialogPointsComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }