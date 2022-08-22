import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectosService } from 'src/app/service/proyectos.service';

@Component({
  selector: 'app-new-proyectos',
  templateUrl: './new-proyectos.component.html',
  styles: [
  ],
})
export class NewProyectosComponent implements OnInit {
  nombre: string = '';
  año: string = '';
  about: string = '';


  constructor(private sProyectos: ProyectosService, private router: Router) { }

  ngOnInit(): void {
  }

onCreate(): void{
  const proye = new Proyectos(this.nombre, this.año, this.about);
  this.sProyectos.save(proye).subscribe(data => {alert("Proyecto añadido");
  this.router.navigate(['']);
      }, err => {
        alert("Falló");
        this.router.navigate(['']);
}
)
}

}
