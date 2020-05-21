import { PipeTransform,Pipe } from '@angular/core';


import { pipe } from 'rxjs';
import { doctor } from '../doctorsignup/doctor.model';

@Pipe({
    name: 'filter'
})

export class DoctDetailsPipe implements PipeTransform{
    transform(doctor: doctor[],searchTerm:string): doctor[]{
        if(!doctor || !searchTerm){
            return doctor;
        }

        return doctor.filter(queries=>
            queries.Specialisation.toLowerCase().indexOf(searchTerm.toLowerCase()) !==-1);
    }
}