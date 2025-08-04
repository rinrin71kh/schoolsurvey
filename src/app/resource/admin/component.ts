import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from '../component/sidebar/component';
import { HeaderComponent } from '../component/header/component';

@Component({
  selector: 'admin-layout',
  standalone: true,
  imports: [CommonModule, RouterModule, SidebarComponent, HeaderComponent],
  templateUrl: './template.html',
})
export class AdminLayoutComponent {}
