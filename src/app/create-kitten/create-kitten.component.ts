import { Component, EventEmitter, Output } from '@angular/core';
import { Cat } from '../cat';

@Component({
  selector: 'app-create-kitten',
  templateUrl: './create-kitten.component.html',
  styleUrls: ['./create-kitten.component.scss']
})
export class CreateKittenComponent {
  @Output() chat: EventEmitter<Cat> = new EventEmitter()

  cat: Cat = new Cat('', '', '', '')


ajouter() {
this.chat.emit(this.cat)
}
}
