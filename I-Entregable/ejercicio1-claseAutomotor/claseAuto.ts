//Implemento la clase auto

export class Auto {
    // estado de la clase: variables
    brand: string;
    private model: string;
    private year: number;
    // constructor de la clase
    constructor(brand: string, model: string, year?: number) {
      this.brand = brand;
      this.model = model;
      year ? (this.year = year) : (this.year = Math.floor(Math.random()*(2023-1980)+1980));
    }
  }
  
  
  