import { Component, OnInit } from '@angular/core';
import { faEye } from '@fortawesome/free-solid-svg-icons';
    
 


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  widthImg: any;
  faEye = faEye;
  hide = true;



  constructor() { }

  ngOnInit(): void {
  }

}
