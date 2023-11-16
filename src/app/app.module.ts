import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PostListComponent } from './post/post-list/post-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrefixPipe } from './pipes/prefix.pipe';
import { SummaryPipe } from './pipes/summary.pipe';
import { PostService } from './services/post.service';
import { PostDetailComponent } from './post/post-detail/post-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SignalsComponent } from './signals/signals.component';
import { CommonModule } from '@angular/common';
import { LockInputComponent } from './lock-input/lock-input.component';
import { ValueAccessorComponent } from './value-accessor-component/value-accessor-component.component';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    NavbarComponent,
    PostListComponent,
    PrefixPipe,
    SummaryPipe,
    PostDetailComponent,
    PageNotFoundComponent,
    SignalsComponent,
    LockInputComponent,
    ValueAccessorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
