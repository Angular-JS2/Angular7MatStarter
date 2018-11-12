import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource, MatTable, MatPaginator} from '@angular/material';
import { UserdataService } from '../userdata.service';


@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
 
  dataSource = new MatTableDataSource();
  @ViewChild(MatTable) table: MatTable<any>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns: string[] = [ 'userID', 'firstName', 'lastName', 'email','mobile','address','remove'];
  
  constructor(private userService: UserdataService) { }
  ngOnInit(): void {
    this.onGetAll();
    this.dataSource.paginator = this.paginator;
  }
 
onGetAll()
{
  console.log("dileep");
  this.userService.getUser().subscribe(data =>  this.dataSource.data =data ,
          err => console.error(err),
          () => console.log('done loading foods')
          )
}

removeAll() {
  this.dataSource.data.length = 0;
  this.table.renderRows();
}

removeAt(index: number) {
  this.dataSource.data.splice(index, 1);
  this.table.renderRows();
}

reset() {
  this.dataSource.data.slice();
  this.table.renderRows();
}
}
 
