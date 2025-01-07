import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedDataServiceService {

  constructor() { }
  private comptes: any;
  private portefeuilles: any;
  private userId = 1;

  setPortefeuilles(data: any): void {
    this.portefeuilles = data;
  }

  getPortefeuilles(): any {
    return this.portefeuilles;
  }

  setComptes(data: any): void {
    this.comptes = data;
  }

  getComptes(): any {
    return this.comptes;
  }

  setUserId(id: number): void {
    this.userId = id;
  }
  getUserId(): number {
    return this.userId;
  }
}
