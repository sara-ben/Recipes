import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { IdentifactionComponent } from './identifaction/identifaction.component';
import { UpdatePriceComponent } from './update-price/update-price.component';
import { WatchRecipeComponent } from './watch-recipe/watch-recipe.component';
import { RouteHomeComponent } from './route-home/route-home.component';
import { SearchByPriceComponent } from './search-by-price/search-by-price.component';
import { SearchByBakerComponent } from './search-by-baker/search-by-baker.component';
import { SearchByCategoryComponent } from './search-by-category/search-by-category.component';
import { SearchByGradeComponent } from './search-by-grade/search-by-grade.component';
import { SearchByTimeComponent } from './search-by-time/search-by-time.component';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { AllGradeComponent } from './all-grade/all-grade.component';
import { WatchGradeComponent } from './watch-grade/watch-grade.component';
import { LeaderBakerComponent } from './leader-baker/leader-baker.component';

import { FavoriteRecipeComponent } from './favorite-recipe/favorite-recipe.component';
import { UpdateDetailsComponent } from './update-details/update-details.component';
import { MyRecipsComponent } from './my-recips/my-recips.component';
import { AddGradeComponent } from './add-grade/add-grade.component';
import { MyRecips2Component } from './my-recips2/my-recips2.component';
import { AboutBakerComponent } from './about-baker/about-baker.component';
import { AboutUserComponent } from './about-user/about-user.component';
import { ChooseLogInComponent } from './choose-log-in/choose-log-in.component';
import { AddRecipeNewBakerComponent } from './add-recipe-new-baker/add-recipe-new-baker.component';
import { AllRecipeComponent } from './all-recipe/all-recipe.component';
import { UpdateMyDetailsComponent } from './update-my-details/update-my-details.component';
import { AllBakersComponent } from './all-bakers/all-bakers.component';
import { AllUsersComponent } from './all-users/all-users.component';
import { LogInComponent } from './log-in/log-in.component';
import { BakersGraphComponent } from './bakers-graph/bakers-graph.component';
import { AvgGradeComponent } from './avg-grade/avg-grade.component';
import { GraphBakerComponent } from './graph-baker/graph-baker.component';
import { NewLeaderBakerComponent } from './new-leader-baker/new-leader-baker.component';
//import { StepperVerticalExampleComponent } from './stepper-vertical-example/stepper-vertical-example.component';
//import { AddRecipeNewBakerComponent } from './add-recipe-new-baker/add-recipe-new-baker.component';



const routes: Routes = [
  {
    path: '', component: RouteHomeComponent, children: [
      { path: 'updatePrice', component: UpdatePriceComponent },
      { path: 'SearchByPrice', component: SearchByPriceComponent, children: [{ path: 'watchGrade/:id', component: WatchGradeComponent },] },
      { path: 'SearchByBaker', component: SearchByBakerComponent },
      { path: 'SearchByCategory', component: SearchByCategoryComponent },
      { path: 'SearchByGrade', component: SearchByGradeComponent },
      { path: 'SearchByTime', component: SearchByTimeComponent },
      { path: 'AddRecipe', component: AddRecipeComponent },
      { path: 'AddGrade', component: AddGradeComponent },
      { path: 'AvgGrade', component: AvgGradeComponent },
      { path: 'favoriteRecipe', component: FavoriteRecipeComponent },
      { path: 'AllGrade', component: AllGradeComponent, children: [{ path: 'watchGrade/:id', component: WatchGradeComponent },] },
      { path: 'LeaderBaker', component: LeaderBakerComponent },
      { path: 'newLeaderBaker', component: NewLeaderBakerComponent },
      { path: 'watchGrade', component: WatchGradeComponent },
      { path: 'LogIn', component: LogInComponent },
      { path: 'UpdateDetails/:id', component: UpdateDetailsComponent },
      { path: 'MyRecips', component: MyRecipsComponent },
      { path: 'MyRecips2', component: MyRecips2Component },
      { path: 'AllRecipe', component: AllRecipeComponent },
      { path: 'AllBakers', component: AllBakersComponent },
      { path: 'AllUsers', component: AllUsersComponent },
      { path: 'BakersGraph', component: BakersGraphComponent },
      { path: 'GraphBaker', component: GraphBakerComponent },



      // {path: 'home', component: HomeComponent,children:[
      //   { path: 'watchRecipe', component:WatchRecipeComponent},
      // ] },

      { path: 'home', component: HomeComponent }, { path: 'watchRecipe/:id', component: WatchRecipeComponent },
      { path: 'UpdateMyDetails/:id', component: UpdateMyDetailsComponent },

      //{ path: 'home', component: HomeComponent },
    ]
  },
  { path: 'identifaction', component: IdentifactionComponent },
  { path: 'aboutBaker', component: AboutBakerComponent },
  { path: 'aboutUser', component: AboutUserComponent },
  { path: 'chooseLogIn', component: ChooseLogInComponent },




  // { path: 'SearchByPrice', component: SearchByPriceComponent },
  //     { path: 'SearchByBaker', component: SearchByBakerComponent },
  //     { path: 'SearchByCategory', component: SearchByCategoryComponent },
  //     { path: 'SearchByGrade', component: SearchByGradeComponent },
  //     { path: 'SearchByTime', component: SearchByTimeComponent },
  //{ path: 'stepperVerticalExample', component: StepperVerticalExampleComponent },
  { path: 'AddRecipeNewBaker', component: AddRecipeNewBakerComponent },
  { path: 'LogIn/:id', component: LogInComponent, children: [{ path: 'AddRecipe', component: AddRecipeComponent },] },

  { path: 'AllRecipe', component: AllRecipeComponent },
];

// const routes: Routes = [{ path: '', component: AppComponent},
// { path: 'identifaction', component: IdentifactionComponent},
// { path: 'updatePrice', component: UpdatePriceComponent},
// { path: 'home', component: HomeComponent },{ path: 'watchRecipe', component:WatchRecipeComponent},
// ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
