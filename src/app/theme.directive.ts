import { Directive, Input } from "@angular/core";

@Directive({
  selector: "[appTheme]"
})
export class ThemeDirective {
  @Input() appTheme: string;

  constructor() {}
}
