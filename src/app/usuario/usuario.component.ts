import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {

  public usuario = {
    nome: '',
    idade: 0,
    telefone: '',
    endereco: '',
  }

  public usuarios = [
    {
      nome: 'João',
      idade: 20,
      telefone: '11 99999-9999',
      endereco: 'Rua Zero Um, Número 10',
    },
    {
      nome: 'Maria',
      idade: 34,
      telefone: '21 12345-1234',
      endereco: 'Av. Coronel A, Número 143',
    },
    {
      nome: 'Pedro',
      idade: 58,
      telefone: '85 88888-8888',
      endereco: 'Rua Vinte, Número 700',
    }
  ]

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.usuario = this.usuarios.find(x => x.nome === params['nome']);
    });

  }

}
