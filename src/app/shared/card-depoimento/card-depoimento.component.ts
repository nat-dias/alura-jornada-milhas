import { Component } from '@angular/core';

@Component({
  selector: 'app-card-depoimento',
  templateUrl: './card-depoimento.component.html',
  styleUrls: ['./card-depoimento.component.scss']
})
export class CardDepoimentoComponent {
  depoimento: string = `
    Recomendo fortemente a ag�ncia de viagens Jornada.
    Eles oferecem um servi�o personalizado e de alta qualidade
    que excedeu minhas expectativas em minha �ltima viagem.
  `
  autoria: string = 'Mariana Faustino'
}