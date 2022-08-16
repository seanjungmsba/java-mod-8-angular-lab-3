import { Component, OnInit } from '@angular/core';
import { Athlete } from './athlete';

@Component({
  selector: 'app-athlete-list',
  templateUrl: './athlete-list.component.html',
  styleUrls: ['./athlete-list.component.css']
})
export class AthleteListComponent implements OnInit {

  // create an array of athlete objects
  athleteList: Athlete[] = [
    new Athlete("Lebron James", "NBA Basketball", true),
    new Athlete("Micheal Jordan", "NBA Basketball", false),
    new Athlete("Shohei Ohtani", "MLB Baseball", true),
    new Athlete("Barry Bonds", "MLB Baseball", false),
    new Athlete("JJ Watt", "NFL Football", true),
    new Athlete("Tom Brady", "NFL Football", false),
    new Athlete("Tiger Woods", "Golf", true)
  ];

  // * Bill Russell (NBA Basketball) is not active * Gabriela Sabatini (WTA Tennis)
  // is not active * Simone Biles (Olympic Gymnast) is active


  constructor() { }

  ngOnInit(): void {
  }

}
