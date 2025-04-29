import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pagina1PageRoutingModule } from './pagina1-routing.module';

import { Pagina1Page } from './pagina1.page';
import { MiscomponentesModule } from 'src/app/componentes/miscomponentes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pagina1PageRoutingModule,
    MiscomponentesModule
  ],
  declarations: [Pagina1Page]
})
export class Pagina1PageModule {}
