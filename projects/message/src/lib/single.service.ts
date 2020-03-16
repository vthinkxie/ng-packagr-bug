import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SingleService {
  cacheMap = new Map();
  constructor() { }
}
