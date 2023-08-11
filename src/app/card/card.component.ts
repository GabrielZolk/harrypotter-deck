import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() characterName: string = '';
  @Input() characterDescription: string = '';
  @Input() actor: string = '';
  @Input() alive: boolean | null = null;
  @Input() alternateNames: string = '';
  @Input() ancestry: string = '';
  @Input() birth: string = '';
  @Input() eyeColor: string = '';
  @Input() hairColor: string = '';
  @Input() house: string = '';
  @Input() characterImage: string = '';
  @Input() patronus: string = '';
  @Input() species: string = '';
  @Input() wands: string = '';

  constructor(private router: Router) {}

  goToCharacterDetails(id: string) {
    this.router.navigate(['/character', id]);
  }
}
