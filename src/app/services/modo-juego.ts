import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModoJuegoService {
  private modoSeleccionado: 'jugador' | 'jugadores' | null = null;

  constructor() {}

  setModo(modo: 'jugador' | 'jugadores') {
    this.modoSeleccionado = modo;
  }

  getModo(): 'jugador' | 'jugadores' | null {
    return this.modoSeleccionado;
  }

  limpiarModo() {
    this.modoSeleccionado = null;
  }
}
