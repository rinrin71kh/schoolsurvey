import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'; // <-- Import Router

@Component({
  selector: 'login-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './template.html',
  styleUrls: ['./style.css']
})
export class LoginComponent {
  form: FormGroup;
  error = '';
  success = '';

  constructor(private fb: FormBuilder, private router: Router) { // <-- Inject Router
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login(): void {
    const { username, password } = this.form.value;
    const validUsernames = ['schoolsurvey', 'schoolsurvey@gmail.com', '0123456789'];
    const validPassword = '123456';

    if (validUsernames.includes(username) && password === validPassword) {
      this.success = 'Login successful!';
      this.error = '';

      // ✅ Redirect to admin dashboard
      this.router.navigate(['/admin/dashboard']);
    } else {
      this.error = 'Invalid username or password.';
      this.success = '';
    }
  }
}
