import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { Observable, of } from '../../node_modules/rxjs';
import { MessageService } from './message.service';
import { AngularFireList, AngularFireDatabase, AngularFireObject, } from '../../node_modules/angularfire2/database';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class HeroService {

  heroList: AngularFireList<Hero> = null;
  hero;
  heroes: Hero[];

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes');
    this.heroList = this.db.list('heroes');
    return this.heroList.snapshotChanges().pipe(
      map(actions => actions.map(k => ({ id: k.payload.key, ...k.payload.val() })))
    )
  }

  getHero(id: string): AngularFireObject<Hero> {
    this.messageService.add(`HeroService: fetched hero id = ${id}`);
    
    return this.db.object('/heroes/'+id);
  }

  constructor(private messageService: MessageService,
    private db: AngularFireDatabase) { }
}
