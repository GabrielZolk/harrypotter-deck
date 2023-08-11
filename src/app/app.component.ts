import { Component, OnInit } from '@angular/core';
import { CharacterService } from './character.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
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

}
