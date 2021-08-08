import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Persona } from './../../models/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  private personal: Persona[] = [
    {
      id: 1,
      nombre: 'Gabriel García Márquez',
      edad: 87,
      frase: 'Ninguna persona merece tus lágrimas, y quien se las merezca no te hará llorar',
      direccion: {
        id: 1,
        calle: 'Calle 42 #15-34',
        colonia: 'La avenida las Palmas',
        pais: 'Colombia'
      }
    },
    {
      id: 2,
      nombre: 'John Lennon.',
      edad: 40,
      frase: 'Haz el amor y no la guerra',
      direccion: {
        id: 2,
        calle: 'Oxford Street #1234',
        colonia: 'Liverpool',
        pais: 'Inglaterra'
      }
    },
    {
      id: 3,
      nombre: 'Bob Marley',
      edad: 36,
      frase: 'El dinero no puede comprar la vida',
      direccion: {
        id: 3,
        calle: 'Nine #89',
        colonia: 'Mile',
        pais: 'Jamaica'
      }
    },
    {
      id: 4,
      nombre: 'Pablo Neruda',
      edad: 69,
      frase: 'Es tan corto el amor y tan largo el olvido',
      direccion: {
        id: 4,
        calle: 'Isla Negra #56',
        colonia: 'Parral',
        pais: 'Chile'
      }
    },
    {
      id: 5,
      nombre: 'Galileo Galilei',
      edad: 77,
      frase: 'La duda es la madre de la invención',
      direccion: {
        id: 5,
        calle: 'Arcetri #324',
        colonia: 'Toscana',
        pais: 'Gran Ducado de Toscana'
      }
    },
    {
      id: 6,
      nombre: 'Einstein',
      edad: 76,
      frase: 'Dos cosas son infinitas: la estupidez humana y el universo; y no estoy seguro de lo segundo',
      direccion: {
        id: 6,
        calle: 'Princeton #6665',
        colonia: 'Nueva Jersey',
        pais: 'Estados Unidos'
      }
    },
    {
      id: 7,
      nombre: 'Martin Luther King',
      edad: 39,
      frase: 'No permitas que ningún ser humano te haga caer tan bajo como para odiarle',
      direccion: {
        id: 7,
        calle: 'Memphis #1234',
        colonia: 'Atlanta',
        pais: 'Estados Unidos'
      }
    },
    {
      id: 8,
      nombre: 'Sigmund Freud',
      edad: 83,
      frase: 'Uno es dueño de lo que calla y esclavo de lo que habla',
      direccion: {
        id: 8,
        calle: 'Hampstead #456-C',
        colonia: 'Freiberg',
        pais: 'Reino Unido'
      }
    },
    {
      id: 9,
      nombre: 'Mahatma Gandhi',
      edad: 78,
      frase: 'Ojo por ojo y el mundo acabará ciego',
      direccion: {
        id: 9,
        calle: 'Nueva Delhi #235',
        colonia: 'Union de la India',
        pais: 'India'
      }
    },
    {
      id: 10,
      nombre: 'Elvis Presley',
      edad: 42,
      frase: 'La música nunca puede ser mala, digan lo que digan del rockn roll',
      direccion: {
        id: 10,
        calle: 'Tupelo #569',
        colonia: 'Graceland',
        pais: 'Estados unidos'
      }
    }
  ];

  private personas = new BehaviorSubject <Persona[]>(this.personal);
  personal$ = this.personas.asObservable();

  constructor() { }

  getPersonas() {
    return this.personal;
  }

  addPersona(persona: Persona) {
    const nuevaPersona: Persona = {
      ...persona,
      id: this.personal.length + 1,
    };
    this.personal = [...this.personal, nuevaPersona];
    this.personas.next(this.personal); 
  }

  editPersona(nuevaInfoPersona: Persona) {
    const posicion = this.personal.findIndex( persona => persona.id === nuevaInfoPersona.id);
    this.personal.splice(posicion, 1, nuevaInfoPersona); 
    this.personas.next(this.personal); 
  }

  deletePersona(idPersona: number) {
    const posicion = this.personal.findIndex( persona => persona.id === idPersona);
     return this.personal.splice(posicion, 1);
  }
}
