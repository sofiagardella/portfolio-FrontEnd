import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-new-educacion',
  templateUrl: './new-educacion.component.html',
  styles: [
  ],
})
export class NewEducacionComponent implements OnInit {
  carrera: string = '';
  institucion: string = '';
  fecha: string = '';
  img: string = '';

  constructor(private sEducacion: EducacionService, private router: Router) { }

  ngOnInit(): void {
  }

onCreate(): void{
  const edu = new Educacion(this.carrera, this.institucion, this.fecha, this.img);
  this.sEducacion.save(edu).subscribe(data => {alert("Educación añadida");
  this.router.navigate(['']);
      }, err => {
        alert("Falló");
        this.router.navigate(['']);
}
)
}

}
