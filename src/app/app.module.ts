import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material/angular-material/angular-material.module';
import { UnitSelectionComponent } from './unit-selection/unit-selection.component';
import { ConversorComponent } from './conversor/conversor.component';
import { ValueInputComponent } from './conversor/value-input/value-input.component';

@NgModule({
  declarations: [
    AppComponent,
    UnitSelectionComponent,
    ConversorComponent,
    ValueInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
