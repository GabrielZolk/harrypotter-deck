import { Component, OnInit } from '@angular/core';
import { CharacterService } from './character.service';

@Component({
  selector: 'app-root',
  template: `
    <div class="card-container" [style]="cardContainerStyles">
  <ng-container *ngFor="let character of characters">
    <ng-container *ngIf="character.image">
      <app-card
        [characterName]="character.name"
        [characterDescription]="character.description"
        [actor]="character.actor"
        [alive]="character.alive"
        [alternateNames]="character.alternateNames"
        [ancestry]="character.ancestry"
        [birth]="character.birth"
        [eyeColor]="character.eyeColor"
        [hairColor]="character.hairColor"
        [house]="character.house"
        [characterImage]="character.image"
        [patronus]="character.patronus"
        [species]="character.species"
        [wands]="character.wands"
      ></app-card>
    </ng-container>
  </ng-container>
</div>
`,

})
export class AppComponent implements OnInit {
  characters: any[] = [];

  constructor(private characterService: CharacterService) { }

  ngOnInit() {
    this.characterService.getCharacters()
      .then(response => {
        this.characters = response.data.flat();
        
        this.characters.sort((a, b) => a.name.localeCompare(b.name));
      })
      .catch(error => {
        console.error('Erro ao buscar dados da API:', error);
      });
  }

  cardContainerStyles = `
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  font-family: 'HarryPotter', sans-serif;
  font-size: 1.3rem;
  background-color: rgb(58, 58, 58);
`;
}
