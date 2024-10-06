import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customCurrency'
})
export class CustomCurrencyPipe implements PipeTransform {

  transform(value: number, currencyCode: string = 'TND'): string {
    // Si la valeur est nulle ou non définie, retourner une chaîne vide
    if (value == null) {
      return '';
    }

    // Formater la valeur en utilisant la méthode toLocaleString
    return value.toLocaleString('fr-TN', {
      style: 'currency',
      currency: currencyCode,
      minimumFractionDigits: 3
    });
  }
}
