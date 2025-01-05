import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.page.html',
  styleUrls: ['./completed.page.scss'],

  standalone: false,
})
export class CompletedPage  {

  constructor(
    private router : Router
  ) { }


}
