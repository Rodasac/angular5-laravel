import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { ImageService } from './services/image.service';

@NgModule({
  imports: [AppModule, ServerModule, ModuleMapLoaderModule],
  providers: [ImageService],
  bootstrap: [AppComponent]
})
export class AppServerModule {}
