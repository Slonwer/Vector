# Vector
Este código implementa duas classes: Vector (vetor) e Matrix (matriz), que fornecem operações matemáticas básicas para vetores e matrizes.

A classe Vector tem os seguintes métodos:

constructor(elements): O construtor recebe um array elements que representa os elementos do vetor e armazena esse array na propriedade this.elements.

add(vector): Este método recebe outro vetor como parâmetro e verifica se os dois vetores têm o mesmo comprimento. Se não tiverem o mesmo comprimento, uma exceção é lançada. Caso contrário, o método cria um novo vetor resultante, adicionando os elementos correspondentes dos dois vetores originais. O novo vetor é retornado.

subtract(vector): Semelhante ao método add, este método recebe um vetor como parâmetro, verifica se os dois vetores têm o mesmo comprimento e cria um novo vetor resultante. No entanto, neste caso, os elementos correspondentes dos dois vetores originais são subtraídos para obter os elementos do vetor resultante.

dot(vector): Novamente, este método recebe um vetor como parâmetro e verifica se os dois vetores têm o mesmo comprimento. Em seguida, calcula o produto escalar dos dois vetores, multiplicando os elementos correspondentes e somando os resultados.

scale(scalar): Este método recebe um valor escalar como parâmetro e multiplica cada elemento do vetor por esse escalar, criando um novo vetor resultante.

magnitude(): Este método calcula a magnitude (ou norma) do vetor, que é a raiz quadrada da soma dos quadrados de seus elementos.

A classe Matrix tem os seguintes métodos:

constructor(rows, columns): O construtor recebe o número de linhas e colunas da matriz e inicializa uma matriz vazia com essas dimensões. Os elementos são armazenados em this.elements como um array bidimensional.

get(row, column): Este método retorna o valor de um elemento específico na posição (linha, coluna) da matriz.

set(row, column, value): Este método define o valor de um elemento específico na posição (linha, coluna) da matriz.

add(matrix): Este método recebe outra matriz como parâmetro e verifica se as duas matrizes têm o mesmo número de linhas e colunas. Caso contrário, uma exceção é lançada. Se as dimensões forem iguais, o método cria uma nova matriz resultante, adicionando os elementos correspondentes das duas matrizes originais.

subtract(matrix): Semelhante ao método add, este método recebe uma matriz como parâmetro, verifica se as duas matrizes têm o mesmo número de linhas e colunas e cria uma nova matriz resultante, subtraindo os elementos correspondentes das duas matrizes originais.

multiply(matrix): Este método recebe outra matriz como parâmetro e verifica se o número de colunas da primeira matriz é igual ao número de linhas da segunda matriz. Caso contrário, uma exceção é lançada. Se as dimensões forem válidas, o método cria uma nova matriz resultante e realiza a multiplicação de matrizes convencional, onde cada elemento da matriz resultante é calculado como o produto interno de uma linha da primeira matriz por uma coluna da segunda matriz.

No final do código, são criados dois vetores vector1 e vector2, e uma soma de vetores é calculada usando o método add da classe Vector. O resultado é impresso no console.

Também são criadas duas matrizes matrix1 e matrix2, e um produto de matrizes é calculado usando o método multiply da classe Matrix. O resultado é impresso no console.
![Image Description](https://cdn.britannica.com/72/77672-004-AB0064CA/Vector-parallelogram-tails-method-subtraction-addition-vectors.jpg)
