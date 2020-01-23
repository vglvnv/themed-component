import { ThemeDirective } from "./theme.directive";

export interface ThemedComponent {
  moduleTheme: string;
  directiveTheme: ThemeDirective;
}