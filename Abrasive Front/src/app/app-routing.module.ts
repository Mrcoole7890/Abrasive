import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componets/login/login.component';
import { QueueComponent } from './componets/queue/queue.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'queue', component: QueueComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
