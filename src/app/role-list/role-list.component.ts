import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RoleService } from '.././role.service';
import { RoleFormComponent } from '../role-form/role-form.component';

@Component({
  selector: 'app-role-list',
  templateUrl: './role-list.component.html',
  styleUrls: ['./role-list.component.css']
})
export class RoleListComponent implements OnInit {
  displayedColumns: string[] = ['roleName', 'description', 'usersCount', 'actions'];
  roles: any[] = [];

  constructor(private roleService: RoleService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.loadRoles();
  }

  loadRoles(): void {
    this.roleService.getRoles().subscribe(roles => {
      this.roles = roles;
    });
  }

  openRoleForm(role?: any): void {
    const dialogRef = this.dialog.open(RoleFormComponent, {
      width: '400px',
      data: role || {}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.loadRoles();
      }
    });
  }

  deleteRole(roleId: number): void {
    if (confirm('Are you sure you want to delete this role?')) {
      this.roleService.deleteRole(roleId).subscribe(() => {
        this.loadRoles();
      });
    }
  }
  dataSource: any; // Replace with the actual data source type

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
