import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/templates/footer/footer.component';
import { HeaderComponent } from './components/templates/header/header.component';
import { TableComponent } from './components/table/table.component';
import { NgxPaginationModule } from "ngx-pagination";
import { HttpClientModule } from '@angular/common/http';
import { DetailsComponent } from './components/details/details.component';
import { EditComponent } from './components/details/edit/edit.component';
import { BackComponent } from './components/templates/back/back.component';
import { AddTemplateComponent } from './components/add-template/add-template.component';
import { FormsModule } from '@angular/forms';
import { ConfigloadService } from './services/configload.service';
import { FileUploadComponent } from './components/file-upload/file-upload.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    TableComponent,
    DetailsComponent,
    EditComponent,
    BackComponent,
    AddTemplateComponent,
    FileUploadComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    FileUploadComponent
    // ConfigloadService,
    // {
    //   provide: APP_INITIALIZER,
    //   useFactory: (configloadService: ConfigloadService) =>
    //   configloadService.getAllServices(),
    //   deps: [ConfigloadService],
    //   multi: true
    // },
    // {
    //   provide: APP_INITIALIZER,
    //   useFactory: (configloadService: ConfigloadService) =>
    //   configloadService.getAllTemplates(),
    //   deps: [ConfigloadService],
    //   multi: true
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
