import { Component } from '@angular/core';
import { CrudService } from '../crud.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {

 tid:any = this.route.snapshot.paramMap.get('id');
 task!:any;

 constructor(private cs:CrudService, private route:ActivatedRoute, private rt:Router){}

ngOnInit(){
  this.fetchSingleTask(this.tid);
  console.log(this.tid)
}

fetchSingleTask(id:any){
  this.cs.getSingleTask(id).subscribe(res => {
    this.task = res;
    console.log("batman",this.task);
  });
}

  updateTask(id:any,data:any){
    if(this.task.title!=="" && this.task.description!==""){
      this.cs.updateTask(id,data).subscribe();
      alert("Task updated...");
      this.rt.navigate(['list']);
    }
    else{
      alert("Enter all values..");
    }
  }
}
