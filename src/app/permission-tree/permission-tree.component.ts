import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PermissionService } from '.././permission.service';
import { RoleService } from '.././role.service';
@Component({
  selector: 'app-permission-tree',
  templateUrl: './permission-tree.component.html',
  styleUrls: ['./permission-tree.component.css']
})
export class PermissionTreeComponent implements OnInit {
  permissionTree: any[] = [];
  selectedRole: any;
  roles = [
    { name: 'Admin', value: 'admin' },
    { name: 'User', value: 'user' },
  ];
  
  constructor(
    private permissionService: PermissionService,
    private roleService: RoleService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.loadPermissions();
  }

  loadPermissions(): void {
    this.permissionService.getPermissions().subscribe(permissions => {
      this.permissionTree = permissions;
    });
  }

  updateRolePermissions(): void {
    this.roleService.updateRolePermissions(this.selectedRole.id, this.selectedRole.permissions).subscribe(() => {
      alert('Permissions updated successfully!');
    });
  }
  cancel(): void {
    this.dialog.closeAll();
  }
}
