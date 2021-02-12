import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() dataEntrante:any;

  constructor() { }

  /* LLAMANDO COMPONENTE  */
  ngOnInit(): void { 
    console.log('Llamando componente',this.dataEntrante);
  }
}
