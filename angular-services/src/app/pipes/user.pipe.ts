// import { pipe } from 'rxjs';

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name:"appname"

})

export class UserPipe implements PipeTransform{
    transform(val,userid){
        return userid+""+val

    }
}