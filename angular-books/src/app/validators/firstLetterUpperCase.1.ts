import { AbstractControl, ValidatorFn } from "@angular/forms";


export function firstLetterUpperCase(): ValidatorFn {
    return (control: AbstractControl) => {
      const value = control.value as string;
  
      if (!value) {
        return null; // Return null if the value is null or undefined
      }
  
      if (value.length === 0) {
        return null; // Return null if the value is empty
      }
  
      const firstLetter = value[0];
      if (firstLetter !== firstLetter.toUpperCase()) {
        return {
          firstLetterUpperCase: {
            message: 'The first letter must be uppercase'
          }
        };
      }
      return null; // Return null if the validation passes
    };
  }
