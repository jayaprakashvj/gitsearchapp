import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GithubSearchRoutingModule } from './github-search-routing.module';
import { GithubSearchComponent } from './github-search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContributionchartComponent } from './components/contributionchart/contributionchart.component';


@NgModule({
  declarations: [
    GithubSearchComponent,
    ContributionchartComponent
  ],
  imports: [
    CommonModule,
    GithubSearchRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class GithubSearchModule { }
