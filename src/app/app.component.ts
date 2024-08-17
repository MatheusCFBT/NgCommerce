import { Component } from '@angular/core';
import { MenuComponent } from './navegacao/menu/menu.component';
import { HomeComponent } from './navegacao/home/home.component';
import { FooterComponent } from './navegacao/footer/footer.component';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MenuComponent, HomeComponent, FooterComponent],
  templateUrl: './app.component.html',
})

export class AppComponent {
  title = 'AppNgCompleta';
}
