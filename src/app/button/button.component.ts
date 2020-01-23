import { Component, OnInit, Optional, Self, Inject } from "@angular/core";
import { ThemeDirective } from "../theme.directive";
import { themeInjectorToken } from "../theme.injector";
import { ThemedComponent } from '../themed-component'

@Component({
  selector: "app-button",
  templateUrl: "./button.component.html",
  styleUrls: ["./button.component.css", "./themes/nsi.css"]
})
export class ButtonComponent implements OnInit, ThemedComponent {
  constructor(
    @Optional() @Inject(themeInjectorToken) public moduleTheme: string,
    @Optional() @Self() public directiveTheme: ThemeDirective
  ) {}

  ngOnInit() {}
}
