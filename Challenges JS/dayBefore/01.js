/*
Crea una clase para modelar un objeto «teléfono móvil» que tenga al menos estas
propiedades CPU, RAM, Almacenamiento, Ancho, Alto y numCamaras.
✗ Añade también un método llamado toString() que muestre en pantalla la
información del objeto creado.
✗ Crea cuatro objetos con distintos números de parámetros en la creación y muestra
en pantalla la información de cada objeto.
*/

class TelefonoMovil {
  constructor(CPU, RAM, Almacenamiento, Ancho, Alto, numCamaras) {
    this.CPU = CPU;
    this.RAM = RAM;
    this.Almacenamiento = Almacenamiento;
    this.Ancho = Ancho;
    this.Alto = Alto;
    this.numCamaras = numCamaras;
  }

  toString() {
    `El telefono tine: \nCPU: ${this.CPU}\nRAM: ${this.RAM}\nAlmacenamiento: ${this.Almacenamiento}\nAncho: ${this.Ancho}\nAlto: ${this.Alto}\nNúmero de Cámaras: ${this.numCamaras}`;
  }
}

// Crear objetos con distintos números de parámetros
const telefono1 = new TelefonoMovil(
  "Snapdragon 865",
  "8GB",
  "128GB",
  "6 pulgadas",
  "150mm",
  3
);
const telefono2 = new TelefonoMovil(
  "Exynos 990",
  "6GB",
  "256GB",
  "6.2 pulgadas",
  "155mm",
  4
);
const telefono3 = new TelefonoMovil(
  "A13 Bionic",
  "4GB",
  "64GB",
  "5.8 pulgadas",
  "143mm",
  2
);
const telefono4 = new TelefonoMovil(
  "Kirin 980",
  "12GB",
  "512GB",
  "6.4 pulgadas",
  "160mm",
  5
);

console.log(telefono1.toString());
console.log(telefono2.toString());
console.log(telefono3.toString());
console.log(telefono4.toString());
