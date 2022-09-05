import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { FormsModule, NgForm } from '@angular/forms';
import { MaterialModule } from './shared/material.module';
import { TrainingComponent } from './training/training.component';
import { NamePrefixPipe } from './utils/pipes/nameprefix.pipe';
import { FooterComponent } from './components/footer/footer.component';
import { ChatbarComponent } from './components/chatbar/chatbar.component';
import { AvatarComponent } from './components/avatar/avatar.component';
import { StoryCardComponent } from './components/story-card/story-card.component';
import { CreatepostComponent } from './components/createpost/createpost.component';
import { PostComponent } from './components/post/post.component';
import { HomeComponent } from './components/home/home.component';
import { AdssidebarComponent } from './components/adssidebar/adssidebar.component';
import { HomestoriesComponent } from './components/homestories/homestories.component';

@NgModule({
  declarations: [
    AppComponent,    
    LoginComponent,
    SignupComponent,
    TrainingComponent,
    NamePrefixPipe,
    FooterComponent,
    HomeComponent,
    AvatarComponent,
    ChatbarComponent,
    StoryCardComponent,
    PostComponent,
    CreatepostComponent,
    AdssidebarComponent,
    HomestoriesComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,    
    MaterialModule,
    FormsModule, 
  ],
  exports:[
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
