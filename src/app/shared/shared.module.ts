import { NgModule } from '@angular/core';
import { PicsumService } from './services/picsum.service';
import { AppValidators } from './validators/app-validators.service';
@NgModule({
  declarations: [
    
  ],
  imports: [
    
  ],
  exports:[

  ],
  providers: [AppValidators, PicsumService]
})
export class SharedModule { }
