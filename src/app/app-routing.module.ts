import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { RoleListComponent } from './role-list/role-list.component';
import { PermissionTreeComponent } from './permission-tree/permission-tree.component';

const routes: Routes = [
  { path: 'users', component: UserListComponent },
  { path: 'roles', component: RoleListComponent },
  { path: 'permissions', component: PermissionTreeComponent },
  { path: '', redirectTo: '/users', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
