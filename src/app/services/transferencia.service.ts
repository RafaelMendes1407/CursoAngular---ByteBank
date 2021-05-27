import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {

  private listaTransferencias: any [];

  constructor() {
    this.listaTransferencias = [];
  }

  getTransferencias(): any[] {
    return this.listaTransferencias;
  }

  adicionar(transferencia: any) {
    this.inserirData(transferencia);
    this.listaTransferencias.push(transferencia);
  }

  inserirData(transferencia: any) {
    transferencia.data = new Date();
  }
}
