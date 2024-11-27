import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UserService } from '.././user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  user = this.data || { name: '', email: '', status: 'active', role: '' };

  constructor(
    public dialogRef: MatDialogRef<UserFormComponent>,
    private userService: UserService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  saveUser(): void {
    if (this.user.id) {
      this.userService.updateUser(this.user).subscribe(() => this.dialogRef.close(true));
    } else {
      this.userService.addUser(this.user).subscribe(() => this.dialogRef.close(true));
    }
  }

  cancel(): void {
    this.dialogRef.close();
  }
}
