import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { RoleService } from '.././role.service';

@Component({
  selector: 'app-role-form',
  templateUrl: './role-form.component.html',
  styleUrls: ['./role-form.component.css']
})
export class RoleFormComponent {
  role = this.data || { name: '', description: '', permissions: [] };

  constructor(
    public dialogRef: MatDialogRef<RoleFormComponent>,
    private roleService: RoleService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  saveRole(): void {
    if (this.role.id) {
      this.roleService.updateRole(this.role).subscribe(() => this.dialogRef.close(true));
    } else {
      this.roleService.addRole(this.role).subscribe(() => this.dialogRef.close(true));
    }
  }

  cancel(): void {
    this.dialogRef.close();
  }
}
