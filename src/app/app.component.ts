import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DxApis } from './interfaces/model';
import { DxService } from './services/DXService/dx.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
}) 
export class AppComponent{

  title = 'Autocare';

}
