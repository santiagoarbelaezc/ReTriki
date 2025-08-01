import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-retriki',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './retriki.component.html',
  styleUrl: './retriki.component.css'
})
export class RetrikiComponent {
  board: string[] = Array(9).fill('');
  currentPlayer: string = '✖'; // Puedes empezar con '✖' o '◯'
  message: string = 'Turno de: Jugador ✖';

  handleClick(index: number): void {
    if (this.board[index] !== '') return; // Si ya está ocupada, no hace nada

    this.board[index] = this.currentPlayer;

    // Cambiar jugador
    this.currentPlayer = this.currentPlayer === '✖' ? '◯' : '✖';
    this.message = `Turno de: Jugador ${this.currentPlayer}`;
  }

  resetGame(): void {
    this.board = Array(9).fill('');
    this.currentPlayer = '✖';
    this.message = 'Turno de: Jugador ✖';
  }
}
