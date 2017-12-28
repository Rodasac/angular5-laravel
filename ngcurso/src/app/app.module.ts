import { routes, appRoutes } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ImageService } from './services/image.service';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { ServiceWorkerModule } from '@angular/service-worker';
import { AsyncLocalStorageModule } from 'angular-async-local-storage';

import { AppComponent } from './app.component';
import { NuevoComponent } from './nuevo/nuevo.component';
import { NavbarComponent } from './navbar.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ImageListComponent } from './gallery/image-list/image-list.component';
import { ImageComponent } from './gallery/image-list/image.component';
import { ImageDetailComponent } from './gallery/image-detail/image-detail.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { AdminComponent } from './admin/admin.component';
import { AdminImagesListComponent } from './admin/admin-images-list/admin-images-list.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AdminImageCreateComponent } from './admin/admin-image-create/admin-image-create.component';
import { AdminImageEditComponent } from './admin/admin-image-edit/admin-image-edit.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    NuevoComponent,
    NavbarComponent,
    GalleryComponent,
    ImageListComponent,
    ImageComponent,
    ImageDetailComponent,
    ContactComponent,
    AboutComponent,
    AdminComponent,
    AdminImagesListComponent,
    DashboardComponent,
    AdminImageCreateComponent,
    AdminImageEditComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ngcurso' }),
    AsyncLocalStorageModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpModule,
    HttpClientModule,
    ServiceWorkerModule.register('/ngsw-worker.js', {enabled: environment.production})
  ],
  providers: [ImageService],
  bootstrap: [AppComponent]
})
export class AppModule {}
