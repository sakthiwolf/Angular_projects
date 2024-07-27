import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  endpoint="http://localhost:3000/task/";

  constructor(private hc:HttpClient) { }

  addTask(data:any){
    return this.hc.post(this.endpoint,data);
  }

  getAllTask(){
    return this.hc.get(this.endpoint);
  }
  
  getSingleTask(id:any){
    return this.hc.get(this.endpoint+id);
  }

  deleteTask(id:any){
    return this.hc.delete(this.endpoint+id);
  }

  updateTask(id:any,data:any){
    return this.hc.put(this.endpoint+id,data);
  }
}
