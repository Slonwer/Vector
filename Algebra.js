class Vector {
    constructor(elements){
        this.elements = elements
    }
}
add(vector) 
    if (this.elements.length !== vector.elements.length) {
      throw new Error('As dimensões dos vetores são diferentes.');
    }

    const result = [];
    for (let i = 0; i < this.elements.length; i++) {
      result.push(this.elements[i] + vector.elements[i]);
    }

    return new Vector(result);

    subtract(vector) 
        if (this.elements.length !== vector.elements.length) {
          throw new Error('As dimensões dos vetores são diferentes.');
        }
        