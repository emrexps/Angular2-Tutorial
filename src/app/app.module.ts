import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParcaAmbalajTanimComponent } from './pages/parca-ambalaj-tanim/parca-ambalaj-tanim.component';
import { TofasComponent } from './pages/parca-ambalaj-tanim/tofas/tofas.component';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PoloComponent } from './pages/parca-ambalaj-tanim/polo/polo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ParcaAmbalajTanimComponent,
    TofasComponent,
    PoloComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
