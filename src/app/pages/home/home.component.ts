import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ModoJuegoService } from '../../services/modo-juego';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
 // ajusta la ruta si está en otra carpeta

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
   modoSeleccionado: 'jugador' | 'jugadores' | null = null;
  loaded = false;

  @ViewChild('container', { static: true }) container!: ElementRef;

  constructor(
    private router: Router,
    private modoJuegoService: ModoJuegoService,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    this.initAnimations();
  }

  initAnimations(): void {
    // Crear partículas
    this.createParticles();
    
    // Crear línea de escaneo
    this.createScanLine();
    
    // Activar animación de carga
    setTimeout(() => {
      this.loaded = true;
    }, 100);
  }

  createParticles(): void {
    const particlesContainer = this.renderer.createElement('div');
    this.renderer.addClass(particlesContainer, 'particles');
    this.renderer.appendChild(document.body, particlesContainer);

    const particleCount = 30;
    
    for (let i = 0; i < particleCount; i++) {
      const particle = this.renderer.createElement('div');
      this.renderer.addClass(particle, 'particle');
      
      // Estilos aleatorios
      const size = Math.random() * 3 + 1;
      this.renderer.setStyle(particle, 'width', `${size}px`);
      this.renderer.setStyle(particle, 'height', `${size}px`);
      this.renderer.setStyle(particle, 'left', `${Math.random() * 100}vw`);
      this.renderer.setStyle(particle, 'bottom', `-10px`);
      
      const duration = Math.random() * 20 + 10;
      this.renderer.setStyle(particle, 'animationDuration', `${duration}s`);
      this.renderer.setStyle(particle, 'animationDelay', `${Math.random() * 5}s`);
      this.renderer.setStyle(particle, 'opacity', Math.random() * 0.5 + 0.1);
      
      this.renderer.appendChild(particlesContainer, particle);
    }
  }

  createScanLine(): void {
    const scanLine = this.renderer.createElement('div');
    this.renderer.addClass(scanLine, 'scan-line');
    this.renderer.appendChild(document.body, scanLine);
    
    // Eliminar después de la animación
    setTimeout(() => {
      this.renderer.removeChild(document.body, scanLine);
    }, 3000);
  }


  irAModoJugador() {
  this.modoSeleccionado = 'jugador';
  this.modoJuegoService.setModo('jugador');
  console.log('Modo seleccionado:', this.modoSeleccionado);
  // Aquí podrías añadir alguna animación o efecto visual adicional
}

irAModoJugadores() {
  this.modoSeleccionado = 'jugadores';
  this.modoJuegoService.setModo('jugadores');
  console.log('Modo seleccionado:', this.modoSeleccionado);
  // Aquí podrías añadir alguna animación o efecto visual adicional
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
