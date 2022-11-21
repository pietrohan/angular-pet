import { Component, OnInit } from '@angular/core';
import {Pet} from './pet';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent implements OnInit {
  pet: Pet = {
    name: 'puppie',
    image: 'https://d33wubrfki0l68.cloudfront.net/c380dc6de1669cd8c9e4890334f0fc18ecfd12c7/692f3/images/pets.jpg'
  };
  constructor() { }

  ngOnInit() {
  }

}

