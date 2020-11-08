import { AbstractControl } from '@angular/forms';


export class AppValidators {
    public static maxLengthAndTrimValidator(maxLength: number) {
        return (control: AbstractControl): { [key: string]: any } | null => {
            const val: string = control.value;
            if (val && val.toLocaleLowerCase().trim().length > maxLength) {
                return { "maxLength": true }
            }
            return null
        }
    }

    public static emptyFieldValidator() {
        return (control: AbstractControl): { [key: string]: any } | null => {
            let val: string = control.value;
            if (val && val.toLocaleLowerCase().trim() == '') {
                return { "emptyField": true }
            }
            return null
        }
    }
}