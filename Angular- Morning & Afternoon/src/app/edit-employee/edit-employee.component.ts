import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeDBService } from '../employeedatabase.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.scss']
})
export class EditEmployeeComponent implements OnInit {

  name = "";
  id = '';
  age;
  dob;
  indexToBeEdited;

  employeeObj;
  constructor(
    private employeeService : EmployeeDBService,
    private _router : ActivatedRoute,
    private _routerGoBack : Router
  ) {
  }

  ngOnInit(): void {
    this.name = this._router.snapshot.params['name'];
    this.age = this._router.snapshot.params['age'];
    this.id = this._router.snapshot.params['id'];
    this.dob = this._router.snapshot.params['dob'];
    this.indexToBeEdited = this._router.snapshot.params['index'];
  }

  saveItem(){
    var employeeObject = {name : this.name, id : this.id, age : this.age, dob : this.dob};
    this.employeeService.saveEditedEmployee(this.indexToBeEdited, employeeObject);
    this._routerGoBack.navigate(['/route-list']);
  }



}
