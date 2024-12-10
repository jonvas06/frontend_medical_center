import { Injectable } from '@angular/core';
import { 
  CanActivate, 
  ActivatedRouteSnapshot, 
  RouterStateSnapshot, 
  Router 
} from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService, 
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot
  ): boolean {
    // Verificar si el usuario está autenticado
    if (!this.authService.isLoggedIn()) {
      // Redirigir al login si no está autenticado
      this.router.navigate(['/login']);
      return false;
    }

    // Verificar roles si están definidos en la ruta
    const requiredRoles = route.data['roles'] as number[];
    console.log(requiredRoles);
    
    if (requiredRoles) {
      const userRole = this.authService.getUserRole();
      console.log(userRole);
      // Verificar si el rol del usuario coincide con los roles requeridos
      if (!userRole || !requiredRoles.includes(userRole)) {
        // Redirigir a una página de acceso denegado
        this.router.navigate(['/login']);
        return false;
      }
    }

    return true;
  }
}