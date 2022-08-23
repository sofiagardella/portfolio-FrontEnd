import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skills } from 'src/app/model/skills';
import { SkillsService } from 'src/app/service/skills.service';

@Component({
  selector: 'app-new-skills',
  templateUrl: './new-skills.component.html',
  styles: [
  ],
})
export class NewSkillsComponent implements OnInit {
  habilidad: string = '';
  avance: string = "";

  constructor(private sSkills: SkillsService, private router: Router) { }

  ngOnInit(): void {
  }

onCreate(): void{
  const skills = new Skills(this.habilidad, this.avance);
  this.sSkills.save(skills).subscribe(data => {alert("Habilidad añadida");
  this.router.navigate(['']);
      }, err => {
        alert("Falló");
        this.router.navigate(['']);
}
)
}

}
