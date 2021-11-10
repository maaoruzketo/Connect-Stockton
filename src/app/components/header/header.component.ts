import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbCollapse } from '@ng-bootstrap/ng-bootstrap';
//import '@fortawesome/fontawesome-free/js/all.js';
//import 

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  public isMenuCollapsed = true;
  btnClicked: boolean = true;

  ngOnInit(): void {
  }

  goHome(){
    this.router.navigate(['home']);
  }
  getConnected() {
    this.router.navigate(['signup']);
  }

}
