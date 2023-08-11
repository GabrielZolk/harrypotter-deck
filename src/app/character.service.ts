import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  private apiUrl = 'https://hp-api.onrender.com/api/characters';

  getCharacters() {
    return axios.get(this.apiUrl);
  }
}
