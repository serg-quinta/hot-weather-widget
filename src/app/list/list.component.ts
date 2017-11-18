import { Component, OnInit } from '@angular/core';

import { places$ } from '../data';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public places$: Observable<Place[]>;
  public loadImg = '../assets/images/gears.gif';

  constructor() { }

  public ngOnInit(): void {
    // places$.subscribe((places: Place[]) => {
    //   console.log(places);
    //   this.places = places;
    // });
    this.places$ = places$;
  }

}
