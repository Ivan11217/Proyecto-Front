import { Routes } from '@angular/router';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { InformacionComponent } from './componentes/informacion/informacion.component';
import { PaquetesComponent } from './componentes/paquetes/paquetes.component';
import { GaleriaComponent } from './componentes/galeria/galeria.component';

export const routes: Routes = [
    {path: '', component: InicioComponent },
    {path:'informacion', component: InformacionComponent},
    {path: 'contacto', component: ContactoComponent },
    {path: 'paquetes', component: PaquetesComponent},
    {path:'galeria', component: GaleriaComponent}
];