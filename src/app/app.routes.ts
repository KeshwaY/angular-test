import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CalculatorComponent } from './calculator/calculator.component';

export const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'main', component: CalculatorComponent }
];
