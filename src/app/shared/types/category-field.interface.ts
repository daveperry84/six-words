import { FormControl } from "@angular/forms";

export interface ICategoryField {
    id: string;
    title: string;
    field: FormControl;
    score: number;
    valid: boolean;
  }