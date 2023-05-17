import { NgForOf } from '@angular/common';
import { Component, OnInit } from '@angular/core';

interface Tarjeta{
  titulo: string;
  subtitulo: string;
  nro?: number;
}



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  title = 'Mi primer App angular';
  public ArregloTarjetas: Tarjeta []=[]

  ngOnInit(): void {
    
    this.ArregloTarjetas=[
      {titulo: 'video 1', subtitulo: 'video 1'},
      {titulo: 'video 2', subtitulo: 'video 2'},
      {titulo: 'video 3', subtitulo: 'video 3'},
    ]
}
} 