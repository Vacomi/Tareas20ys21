import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { MiInterceptorService } from "./mi-interceptor.service";

// Esto lo creamos en este archivo para seguir agregando
// Interceptores

export const httpInterceptorProviders = [
    { provide: HTTP_INTERCEPTORS, useClass: MiInterceptorService , multi: true }
]