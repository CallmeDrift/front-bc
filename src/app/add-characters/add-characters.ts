import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-characters',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-characters.html',
  styleUrls: ['./add-characters.css']
})
export class AddCharactersComponent {
  character = {
    level: 0,
    power: 0,
    life: 0,
    defense: 0,
    attack: 0,
    damage: 0,
    description: '',
    image: null as File | null
  };

  onFileSelected(event: any) {
    this.character.image = event.target.files[0];
  }

  addCharacter() {
    console.log("Character added: ", this.character);
    // Here you can add logic to save it in a service or backend
  }
}
