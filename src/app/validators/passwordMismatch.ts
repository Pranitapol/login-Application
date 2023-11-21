import { AbstractControl } from "@angular/forms";


export function passwordMismatch(password:string,confirmPassword:string){
   return function(form:AbstractControl){
        const passwordValue=form.get(password)?.value
        const confirmPasswordvalue=form.get(confirmPassword)?.value
        if(passwordValue===confirmPasswordvalue){
            return null;
        }
        return {passwordMismatchErr:true}
    }
}