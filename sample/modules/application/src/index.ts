import { Calcular } from 'typescript-module-calc';

const PI = 3.14;

enum TipoFiguraGeométrica {
  CÍRCULO,
  TRIÂNGULO,
  RETÂNGULO,
}

interface FiguraGeométrica {
  area: number;
  perímetro: number;
  tipo: TipoFiguraGeométrica;
}

interface Círculo extends FiguraGeométrica {
  raio: number;
}

function geradorDeCírculo(raio: number): Círculo {
  return {
    area: Calcular.multiplicar([2, PI, raio]),
    perímetro: Calcular.multiplicar([PI, Calcular.potenciar(raio, 2)]),
    tipo: TipoFiguraGeométrica.CÍRCULO,
    raio
  }
}

function geradorDeRetângulo(altura: number, largura: number): FiguraGeométrica {
  return {
    area: Calcular.multiplicar([altura, largura]),
    perímetro: Calcular.multiplicar([2, altura]) + Calcular.multiplicar([2, largura]),
    tipo: TipoFiguraGeométrica.RETÂNGULO
  }
}

const círculo: FiguraGeométrica = geradorDeCírculo(30);
const retângulo = geradorDeRetângulo(40, 20);

console.log('círculo', círculo);
console.log('retângulo', retângulo);