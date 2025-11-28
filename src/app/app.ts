import { Component, ElementRef, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Nav } from './componentes/nav/nav';
import { Footer } from './componentes/footer/footer';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-root',
  imports: [Nav, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('front-app-cet');

  products = [
    {
      name: "Laptop",
      price: 1200,
      discount: 0.1
    },
    {
      name: "Smartphone",
      price: 800,
      discount: 0.15
    }
  ];

  get resum(): string {
    return this.products
      .map(product => `${product.name}, costo: $${(product.price * (1 - product.discount))}`)
      .join('\n');
  }

  miPromesa: Promise<string>;

  constructor() {
    this.miPromesa = new Promise((resolve, reject) => {
      const exito = true; // Cambia a false para simular un error

      if (exito) {
        resolve("¡Operación exitosa!");
      } else {
        reject("¡Ocurrió un error!");
      }
    });

    this.miPromesa
      .then(mensaje => console.log(mensaje))
      .catch(error => console.error(error));

    // DOM manipulation should be done in ngAfterViewInit or similar lifecycle hook in Angular,
    // but for demonstration, here's how you could do it:
    setTimeout(() => {
      const info = document.getElementById('infoJs');
      if (info) {
        info.innerHTML = `<p>${this.resum}</p>`;
      }
    });
  }

  // TRY CATCH

  divisionError() {
    try {
      let result = 10 / 0;
      if (!isFinite(result)) {
        throw new Error("División por cero no permitida");
      }
      console.log("Resultado:", result);
    } catch (error: any) {
      console.error("Error capturado:", error.message);
    }
  
  }

  contenido = signal(`<p>${this.resum}</p>`);




}

