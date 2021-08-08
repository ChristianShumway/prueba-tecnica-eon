import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TablePostComponent } from './components/table-post/table-post.component';

const routes: Routes = [
  {
    path: '',
    component: TablePostComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
