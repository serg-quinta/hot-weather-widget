import { Observable } from 'rxjs/Observable';
import { delay } from 'rxjs/operators';
import 'rxjs/add/observable/of';
// import 'rxjs/add/operator/delay';

const places: Place[] = [
  {
    'img': 'string',
    'address': 'string',
    'phone': 123,
    'weather': {
      'title': 'string',
      'icon': 'string',
      'water': 20,
      'temperature': 14
    },
    'social_info': {
      'title': 'string',
      'img': 'string',
      'followers': 10,
      'following': 15
    },
    'type': 'hotel'
  },
  {
    'img': 'string',
    'address': 'string',
    'phone': 123,
    'weather': {
      'title': 'string',
      'icon': 'string',
      'water': 20,
      'temperature': 14
    },
    'social_info': {
      'title': 'string',
      'img': 'string',
      'followers': 10,
      'following': 15
    },
    'type': 'hotel'
  },
];


export const places$: Observable<Place[]> =
  Observable.of(places)
    .pipe(delay(2000));
