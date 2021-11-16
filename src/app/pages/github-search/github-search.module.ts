import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GithubSearchRoutingModule } from './github-search-routing.module';
import { GithubSearchComponent } from './github-search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    GithubSearchComponent
  ],
  imports: [
    CommonModule,
    GithubSearchRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class GithubSearchModule { }
