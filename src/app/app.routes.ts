import { Routes } from '@angular/router';
import {ComicComponent} from "./components/comic/comic.component";
import {SearchPageComponent} from "./components/search-page/search-page.component";
import {GenrePageComponent} from "./components/genre-page/genre-page.component";
import {ControlFlowComponent} from "./components/control-flow/control-flow.component";
import {RenderSeasonsComponent} from "./components/render-seasons/render-seasons.component";
import {ClothesComponent} from "./components/clothes/clothes.component";

export const routes: Routes = [
  {
    path: 'read',
    component: ComicComponent
  },
  {
    path: 'search',
    component: SearchPageComponent
  },
  {
    path: 'genres',
    component: GenrePageComponent
  },
  {
    path: 'flow',
    component: ControlFlowComponent
  },
  {
    path: 'seasons',
    component: RenderSeasonsComponent
  },
  {
    path: 'attributes',
    component: ClothesComponent
  }
];
