import { Component } from '@angular/core';
import { 
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  FormBuilder
} from '@angular/forms';
import { EmpapiService } from '../shared/empapi.service';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {
  employeeForm !: FormGroup

  constructor(
    private builder: FormBuilder,
    private empapi: EmpapiService
  ) {}

  ngOnInit() {
    this.employeeForm = this.builder.group({
      name: new FormControl(''),
      city: new FormControl(''),
      salary: new FormControl(''),
    })
  }

  saveEmployee(){
    // console.log(this.employeeForm.value)
    this.empapi.addEmployee(this.employeeForm.value).subscribe({
      next: (data) => {
        console.log(data)
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

}
