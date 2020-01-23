import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { ButtonComponent } from "./button/button.component";
import { ThemeDirective } from "./theme.directive";
import { themeInjectorToken } from "./theme.injector";

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent, ButtonComponent, ThemeDirective],
  bootstrap: [AppComponent],
  providers: [{ provide: themeInjectorToken, useValue: "nsi" }]
})
export class AppModule {}
