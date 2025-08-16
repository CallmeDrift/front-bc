import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-agregar-personaje',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './agregar-personaje.html',
  styleUrls: ['./agregar-personaje.css']
})
export class AgregarPersonajeComponent {
  personaje = {
    level: 0,
    power: '',
    life: 0,
    defense: 0,
    attack: 0,
    damage: 0,
    description: '',
    image: null as File | null
  };

  onFileSelected(event: any) {
    this.personaje.image = event.target.files[0];
  }

  agregarPersonaje() {
    console.log("Personaje agregado: ", this.personaje);
    // Aquí puedes meter la lógica para guardarlo en un servicio o backend
  }
}