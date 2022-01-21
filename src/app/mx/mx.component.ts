import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MxApis } from '../interfaces/model';
import { MxService } from '../services/MXService/mx.service';

@Component({
  selector: 'app-mx',
  templateUrl: './mx.component.html',
  styleUrls: ['./mx.component.scss'],
  providers: [MxService]

})
export class MxComponent implements OnInit {

  constructor(private mxService:MxService) { }

  Mxlist!:Observable<MxApis[]>;
 
  ngOnInit(): void {
    this.Mxlist = this.mxService.getAll()
    
  }

  displayedColumns: string[] = ['name','uri'];
  dataSource = this.Mxlist;

}
