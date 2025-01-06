import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.page.html',
  standalone: false,
})
export class CompletedPage  {

  constructor(
    private router : Router
  ) { }


}
