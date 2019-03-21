import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoaderService } from 'src/app/utility/loader/loader.service';
import { ApplicationHttpClient, applicationHttpClientCreator } from 'src/core/http-client';
import { FlowMonitorService } from 'src/services/flow/flow-monitor.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UniversityModule } from './exchange-universities/university.module';
import { FlowStarterComponent, FlowWindowComponent } from './flow-monitor';
import { FlowStepComponent } from './flow-monitor/flow-step/flow-step.component';
import { HeaderComponent } from './header/header.component';
import { MySchoolModule } from './my-school/my-school.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UtilityModule } from './utility/utility.module';
import { FlowPageComponent } from './flow-monitor/flow-page/flow-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PageNotFoundComponent,
    FlowStarterComponent,
    FlowWindowComponent,
    FlowStepComponent,
    FlowPageComponent,
  ],
  imports: [
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,

    BrowserAnimationsModule,
    BrowserModule,

    UtilityModule,
    UniversityModule,
    MySchoolModule,
  ],
  providers: [
    {
      provide: ApplicationHttpClient,
      useFactory: applicationHttpClientCreator,
      deps: [HttpClient, LoaderService]
    },
    FlowMonitorService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
