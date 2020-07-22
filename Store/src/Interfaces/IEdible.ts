import {TypeEdible} from '../Enums/TypeEdible'
export interface IEdible{     
    showCalories():number;
    calculateCaloriesPer100gr():number;
    showType():TypeEdible;
}
