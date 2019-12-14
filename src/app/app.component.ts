import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ISPO-Lexicon';
  lexiconPageSelected = true;

  onButtonClick(btnClicked: number) {
    if (btnClicked === 0) {
      // Return Home
    } else if (btnClicked === 1) {
      // Display Lexicon Page
      if (!this.lexiconPageSelected) {
        this.lexiconPageSelected = true;
      }
    } else if (btnClicked === 2) {
      // Display Acknowledgement Page
      if (this.lexiconPageSelected) {
        this.lexiconPageSelected = false;
      }
    } else if (btnClicked === 3) {
      // Change website language selected
    }
  }
}
