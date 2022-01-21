import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DxApis } from '../interfaces/model';
import { DxService } from '../services/DXService/dx.service';

@Component({
  selector: 'app-dx',
  templateUrl: './dx.component.html',
  styleUrls: ['./dx.component.scss'],
  providers: [DxService]
})
export class DxComponent implements OnInit {

  constructor(private dxService:DxService){}

  DxList!:Observable<DxApis[]>
  ngOnInit(): void {
    this.DxList = this.dxService.getAll()
    
  }
  displayedColumns: string[] = ['name','used','capacity','loaded_models'];
  dataSource = this.DxList

}
