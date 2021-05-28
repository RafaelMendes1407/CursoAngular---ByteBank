import { Transferencia } from './../models/transferencia.model';
import { EventEmitter } from '@angular/core';
import { Component, Output } from '@angular/core';
import { TransferenciaService } from '../services/transferencia.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent {

  @Output() aoTransferir = new EventEmitter<any>();

  valor: number = 0;
  destino: number = 0;
  data: number = Date.now();

  constructor(private service: TransferenciaService, private router: Router){

  }

  transferir() {
    const transferencia: Transferencia = { valor: this.valor, destino: this.destino, data: this.data};
    this.service.adicionar(transferencia).subscribe( resultado => {
      this.limparCampos();
      this.router.navigateByUrl('extrato');
    }, (error) => console.log(error));
  }

  limparCampos(){
    this.valor = 0;
    this.destino = 0;
  }
}
