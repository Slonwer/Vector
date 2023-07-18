class Vector {
    constructor(elements) {
      this.elements = elements;
    }
  
    add(vector) {
      if (this.elements.length !== vector.elements.length) {
        throw new Error('As dimensões dos vetores são diferentes.');
      }
  
      const result = [];
      for (let i = 0; i < this.elements.length; i++) {
        result.push(this.elements[i] + vector.elements[i]);
      }
  
      return new Vector(result);
    }
  
    subtract(vector) {
      if (this.elements.length !== vector.elements.length) {
        throw new Error('As dimensões dos vetores são diferentes.');
      }
  
      const result = [];
      for (let i = 0; i < this.elements.length; i++) {
        result.push(this.elements[i] - vector.elements[i]);
      }
  
      return new Vector(result);
    }
  
    dot(vector) {
      if (this.elements.length !== vector.elements.length) {
        throw new Error('As dimensões dos vetores são diferentes.');
      }
  
      let result = 0;
      for (let i = 0; i < this.elements.length; i++) {
        result += this.elements[i] * vector.elements[i];
      }
  
      return result;
    }
  
    scale(scalar) {
      const result = [];
      for (let i = 0; i < this.elements.length; i++) {
        result.push(this.elements[i] * scalar);
      }
  
      return new Vector(result);
    }
  
    magnitude() {
      let sumOfSquares = 0;
      for (let i = 0; i < this.elements.length; i++) {
        sumOfSquares += this.elements[i] ** 2;
      }
  
      return Math.sqrt(sumOfSquares);
    }
  }
  
  class Matrix {
    constructor(rows, columns) {
      this.rows = rows;
      this.columns = columns;
      this.elements = [];
  
      for (let i = 0; i < rows; i++) {
        const row = [];
        for (let j = 0; j < columns; j++) {
          row.push(0);
        }
        this.elements.push(row);
      }
    }
  
    get(row, column) {
      return this.elements[row][column];
    }
  
    set(row, column, value) {
      this.elements[row][column] = value;
    }
  
    add(matrix) {
      if (this.rows !== matrix.rows || this.columns !== matrix.columns) {
        throw new Error('As dimensões das matrizes são diferentes.');
      }
  
      const result = new Matrix(this.rows, this.columns);
      for (let i = 0; i < this.rows; i++) {
        for (let j = 0; j < this.columns; j++) {
          result.set(i, j, this.get(i, j) + matrix.get(i, j));
        }
      }
  
      return result;
    }
  
    subtract(matrix) {
      if (this.rows !== matrix.rows || this.columns !== matrix.columns) {
        throw new Error('As dimensões das matrizes são diferentes.');
      }
  
      const result = new Matrix(this.rows, this.columns);
      for (let i = 0; i < this.rows; i++) {
        for (let j = 0; j < this.columns; j++) {
          result.set(i, j, this.get(i, j) - matrix.get(i, j));
        }
      }
  
      return result;
    }
  
    multiply(matrix) {
      if (this.columns !== matrix.rows) {
        throw new Error('O número de colunas da primeira matriz é diferente do número de linhas da segunda matriz.');
      }
  
      const result = new Matrix(this.rows, matrix.columns);
      for (let i = 0; i < this.rows; i++) {
        for (let j = 0; j < matrix.columns; j++) {
          let sum = 0;
          for (let k = 0; k < this.columns; k++) {
            sum += this.get(i, k) * matrix.get(k, j);
          }
          result.set(i, j, sum);
        }
      }
  
      return result;
    }
  }
  const vector1 = new Vector([1, 2, 3]);
  const vector2 = new Vector([4, 5, 6]);
  const vector3 = new Vector([8,9,10]);
  
  const vectorSum = vector1.add(vector2);
  console.log(vectorSum.elements); // Output: [5, 7, 9]
  
  const matrix1 = new Matrix(2, 2);
  matrix1.set(0, 0, 1);
  matrix1.set(0, 1, 2);
  matrix1.set(1, 0, 3);
  matrix1.set(1, 1, 4);
  
  const matrix2 = new Matrix(2, 2);
  matrix2.set(0, 0, 5);
  matrix2.set(0, 1, 6);
  matrix2.set(1, 0, 7);
  matrix2.set(1, 1, 8);

  const matrix3 = new Matrix (2,2);
  matrix2.set(0, 0, 8);
  matrix2.set(0, 1, 9);
  matrix2.set(1, 0, 10);
  matrix2.set(1, 1, 11);
  
  const matrixProduct = matrix1.multiply(matrix2);
  console.log(matrixProduct.elements); // Output: [[19, 22], [43, 50]]
  
