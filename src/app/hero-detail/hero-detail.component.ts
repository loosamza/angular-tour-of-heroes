import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Hero } from '../hero';
import { ActivatedRoute } from '../../../node_modules/@angular/router';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  @Input() hero: Hero;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getHero();
  }

  getHero(): void {

    const id = this.route.snapshot.paramMap.get('id');

    this.heroService.getHero(id).snapshotChanges().subscribe(action =>
      this.hero = { id: action.key, name: action.payload.val().name }
    );
  }

  goBack(): void {
    this.location.back();
  }

}
