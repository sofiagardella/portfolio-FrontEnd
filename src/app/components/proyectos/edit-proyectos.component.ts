import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectosService } from 'src/app/service/proyectos.service';

@Component({
  selector: 'app-edit-proyectos',
  templateUrl: './edit-proyectos.component.html',
  styleUrls: []
})
export class EditProyectosComponent implements OnInit {
    proyectos: Proyectos = null;

  constructor(private proyeServ: ProyectosService, private activatedRouter: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
  const id = this.activatedRouter.snapshot.params['id'];
  this.proyeServ.detail(id).subscribe(
   data =>{
      this.proyectos = data;
      }, err =>{
        alert("Error al modificar proyecto - detail");
         this.router.navigate(['']);
      }
     )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.proyeServ.update(id, this.proyectos).subscribe(
      data => {
        this.router.navigate(['']);
      }, err =>{
         alert("Error al modificar proyecto");
         this.router.navigate(['']);
      }
    )
  }

}