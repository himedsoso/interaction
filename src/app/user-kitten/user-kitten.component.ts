import { Component, Input } from '@angular/core';
import { Cat } from '../cat';

@Component({
  selector: 'app-user-kitten',
  templateUrl: './user-kitten.component.html',
  styleUrls: ['./user-kitten.component.scss']
})
export class UserKittenComponent {
  @Input() userKitten: Cat [] = []
}
