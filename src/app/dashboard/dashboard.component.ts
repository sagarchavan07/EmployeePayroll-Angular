import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { EmployeeModel } from '../EmployeeModel';
import { ResponseData } from '../response-data';
import { Observable } from 'rxjs';
import { ResponceModel } from '../responce-model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  allEmployees: ResponceModel[] = [];
  employeeCount: number = 0;

  constructor(private router: Router, private service: EmployeeService) { }

  ngOnInit(): void {
    this.getAllEmployees();
  }

  btnClick = () => {
    this.router.navigateByUrl('/form');
  };

  getAllEmployees() {
    this.service.getAllEmployees().subscribe((responce) => {
      console.log("data= ", responce.data);
      this.allEmployees = responce.data;
      this.employeeCount = this.allEmployees.length;
    });
  }

  deleteEmployee(id: number) {
    this.service.deleteEmployeeById(id).subscribe((response) => {
      alert("deleted employee " + response.data);
      this.ngOnInit();
    })
  }

  editEmployee(id: number) {
    this.router.navigate(['update', id]);
  }
}
