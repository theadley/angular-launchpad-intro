import {Component} from '@angular/core';
import {RouterLink, RouterOutlet} from "@angular/router";
import {NzContentComponent, NzHeaderComponent, NzLayoutComponent} from "ng-zorro-antd/layout";
import {NzMenuDirective, NzMenuItemComponent} from "ng-zorro-antd/menu";
import {routes} from "./app.routes";
import {UpperCasePipe} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    RouterOutlet,
    NzLayoutComponent,
    NzHeaderComponent,
    NzContentComponent,
    NzMenuDirective,
    NzMenuItemComponent,
    RouterLink,
    UpperCasePipe
  ]
})
export class AppComponent {
  routesLocal = routes.map(route => route.path);
}
