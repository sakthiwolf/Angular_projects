import { Component } from '@angular/core';
import { CrudService } from '../crud.service';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {

  inputObj = {title:'', description:''}

  constructor(private cs:CrudService, private rt:Router){}

  insertTask(){
    // this.cs.addTask(this.inputObj).subscribe();
    console.log(this.inputObj);
    if(this.inputObj.title!=="" && this.inputObj.description!==""){
      this.cs.addTask(this.inputObj).subscribe();
      alert("New task added 🎉");
      this.rt.navigate(['list']);
    }
    else{
      alert("Enter all values")
    }
    // alert("New task added 🎉");
  }
}
