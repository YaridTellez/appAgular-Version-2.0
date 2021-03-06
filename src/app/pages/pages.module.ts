import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import {TableModule} from 'primeng/table';
import {PanelModule} from 'primeng/panel';
import {MenubarModule} from 'primeng/menubar';

import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { ProgressbarModule } from "ngx-bootstrap/progressbar";
import { TooltipModule } from "ngx-bootstrap/tooltip";
import { CollapseModule } from "ngx-bootstrap/collapse";
import { TabsModule } from "ngx-bootstrap/tabs";
import { PaginationModule } from "ngx-bootstrap/pagination";
import { AlertModule } from "ngx-bootstrap/alert";
import { BsDatepickerModule } from "ngx-bootstrap/datepicker";
import { CarouselModule } from "ngx-bootstrap/carousel";
import { ModalModule } from "ngx-bootstrap/modal";
import { JwBootstrapSwitchNg2Module } from "jw-bootstrap-switch-ng2";
import { PopoverModule } from "ngx-bootstrap/popover";


import { IndexComponent } from "./index/index.component";
import { LoginComponent } from "./examples/Login/login.component";
import { RegisterComponent } from "./examples/register/register.component";
import { ProfilepageComponent } from "./examples/profilepage/profilepage.component";
import { DashboardComponent } from "./examples/dashboard/dashboard.component";
 

import { AgmCoreModule } from '@agm/core';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    RouterModule,
    BsDropdownModule.forRoot(),
    ProgressbarModule.forRoot(),
    TooltipModule.forRoot(),
    PopoverModule.forRoot(),
    CollapseModule.forRoot(),
    JwBootstrapSwitchNg2Module,
    TabsModule.forRoot(),
    PaginationModule.forRoot(),
    AlertModule.forRoot(),
    BsDatepickerModule.forRoot(),
    CarouselModule.forRoot(),
    ModalModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBPg7DxFO3LhOMtOsXR_XKF6HrkLqF6OUw'
    }),
    TableModule,
    PanelModule,
    MenubarModule
  ],
  declarations: [
    IndexComponent,    
    LoginComponent,
    RegisterComponent,
    ProfilepageComponent,
    DashboardComponent
   
  ],
  exports: [
    IndexComponent,
    LoginComponent,
    RegisterComponent,
    ProfilepageComponent,
    DashboardComponent
  ],
  providers: []
})
export class PagesModule {}
