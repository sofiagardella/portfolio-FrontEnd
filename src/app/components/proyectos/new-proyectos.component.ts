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
  fecha: string = '';
  about: string = '';


  constructor(private servProye: ProyectosService, private router: Router) { }

  ngOnInit(): void {
  }

onCreate(): void{
  const proye = new Proyectos(this.nombre, this.fecha, this.about);
  this.servProye.save(proye).subscribe(data => {alert("Proyecto añadido");
  this.router.navigate(['']);
      }, err => {
        alert("Falló");
        this.router.navigate(['']);
}
)
}

}
