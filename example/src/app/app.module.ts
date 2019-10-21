import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormlyMatDatepickerModule } from "@ngx-formly/material/datepicker";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from "./app.component";
import { ReactiveFormsModule } from "@angular/forms";
import { FormlyModule } from "@ngx-formly/core";
import { FormlyMaterialModule } from "@ngx-formly/material";
import { WithoutHelpersComponent } from "./without-helpers/without-helpers.component";
import { WithHelpersComponent } from "./with-helpers/with-helpers.component";
import { MatNativeDateModule } from "@angular/material/core";

@NgModule({
  declarations: [AppComponent, WithoutHelpersComponent, WithHelpersComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormlyModule.forRoot(),
    FormlyMaterialModule,
    FormlyMatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
