//Implemento la clase Auto

export class Auto {
    // estado de la clase: variables
    maker: string;
    private model: string;
    private year: number;
    // constructor de la clase
    constructor(maker: string, model: string, year?: number) {
      this.maker = maker;
      this.model = model;
      year ? (this.year = year) : (this.year = Math.floor(Math.random()*(2023-1980)+1980));
    }
  }
  
  
  