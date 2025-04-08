import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(lista: string[], texto: string):string[]{
    if (!texto) return lista;
    const textoMin = texto.toLowerCase();
    return lista.filter(item => item.toLowerCase().includes(textoMin));
  } 

}
