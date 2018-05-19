import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dreams',
  templateUrl: './dreams.component.html',
  styleUrls: ['./dreams.component.css']
})
export class DreamsComponent implements OnInit {
@Input() dreams;
  constructor(private router: Router) { }

  ngOnInit() {
  }
  InvestmentDetails(dream){
this.router.navigate(['/dream', dream.id]);

  }
  NavigateToWithdraw(dream){
this.router.navigate(['/cash-out-dream', dream.id]);

  }
}
