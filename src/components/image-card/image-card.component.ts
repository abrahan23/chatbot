import { Component, OnInit } from '@angular/core';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


@Component({
  selector: 'app-image-card',
  templateUrl: './image-card.component.html',
  styleUrls: ['./image-card.component.css']

})

@NgModule({
  declarations: [],
  imports: [],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [ImageCardComponent]
})

export class ImageCardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
