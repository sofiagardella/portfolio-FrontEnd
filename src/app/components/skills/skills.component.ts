import { Component, OnInit } from '@angular/core';
import { Skills } from 'src/app/model/skills';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  Skills: Skills = new Skills("", "");
  skills!: Skills[];

  constructor(private tokenService: TokenService ) { }

  isLogged = false;

  ngOnInit(): void {
 
  }
}