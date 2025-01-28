import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LogoutComponent } from './logout/logout.component';
import { EmployeeComponent } from './employee/employee.component';
import { PositionComponent } from './position/position.component';
import { NopageComponent } from './nopage/nopage.component';
import { authGuard } from './shared/auth.guard';

export const routes: Routes = [
    { path: 'login' , component: LoginComponent},
    { path: 'register' , component: RegisterComponent},
    { path: 'logout' , component: LogoutComponent},
    { path: 'employee' , component: EmployeeComponent, canActivate: [authGuard] },
    { path: 'position' , component: PositionComponent},
    { path: '' , redirectTo: 'login', pathMatch: 'full'},
    { path: '**' , component: NopageComponent},
];
