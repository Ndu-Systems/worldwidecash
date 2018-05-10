import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dreams',
  templateUrl: './dreams.component.html',
  styleUrls: ['./dreams.component.css']
})
export class DreamsComponent implements OnInit {
@Input() dreams;
  constructor() { }

  ngOnInit() {
  }

}
