import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  task:any = [];

  constructor(private rt:Router, private cs:CrudService){}

  ngOnInit(){
    this.fetchAllUser();
  }

  fetchAllUser(){
    this.cs.getAllTask().subscribe(res  => {
      this.task=res;
    })
  }

  deleteInfo(i:string){
    if(confirm("Do You want to Delete this task?")){
      // console.log("ok")
      this.cs.deleteTask(i).subscribe(res => {
        this.fetchAllUser();
        console.log(res);
      });
    }
  // console.log(i)
  }
}
