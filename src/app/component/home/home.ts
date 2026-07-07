import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-home',
  imports: [MatButtonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

    downloadResume() {
    const link = document.createElement('a');
    link.href = '/Alexander_Reese_Resume.pdf';
    link.setAttribute('download', 'Alexander_Reese_Resume.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

}
