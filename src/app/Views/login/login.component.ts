import { Component, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Toast, ToastrService } from 'ngx-toastr';
import { FormBuilder, Validators } from '@angular/forms';

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
  loading =false;
  email: string ="";
  password: string= "";
  //Forma de generar el formulario ReactiveFormsModule
  //login: FormGroup;
  //constructor(private fb: FormBuilder,private router:Router,private toastr: ToastrService){
  //  this.login=this.fb.group({
  //    usuario:['',Validators.required],
  //    password:['',Validators.required]
 //   });
 // }

  
  constructor(private route:ActivatedRoute, public userService: UserService, public router: Router, private modalService: NgbModal,  public toastr: ToastrService,) { }
  
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
      this.loading=true;
      setTimeout(() => {
        if(this.email==="eve.holt@reqres.in" && this.password=="123"){
          this.toastr.success("Usted se ha logeado correctamente");
          this.router.navigate(['/home']);
          this.loading=true;
        }
       else   
       { 
        this.toastr.error("Por favor ingresa las credenciales correctas",'Error');
        this.email="";
        this.password="";
       }
          
      },3000);
       
      this.loading=false;
    },
      error => {
        console.log(error);
    });
  }

}
