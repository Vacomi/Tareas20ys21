import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { MiInterceptorService } from "./mi-interceptor.service";


export const httpInterceptorProviders = [
    { provide: HTTP_INTERCEPTORS, useClass: MiInterceptorService , multi: true }
]