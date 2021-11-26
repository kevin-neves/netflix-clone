import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  data = this.router.getCurrentNavigation()?.extras.state

  constructor(private router: Router) { 

  }

  ngOnInit(): void {
  }

  navigateMeTo(id: number) {
    this.router.navigate(['movies', id])
  }
}
