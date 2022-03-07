import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
//import { Usuario } from '../../../models/usuario';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { LoginService } from '../../../services/login.service';

@Component({
  selector: 'app-login2',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.css']
})
export class Login2Component implements OnInit {
  loading = false;
  login: FormGroup;

  constructor(private fb: FormBuilder,
    private toastr: ToastrService,
    private router: Router,
    private loginService: LoginService
    ) {
      this.login = this.fb.group({
        email: ['', Validators.required],
        password: ['', Validators.required]
      });
     }


  ngOnInit(): void {
  }

  log(): void{
    const usuario: any = {
      email: this.login.value.email,
      password: this.login.value.password
    };
    this.loading = true;
    this.loginService.login(usuario).subscribe(data => {
      console.log(data);

      this.loading = false;

      setTimeout(() => {
      this.toastr.success("Usted se ha logeado correctamente");
      this.loginService.setLocalStorage(data.token);
      this.router.navigate(['/carrusel']);
      },1500);
    }, error => {
      console.log(error);

      this.toastr.error(error.error.message, 'Error');
      this.login.reset();
      this.loading = false;
    } );

  }
}
