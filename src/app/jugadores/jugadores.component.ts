import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-jugadores',
  templateUrl: './jugadores.component.html',
  styleUrls: ['./jugadores.component.css']
})
export class JugadoresComponent implements OnInit {

  @Input() jugadores: any;
  @Input() equipo: string;
  @Output() canasta: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  setCanasta(puntos: number, nombreJugador: string) {
    this.canasta.emit({
      puntos,
      nombreJugador
    })
  }

}
