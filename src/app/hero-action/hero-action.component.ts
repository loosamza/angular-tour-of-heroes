import { Component, OnInit } from '@angular/core';
import { NgForm } from '../../../node_modules/@angular/forms';
import { AngularFireDatabase } from '../../../node_modules/angularfire2/database';

@Component({
  selector: 'app-hero-action',
  templateUrl: './hero-action.component.html',
  styleUrls: ['./hero-action.component.css']
})
export class HeroActionComponent implements OnInit {



  constructor(private db: AngularFireDatabase) { }

  ngOnInit() {
  }

  addHero(data: NgForm) {
    console.log(data.value);
    this.db.list("/heroes").push(data.value);
  }

}
