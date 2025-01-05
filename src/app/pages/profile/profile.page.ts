import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tab1',
  templateUrl: 'profile.page.html',
  styleUrls: ['profile.page.scss'],
  standalone: false,
})
export class ProfilePage {

  constructor(
    private router : Router
  ) { }

  redirect(page:string){
    this.router.navigate([page])
  }
}
