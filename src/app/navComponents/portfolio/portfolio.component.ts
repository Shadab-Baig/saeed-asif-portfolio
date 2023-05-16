import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent implements OnInit {
  constructor(private router: Router) {}
  ngOnInit(): void {
  }

  goToGraphics(){
    this.router.navigate(['graphic-designing'])
}
  gotoUi(){
    this.router.navigate(['UI/UX'])
  }
}
