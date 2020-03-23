import { CoreModule } from './core/core.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { CharacterComponent } from './shared/components/character/character.component';
import { CreateCharacterComponent } from './shared/components/create-character/create-character.component';
import { CharacterDatatableComponent } from './shared/components/character-datatable/character-datatable.component';

@NgModule({
  declarations: [
    AppComponent,
    CharacterComponent,
    CreateCharacterComponent,
    CharacterDatatableComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    FormsModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
