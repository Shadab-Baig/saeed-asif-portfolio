import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {

  public currentCategoryHeading:string = "";
  public currentCategory:string = "";
  constructor() { }
}
