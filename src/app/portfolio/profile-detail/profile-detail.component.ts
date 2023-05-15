import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-profile-detail',
  templateUrl: './profile-detail.component.html',
  styleUrls: ['./profile-detail.component.scss']
})
export class ProfileDetailComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const scrollContainer = document.querySelector('.user-profile-detail');
        if (scrollContainer) {
          scrollContainer.scrollTop = 0; // Scroll the container to the top
        }
      }
    });
  }
  
}
