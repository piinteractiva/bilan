import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-module-bar',
  templateUrl: './module-bar.component.html',
  styleUrls: ['./module-bar.component.scss'],
})
export class ModuleBarComponent implements OnInit {
  materia: any;

  constructor(private location: Location, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.materia = params.materia;
      console.log(this.materia);
    });
  }

  back(): void {
    this.location.back();
  }
}
