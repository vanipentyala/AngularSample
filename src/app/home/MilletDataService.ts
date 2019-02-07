
import{Injectable} from '@angular/core';
import { IMilletData } from './IMilletData';
@Injectable()
export class MilletDataService
{
getMilletData():IMilletData[]
{
return [

    {MilletName:'Pearl Millet',Fiber:'1.3',Iron:'16.9',Calicum:'38',Minerals:'2.3',Protein:'10.6',water:'10'},
  {MilletName:'Finger Millet',Fiber:'3.6',Iron:'3.9',Calicum:'344',Minerals:'2.7',Protein:'7.3',water:'10'}, 
  {MilletName:'FoxTail Millet',Fiber:'3.6',Iron:'3.9',Calicum:'344',Minerals:'2.7',Protein:'7.3',water:'10'},
  {MilletName:'Proso Millet',Fiber:'3.6',Iron:'3.9',Calicum:'344',Minerals:'2.7',Protein:'7.3',water:'10'},
  {MilletName:'Kodo Millet',Fiber:'3.6',Iron:'3.9',Calicum:'344',Minerals:'2.7',Protein:'7.3',water:'10'},
  {MilletName:'Little Millet',Fiber:'3.6',Iron:'3.9',Calicum:'344',Minerals:'2.7',Protein:'7.3',water:'10'},
  {MilletName:'Barnyard Millet',Fiber:'3.6',Iron:'3.9',Calicum:'344',Minerals:'2.7',Protein:'7.3',water:'10'}
]
}


}
