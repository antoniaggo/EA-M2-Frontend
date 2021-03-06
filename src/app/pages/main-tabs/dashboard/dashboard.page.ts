import { Component, OnInit } from '@angular/core';
import { StorageComponent } from 'src/app/storage/storage.component'
import { Modelusuario } from 'src/app/models/modelUsusario/modelusuario';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  constructor(
    private storage: StorageComponent
  ) { }

  usuarioLogueado: Modelusuario;  //Usuario logueado en la Aplicación (ha de venir del Login)

  ngOnInit() {
    this.usuarioLogueado = JSON.parse(this.storage.getUser());
  }

}
