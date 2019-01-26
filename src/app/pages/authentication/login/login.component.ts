import { Component, OnInit } from '@angular/core';
import { trigger, state, style, AUTO_STYLE, transition, animate} from '@angular/animations';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { username, api_key } from '../../../models/constants';
import { AuthenticationService } from '../../../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [
    trigger('cardToggle', [
      state('collapsed, void',
        style({
          overflow: 'hidden',
          height: '0px',
        })
      ),
      state('expanded',
        style({
          height: AUTO_STYLE,
        })
      ),
      transition('collapsed <=> expanded', [
        animate('500ms ease-in-out')
      ])
    ]),
    trigger('cardToggleInverse', [
      state('collapsed, void',
        style({
          overflow: 'hidden',
          height: '0px',
        })
      ),
      state('expanded',
        style({
          height: AUTO_STYLE,
        })
      ),
      transition('collapsed <=> expanded', [
        animate('50ms ease-in-out')
      ])
    ])
  ]
})
export class LoginComponent implements OnInit {
  public menuType: string;
  public headerType: string;
  public sidebarType: string;
  public themeType: string;
  public toggledArrow: string;
  public windowHeight: number;
  public windowWidth: number;
  public settingToggle: string;
  public cardToggle = 'collapsed';
  public successMsg:string;
  public errorMsg:string;

  showLoading:boolean=false;
   // Sign In Form
  signInForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private authService:AuthenticationService, private router:Router) {
    this.themeType = 'default';
    this.toggledArrow = 'icon-arrow-left-circle';
    this.settingToggle = 'off';
    this.windowHeight = window.innerHeight - 60;
    this.windowWidth = window.innerWidth;
    if (this.windowWidth < 1170) {
      this.menuType = 'mini-sidebar';
    }
    if (this.windowWidth < 768) {
      this.toggledArrow = 'fa fa-bars';
    }
   }

  ngOnInit() {
    this.formValidation()
  }

  onResize(event) {
    this.windowHeight = event.target.innerHeight - 60;
    this.windowWidth = window.innerWidth;
    if (this.windowWidth < 1170) {
      this.menuType = 'mini-sidebar';
    } else {
      this.menuType = '';
    }

    if (this.windowWidth < 768) {
      this.toggledArrow = this.menuType === 'mini-sidebar show-sidebar' ? 'fa fa-close' : 'fa fa-bars';
    } else {
      this.toggledArrow = this.menuType === 'mini-sidebar' ? 'fa fa-bars' : 'icon-arrow-left-circle';
    }
  }
  toggleCard() {
    this.cardToggle = this.cardToggle === 'collapsed' ? 'expanded' : 'collapsed';
  }
  formValidation() {
    this.signInForm = this.formBuilder.group({
      username: username,
      api_key: api_key, 
      action:"UserLogin",           
      clerk_username: ['', Validators.compose([Validators.minLength(10), Validators.required])],
      clerk_password: ['']
    });
  }

  doLogin(){
    this.showLoading = true
    console.log('login action' +this.signInForm.get('clerk_username').value +this.signInForm.get('clerk_password').value)
    this.authService.authUser(this.signInForm.value).subscribe(res =>{
      this.showLoading = false;
      let response = res.response_code;
      
      if(response ==0){        
        this.successMsg = res.response_message;
        this.router.navigate(['/dashboard/analytical'])
        console.log(res)
        console.log('username'+res.company_name)
        console.log('Api_key' +res.api_key)
        this.authService.setUserDetails(res.company_apis_url, res.api_key,res.username)
      }else{
        this.errorMsg = res.response_message
        
      }
    }, error =>{
      this.showLoading= false
      console.log('An error has Occured'+error)
    })
  }

}
