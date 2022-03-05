import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl} from "@angular/forms";

@Component({
  selector: 'app-sing-up-component',
  templateUrl: './sing-up-component.component.html',
  styleUrls: ['./sing-up-component.component.scss']
})
export class SingUpComponentComponent implements OnInit {

  public registerForm: any;
  public hidden: boolean = true;

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      login: new FormControl(),
      password: new FormControl(),
    });
  }

  public onSubmit(): void {
    if(this.hidden){
      this.hidden = !this.hidden;
    }
    else{
      const login = this.login();
      const pass = this.password()
      debugger;
    }
  }

  private login() {
    return this.registerForm.value.login;
  }

  private password() {
    return this.registerForm.value.password;
  }

}
