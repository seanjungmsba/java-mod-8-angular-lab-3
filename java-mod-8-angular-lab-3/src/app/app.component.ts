import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  senderName = "";
  senderMessage = "";
  playerName = "";
  playerSport = "";
  playerStatus = true;
  title = 'java-mod-8-angular-lab-2';

  athletes = [
    {
      name: "Ohtani Shohei",
      sport: "MLB Baseball",
      active: true
    },
    {
      name: "Tom Brady",
      sport: "NFL Football",
      active: false
    }
  ];

  onSendAthlete() {
    let newAthlete = {
      name: this.playerName,
      sport: this.playerSport,
      active: this.playerStatus
    }
    this.athletes.push(newAthlete);
  }

  disableNewMessage = true;
  constructor() {
    console.log("Iniating angular AppCompnent class");
    setTimeout(() => {
      this.disableNewMessage = !this.disableNewMessage;
    }
    , 2000)
  }

  // messages = [
  //   {
  //     sender: "Ludovic",
  //     message: "Latest message from Ludovic"
  //   },
  //   {
  //     sender: "Jessica",
  //     message: "Latest message from Jessica"
  //   }
  // ];

    // onSendMessage() {
  //   let newMessage = {
  //     sender: this.senderName,
  //     message: this.senderMessage
  //   }
  //   this.messages.push(newMessage);
  // }

}
