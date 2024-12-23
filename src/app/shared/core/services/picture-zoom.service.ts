import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PictureZoomService {
  public view: BehaviorSubject<'PLACO' | 'ELEC' | 'HOME' | 'PEINTURE'> =
    new BehaviorSubject<'PLACO' | 'ELEC' | 'HOME' | 'PEINTURE'>('HOME');
}
