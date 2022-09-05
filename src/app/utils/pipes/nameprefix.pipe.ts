import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'NamePrefix'
})

export class NamePrefixPipe implements PipeTransform {
    transform(value: string): string {
        switch (value){
            case "Male":
                return "Mr.";
            case "Female":
                return "Mrs"
            default: return ""
        }
        }
}