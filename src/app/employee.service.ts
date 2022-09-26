import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class EmployeeService {
    constructor(private http:HttpClient) { }

    insertEmployee(employee: any){
        return this.http.post("http://localhost:8080/employeepayrollapp/create", employee);
    }
}

