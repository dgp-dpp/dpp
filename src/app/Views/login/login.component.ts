import { Component, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

// @Component({
//   selector: 'app-register',
//   template:`<div class="modal-header">
//   <h4 class="modal-title">Hi there!</h4>
//   <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
//     <span aria-hidden="true">&times;</span>
//   </button>
// </div>
// <div class="modal-body">
// <div class="register">
// <form class="form-control.login-user" method="post">
//   <h1>Registrar</h1>
//   <div class="form-group">
//   <input
//     type="email"
//     [id]="email_register"
//     name="email"
//     placeholder="Email"
//     required="required"
//   />
// </div>
// <br>
// <div class="form-group">
//   <input
//     type="password"
//     (id)="password_register"
//     name="password"
//     placeholder="Password"
//     required="required"
//   /> 
// </div>
// <br>
//   <!-- <input
//     type="password"
//     [(ngModel)]="confirmPassword"
//     name="password"
//     placeholder="Repeat the password"
//     required="required"
//   /> -->
//   <button type="submit" (click)="register()">Registrar</button>
// </form>
// </div>
// </div>
// <div class="modal-footer">
//   <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Close</button>
// </div>
// `,
// styleUrls: ["./login.component.css"]  
// })
// export class RegisterContent { 
//   email_register: string ="";
//   password_register: string= "";
//   cconfirmPassword:string="";
//   passwordError: boolean = true;
  

//   constructor(public activeModal: NgbActiveModal, public userService: UserService, private route:ActivatedRoute ) {}
//   register() {
//     const user = { email: this.email_register, password: this.password_register };
//     this.userService.register(user).subscribe(data => {
//       console.log(data);
//       this.userService.setToken(data.token);
//     });
//   }
// }




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string ="";
  password: string= "";
  
  constructor(private route:ActivatedRoute, public userService: UserService, public router: Router, private modalService: NgbModal ) { }
  
  // open() {
  //   const modalRef = this.modalService.open(RegisterContent);
  //   modalRef.componentInstance.name = 'World';
  // }


  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap=>{
      console.log(paramMap);
    }

    )

  }

  login() {
    console.log(this.email);
    console.log(this.password);
    const usuario = {email: this.email, password: this.password};
    this.userService.login(usuario).subscribe( data => {
      console.log(data);
      this.userService.setToken(data.token);
      this.router.navigate(['/home']);
    },
      error => {
        console.log(error);
    });
  }

}
