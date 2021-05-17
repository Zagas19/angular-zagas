import { NgModule } from '@angular/core';
import { ContadorComponent } from './contador/contador.component';

@NgModule({
    declarations:[
        ContadorComponent
    ],
    exports:[
        ContadorComponent
    ],
    imports:[
        //Solo modulos se ponen en los imports
        
    ]
})

export class ContadorModule{

}