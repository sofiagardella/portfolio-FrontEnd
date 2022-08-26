import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/service/experiencia.service';

@Component({
  selector: 'app-edit-experiencia',
  templateUrl: './edit-experiencia.component.html',
  styleUrls: []
})
export class EditExperienciaComponent implements OnInit {
  experiencia: Experiencia = null;

  constructor(private servExpe: ExperienciaService, private activatedRouter: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.servExpe.detail(id).subscribe(
      data => {
        this.experiencia = data;
      }, err => {
        alert("No se pudo modificar la experiencia");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.servExpe.update(id, this.experiencia).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("No se pudo modificar la experiencia");
        this.router.navigate(['']);
      }
    )
  }

}