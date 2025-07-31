import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModoJuegoService } from '../../services/modo-juego';
 // ajusta la ruta si está en otra carpeta

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  modoSeleccionado: 'jugador' | 'jugadores' | null = null;

  constructor(
    private router: Router,
    private modoJuegoService: ModoJuegoService
  ) {}

  irAModoJugador() {
    this.modoSeleccionado = 'jugador';
    this.modoJuegoService.setModo('jugador');
    console.log('Modo seleccionado:', this.modoSeleccionado);
  }

  irAModoJugadores() {
    this.modoSeleccionado = 'jugadores';
    this.modoJuegoService.setModo('jugadores');
    console.log('Modo seleccionado:', this.modoSeleccionado);
  }

  irAIniciar() {
    if (this.modoSeleccionado) {
      this.router.navigate(['/retriki']);
    }
  }

  irAPersonalizar() {
    this.router.navigate(['/custom']);
  }
}
