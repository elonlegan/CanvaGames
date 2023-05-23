import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { GameComponent } from './components/game/game.component';
import { RulesComponent } from './components/rules/rules.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NewsComponent } from './components/news/news.component';
import { DividerComponent } from './components/divider/divider.component';
import { ButtonBadgeComponent } from './components/button-badge/button-badge.component';
import { ButtonTabComponent } from './components/button-tab/button-tab.component';
import { TitleComponent } from './components/title/title.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { NewsCardComponent } from './components/news-card/news-card.component';
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    RulesComponent,
    HeaderComponent,
    FooterComponent,
    NewsComponent,
    DividerComponent,
    ButtonBadgeComponent,
    ButtonTabComponent,
    TitleComponent,
    HomeComponent,
    NewsCardComponent,
    LoaderComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
