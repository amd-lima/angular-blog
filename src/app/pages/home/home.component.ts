import { Component } from '@angular/core';
import { MenuTitleComponent } from '../../components/menu-title/menu-title.component';
import { MainCardComponent } from '../../components/main-card/main-card.component';
import { SmallCardComponent } from '../../components/small-card/small-card.component';
import { MenuBarComponent } from '../../components/menu-bar/menu-bar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MenuTitleComponent, MainCardComponent, SmallCardComponent, MenuBarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
