import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface Medida {
  tipo: string;
  valor: number;
}
@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.scss']
})
export class ConversorComponent implements OnInit {

  // Provisórias
  de!: string | null;
  para!: string | null;

  medidaDe : Medida = {tipo: '', valor: 0}
  medidaPara : Medida = {tipo: '', valor: 0}

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.de = this.route.snapshot.paramMap.get('de');
    this.para = this.route.snapshot.paramMap.get('para');

    console.log(this.de, this.para)

    if(!!this.de && !!this.para){
      this.medidaDe.tipo = this.de;
      this.medidaPara.tipo = this.para;
    }

    console.log("Testando",this.medidaDe.tipo, this.medidaPara.tipo)
  }

}
