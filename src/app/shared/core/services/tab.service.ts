import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TabService {
  public view: BehaviorSubject<'PLACO' | 'ELEC' | 'HOME' | 'PEINTURE'> =
    new BehaviorSubject<'PLACO' | 'ELEC' | 'HOME' | 'PEINTURE'>('HOME');
}
