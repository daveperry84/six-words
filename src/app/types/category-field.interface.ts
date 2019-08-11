import { FormControl } from "@angular/forms";

export interface ICategoryField {
    id: number;
    title: string;
    field: FormControl;
    score: number;
    valid: boolean;
  }