import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ApiServiceService } from 'src/app/servicios/api-service.service';

// import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{

  products: Product[] = [];

  usuarios: any[] = [];
  
  constructor( private servapi: ApiServiceService ){}
  ngOnInit(): void {

  }

  mostrarUsers():void{
    this.servapi.getAllUsers().subscribe( data  => this.usuarios = data);
  }

}
