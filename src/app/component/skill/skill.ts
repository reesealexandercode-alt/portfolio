import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-skill',
  imports: [CommonModule, MatCardModule],
  templateUrl: './skill.html',
  styleUrl: './skill.css',
})
export class Skill {
  readonly = true;
  csharpMax = 5;
  csharpRate = 4;
  sqlMax = 5;
  sqlRate = 5;
  netMax = 5;
  netRate = 3;
  angularMax = 5;
  angularRate = 4;
  htmlMax = 5;
  htmlRate = 5;
  cssMax = 5;
  cssRate = 5;
  pythonMax= 3;
  pythonRate= 5;

  getStars(rating: number, max: number): string[] {
    return Array.from({ length: max }, (_, index) => (index < rating ? 'filled' : 'empty'));
  }
}
