import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-unit-selection',
  templateUrl: './unit-selection.component.html',
  styleUrls: ['./unit-selection.component.scss']
})
export class UnitSelectionComponent implements OnInit {

  temperaturas = [
    'Celsius', 'Fahrenheit', 'Kelvin'
  ]

  // Criação do formulário
  conversorTemperatura = new FormGroup(
    {
      temperaturaDe: new FormControl('', Validators.required),
      temperaturaPara: new FormControl('', Validators.required),
    }

  );

  valorTempDe: string = '';
  valorTempPara: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  enviaParams(){
    console.log(
      this.valorTempDe,
      this.valorTempPara,
    )
  }

}
