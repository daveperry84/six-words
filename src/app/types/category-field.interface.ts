import { UntypedFormControl } from "@angular/forms";

export interface ICategoryField {
    id: number;
    title: string;
    field: UntypedFormControl;
    score: number;
    valid: boolean;
  }