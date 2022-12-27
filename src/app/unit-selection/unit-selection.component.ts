import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  enviaTempParams(){
    this.router.navigate([
      '/conversor',
      this.valorTempDe,
      this.valorTempPara,
    ]);
  
    
  }

}
