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
      },
      imagen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Gabriel_Garcia_Marquez.jpg/220px-Gabriel_Garcia_Marquez.jpg'
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
      },
      imagen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/John_Lennon_1969_%28cropped%29-Colorized.jpg/220px-John_Lennon_1969_%28cropped%29-Colorized.jpg'
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
      },
      imagen: 'https://los40es00.epimg.net/los40/imagenes/2020/06/15/los40classic/1592224638_964781_1592235274_noticia_normal.jpg'
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
      },
      imagen: 'https://upload.wikimedia.org/wikipedia/commons/8/86/Pablo_Neruda_1963.jpg'
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
      },
      imagen: 'http://c.files.bbci.co.uk/B137/production/_103576354_galileo.jpg'
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
      },
      imagen: 'https://cdn.shortpixel.ai/client/q_lossy,ret_img,w_1445/https://grupoaristeo.com/wp-content/uploads/2019/05/albert-einstein.jpg'
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
      },
      imagen: 'http://2.bp.blogspot.com/-Hs_VRGGJpfM/TdqSGy1Rz3I/AAAAAAAAA4w/J4Mh8nfBnx4/s1600/martin-luther-king-color.jpg'
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
      },
      imagen: ' https://i0.wp.com/hipertextual.com/wp-content/uploads/2018/10/sigmund_freud_5.jpg?fit=1200%2C800&ssl=1'
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
      },
      imagen: 'https://www.biografiasyvidas.com/monografia/gandhi/fotos/gandhi_mahatma.jpg'
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
      },
      imagen: 'https://dam.esquirelat.com/wp-content/uploads/2021/01/elvis-presley-biografia-770x513.jpg'
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
