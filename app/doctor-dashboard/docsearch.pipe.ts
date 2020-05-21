import { PipeTransform,Pipe } from '@angular/core';
import { query } from '../../../Backend/model/query';

import { pipe } from 'rxjs';

@Pipe({
    name: 'filter'
})

export class DoctSearchPipe implements PipeTransform{
    transform(query: query[],searchTerm:string): query[]{
        if(!query || !searchTerm){
            return query;
        }

        return query.filter(queries=>
            queries.query.toLowerCase().indexOf(searchTerm.toLowerCase()) !==-1);
    }
}