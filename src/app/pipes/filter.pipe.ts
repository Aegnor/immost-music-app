import {Pipe, PipeTransform} from '@angular/core'

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(array: object[], search: string = ''): object[] {
    if (!search.trim()) {
      return array
    }

    return array.filter(elem => {
      // @ts-ignore
      return elem.name.toLowerCase().includes(search.toLowerCase())
    })
  }

}
