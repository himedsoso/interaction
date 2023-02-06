import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cat } from '../cat';

@Component({
  selector: 'app-list-kitten',
  templateUrl: './list-kitten.component.html',
  styleUrls: ['./list-kitten.component.scss']
})
export class ListKittenComponent {
@Input() listKitten: Cat [] = []
@Output() indexCat: EventEmitter<number> = new EventEmitter()
adopter(index: number) {
  this.indexCat.emit(index)
}
}
