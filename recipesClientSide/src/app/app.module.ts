import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { IdentifactionComponent } from './identifaction/identifaction.component';
import { UpdatePriceComponent } from './update-price/update-price.component';
import { UpdateDetailsComponent } from './update-details/update-details.component';
import { MyRecipsComponent } from './my-recips/my-recips.component';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { MyGradesComponent } from './my-grades/my-grades.component';
import { WatchRecipeComponent } from './watch-recipe/watch-recipe.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouteHomeComponent } from './route-home/route-home.component'

import { SearchByPriceComponent } from './search-by-price/search-by-price.component';
import { SearchByBakerComponent } from './search-by-baker/search-by-baker.component';
import { SearchByTimeComponent } from './search-by-time/search-by-time.component';
import { SearchByGradeComponent } from './search-by-grade/search-by-grade.component';
import { SearchByCategoryComponent } from './search-by-category/search-by-category.component';
import { FavoriteRecipeComponent } from './favorite-recipe/favorite-recipe.component';
import { AllGradeComponent } from './all-grade/all-grade.component';
//import { AllAvgGradeComponent } from './all-avg-grade/all-avg-grade.component';
import { WatchGradeComponent } from './watch-grade/watch-grade.component';
import { LeaderBakerComponent } from './leader-baker/leader-baker.component';
import { AddGradeComponent } from './add-grade/add-grade.component';
import { MyRecips2Component } from './my-recips2/my-recips2.component';
//import { NewRecipeComponent } from './moudels/new-recipe/new-recipe.component';
//  imports: [RouterModule.forRoot(routes)],
//PRIMENG
// import {CalendarModule} from 'primeng/calendar';
import { InputTextModule } from 'primeng/inputtext';


import { FileUploadModule } from 'primeng/fileupload';
import { AboutBakerComponent } from './about-baker/about-baker.component';
import { AboutUserComponent } from './about-user/about-user.component';
import { ChooseLogInComponent } from './choose-log-in/choose-log-in.component';
import { AddRecipeNewBakerComponent } from './add-recipe-new-baker/add-recipe-new-baker.component';
import { AllRecipeComponent } from './all-recipe/all-recipe.component';
import { UpdateMyDetailsComponent } from './update-my-details/update-my-details.component';
import { UpdatePriceModalComponent } from './update-price-modal/update-price-modal.component';


import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';

import { MatListModule } from '@angular/material/list';

import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { MatSelectModule } from '@angular/material/select';

import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTreeModule } from '@angular/material/tree';
import { MatFormFieldModule } from '@angular/material/form-field'

import { MatButtonModule, MatCheckboxModule, MatIconModule, MatIconRegistry } from '@angular/material';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';
import { MatCardModule } from '@angular/material/card';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatChipsModule } from '@angular/material/chips';
import { MatMenuModule } from '@angular/material/menu';
import { MatRadioModule } from '@angular/material/radio';
import { MatSidenavModule } from '@angular/material/Sidenav';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBadgeModule } from '@angular/material/badge';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { CaptchaModule } from 'primeng/captcha';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { MultiSelectModule } from 'primeng/multiselect';
import { KeyFilterModule } from 'primeng/keyfilter';
import { TooltipModule } from 'primeng/tooltip';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { PanelModule } from 'primeng/panel';
import { InputSwitchModule } from 'primeng/inputswitch';
// import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { DialogModule } from 'primeng/dialog';
import { DataViewModule } from 'primeng/dataview';


import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';

import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { CalendarModule } from 'primeng/calendar';
import { CheckboxModule } from 'primeng/checkbox';
import { CarouselModule } from 'primeng/carousel';
import { MenuModule } from 'primeng/menu';
import { TabMenuModule } from 'primeng/tabmenu';
import { StepsModule } from 'primeng/steps';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { DataScrollerModule } from 'primeng/datascroller';

import { FieldsetModule } from 'primeng/fieldset';
import { ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { GMapModule } from 'primeng/gmap';
import { DropdownModule } from 'primeng/dropdown';
import { AllBakersComponent } from './all-bakers/all-bakers.component';
import { AllUsersComponent } from './all-users/all-users.component';
import { LogInComponent } from './log-in/log-in.component';
import { ColorPickerModule } from 'primeng/colorpicker';
import { ChartModule } from 'primeng/chart';
import { BakersGraphComponent } from './bakers-graph/bakers-graph.component';
import { GraphBakerComponent } from './graph-baker/graph-baker.component';
import { AvgGradeComponent } from './avg-grade/avg-grade.component';
import { NewLeaderBakerComponent } from './new-leader-baker/new-leader-baker.component';
import { LogInModalComponent } from './log-in-modal/log-in-modal.component';
import { OrderListModule } from 'primeng/orderlist';
// import { NgApexchartsModule } from "ng-apexcharts";






@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IdentifactionComponent,
    UpdatePriceComponent,
    UpdateDetailsComponent,
    MyRecipsComponent,
    AddRecipeComponent,
    MyGradesComponent,
    WatchRecipeComponent,


    RouteHomeComponent,
    SearchByPriceComponent,
    SearchByBakerComponent,
    SearchByTimeComponent,
    SearchByGradeComponent,
    SearchByCategoryComponent,
    AvgGradeComponent,
    FavoriteRecipeComponent,
    AllGradeComponent,
    WatchGradeComponent,
    LeaderBakerComponent,
    BakersGraphComponent,

    LogInComponent, AddGradeComponent, MyRecips2Component, AboutBakerComponent, AboutUserComponent, ChooseLogInComponent, AddRecipeNewBakerComponent, AllRecipeComponent, UpdateMyDetailsComponent, UpdatePriceModalComponent, AllBakersComponent, AllUsersComponent, BakersGraphComponent, GraphBakerComponent, NewLeaderBakerComponent, LogInModalComponent
    //, NewRecipeComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    //PRIMENG
    // CalendarModule
    // FileUploadModule,
    InputTextModule,
    // DynamicDialogModule
    MatButtonModule, MatCheckboxModule, ReactiveFormsModule, TableModule, GMapModule, MultiSelectModule, MessageModule, MessagesModule,
    TabMenuModule, FieldsetModule, DropdownModule, ChartModule, KeyFilterModule, ProgressSpinnerModule, InputSwitchModule,
    HttpClientModule, StepsModule, MatStepperModule, MatInputModule, TooltipModule,
    ButtonModule, ToolbarModule, MenuModule, AutoCompleteModule, PanelModule, DialogModule,
    AppRoutingModule, CalendarModule, MatRadioModule, MatChipsModule, MatSidenavModule, MatMenuModule, MatButtonToggleModule, BrowserAnimationsModule, MatCardModule, CheckboxModule, FileUploadModule, ToastModule, DataScrollerModule, CarouselModule, MatIconModule, DataViewModule,
    MatFormFieldModule,
    MatToolbarModule, MatDatepickerModule, MatAutocompleteModule, MatBadgeModule, MatBottomSheetModule, MatDialogModule, MatDividerModule,
    MatExpansionModule, MatGridListModule, MatListModule, MatNativeDateModule, MatRippleModule, MatPaginatorModule, MatProgressBarModule, MatProgressSpinnerModule,
    MatSelectModule, MatSliderModule, MatSlideToggleModule, MatSnackBarModule, MatSortModule, MatTableModule, MatTabsModule, MatTooltipModule, MatTreeModule, CaptchaModule,
    ColorPickerModule,
    OrderListModule,
    // NgApexchartsModule

  ],
  exports: [MatButtonModule, MatCheckboxModule],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }