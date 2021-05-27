import { EventEmitter } from '@angular/core';
import { Component, Output } from '@angular/core';

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

  transferir() {
    console.log("Solicitado nova transferência");
    const transferencia = { valor: this.valor, destino: this.destino, data: this.data};
    this.aoTransferir.emit(transferencia);
    this.limparCampos();
  }

  limparCampos(){
    this.valor = 0;
    this.destino = 0;
  }
}
