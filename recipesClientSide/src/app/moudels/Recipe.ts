import { Time } from '@angular/common'

export class RecipeE
{
id:number
name:string  
bakerId:number 
time :Time
numPortion:number
image:string
instruction :string
isMax:boolean=false;
public avgGrade?:number=0;
}