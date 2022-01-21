import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { AxComponent } from './ax/ax.component';
import { DxComponent } from './dx/dx.component';
import { MxComponent } from './mx/mx.component';
import { AutocareComponent } from './autocare/autocare.component'
import { Routes, RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms';

const routes:Routes = [
  {path :'dx' ,component:DxComponent},
  {path :'mx' ,component:MxComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    AxComponent,
    DxComponent,
    MxComponent,
    AutocareComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatTableModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
