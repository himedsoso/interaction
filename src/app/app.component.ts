import { Component, OnInit } from '@angular/core';
import { Cat } from './cat';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  cats: Cat [] =  [new Cat("toto", "le main coon", "24/12/2005","https://www.zoomalia.com/blogz/2525/meilleures-races-de-chat-ragdoll.jpeg" ), new Cat ("titi", "le persan", "20/12/2006", "https://www.zoomalia.com/blogz/2525/meilleures-races-de-chat-main-coon.jpeg")] 

  userKitten: Cat [] = []

  ngOnInit(): void {
    console.log(this.userKitten)
  }

  indexCat(event: number) {
    this.userKitten.push(this.cats[event])
    this.cats.splice(event, 1)

  }

  createCat(event: Cat) {
    this.cats.push(event)
  }
}
