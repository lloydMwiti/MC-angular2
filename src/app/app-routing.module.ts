import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RepoComponent} from './repo/repo.component'
import { UsersComponent } from './component/users/users.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  {path:'',component:RepoComponent},
  {path:'more',component:UsersComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
