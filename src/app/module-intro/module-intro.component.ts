import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-module-intro',
  templateUrl: './module-intro.component.html',
  styleUrls: ['./module-intro.component.scss'],
})
export class ModuleIntroComponent implements OnInit {
  materia: any;

  isValidMateria: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.materia = params.materia;
      console.log(this.materia);
      this.isValidMateria =
        this.materia === 'matematicas' ||
        this.materia === 'competencias-ciudadanas' ||
        this.materia === 'competencias-socioemocionales' ||
        this.materia === 'ciencias-naturales' ||
        this.materia === 'lenguaje';
      console.log(this.isValidMateria);
    });
  }
}
