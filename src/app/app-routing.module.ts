import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { FacebookGuard } from './gaurds/facebook.guard';
import { TrainingComponent } from './training/training.component';
import { ChatbarComponent } from './components/chatbar/chatbar.component';
import { AvatarComponent } from './components/avatar/avatar.component';
import { StoryCardComponent } from './components/story-card/story-card.component';
import { CreatepostComponent } from './components/createpost/createpost.component';
import { PostComponent } from './components/post/post.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [FacebookGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'training',
    component: TrainingComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
