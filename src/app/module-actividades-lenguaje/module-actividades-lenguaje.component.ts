import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-module-actividades-lenguaje',
  templateUrl: './module-actividades-lenguaje.component.html',
  styleUrls: ['./module-actividades-lenguaje.component.scss'],
})
export class ModuleActividadesLenguajeComponent implements OnInit {
  page: any;

  module = [``, ``, ``, ``, ``, ``, ``, ``];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.page = params.page;
      console.log(this.page);
    });
  }
}
