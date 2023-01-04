import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Medida } from 'src/app/models/medida.interface';

@Component({
  selector: 'app-value-input',
  templateUrl: './value-input.component.html',
  styleUrls: ['./value-input.component.scss']
})
export class ValueInputComponent implements OnInit {

  medidaTipo: string = '';
  medidaValor!: number;

  @Input() medida!: Medida;

  valorInputForm = new FormGroup({
    valueInput: new FormControl([]),
  });

  constructor() { }

  ngOnInit(): void {
    this.medidaTipo = this.medida.tipo;
    this.medidaValor = this.medida.valor;
  }



}
