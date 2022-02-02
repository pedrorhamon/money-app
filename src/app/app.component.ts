import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  lancamentos = [
    {tipo: 'DESPESA', descricao: 'Compra de pão', dataVencimento: '30/06/2018',
  dataPagamento: null, valor: 4.55, pessoa: 'Padaria do Pedro'},
  {tipo: 'RECEITA', descricao: 'Software', dataVencimento: '30/06/2021',
  dataPagamento: null, valor: 4.55, pessoa: 'Padaria do Pedro'},
  {tipo: 'DESPESA', descricao: 'Imposto', dataVencimento: '30/06/2022',
  dataPagamento: null, valor: 4.55, pessoa: 'Padaria do Pedro'},
  {tipo: 'DESPESA', descricao: 'Mensalidade', dataVencimento: '30/06/2029',
  dataPagamento: null, valor: 4.55, pessoa: 'Padaria do Emyli'},
  {tipo: 'DESPESA', descricao: 'Aluguel', dataVencimento: '30/06/2030',
  dataPagamento: null, valor: 4.55, pessoa: 'Academia Fit'},
  {tipo: 'DESPESA', descricao: 'Compra de pão', dataVencimento: '30/06/2017',
  dataPagamento: null, valor: 4.55, pessoa: 'Padaria do Pedro'},
  {tipo: 'DESPESA', descricao: 'Compra de cremes', dataVencimento: '30/06/2016',
  dataPagamento: null, valor: 4.55, pessoa: 'Padaria do João'},
  ]
}
