import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import {PhoneService} from './phone.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Phone1';
  inputForm : FormGroup;
  list: [];
  count: number;

  constructor(private phoneService: PhoneService){
    this.inputForm = this.createForm();
  }

  ngOnInit(){

  }
  createForm(){
    return new FormGroup(
      {
        number : new FormControl('', [Validators.required, Validators.minLength(7), Validators.maxLength(10), Validators.pattern("^[0-9]*$")])
      }
    );
  }

  get number(){
    return this.inputForm.get('number');
  }

  onSubmit(){
    this.phoneService.getList(this.inputForm.controls.number.value).subscribe(phone => {this.list = phone; this.count = phone.length})
  }
}
