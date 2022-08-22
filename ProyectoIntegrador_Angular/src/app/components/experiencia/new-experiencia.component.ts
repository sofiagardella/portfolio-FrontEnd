import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/service/experiencia.service';

@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styles: [
  ],
})
export class NewExperienciaComponent implements OnInit {
  puesto: string = '';
  empresa: string = '';
  fecha: string = '';
  img: string = ''

  constructor(private sExperiencia: ExperienciaService, private router: Router) { }

  ngOnInit(): void {
  }

onCreate(): void{
  const expe = new Experiencia(this.puesto, this.empresa, this.fecha, this.img);
  this.sExperiencia.save(expe).subscribe(data => {alert("Experiencia añadida");
  this.router.navigate(['']);
      }, err => {
        alert("Falló");
        this.router.navigate(['']);
}
)
}

}
