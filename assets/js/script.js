//Función constructora de consultorio:
function Consultorio(nombre, pacientes) {
  this.nombre = nombre;
  this.pacientes = pacientes || [];
}

//Función constructora de pacientes:
function Paciente(nombre, rut, edad, diagnostico) {
  let _nombre = nombre;
  let _rut = rut;
  let _edad = edad;
  let _diagnostico = diagnostico;

  //Getters y Setters para NOMBRE:
  Object.defineProperty(this, "_nombre", {
    //Obtenemos los datos del atributo:
    get: function () {
      return _nombre;
    },
    //Modificamos los datos del atributo:
    set: function (nombre) {
      _nombre = nombre;
    },
  });

  //Getters y Setters para EDAD:
  Object.defineProperty(this, "_edad", {
    get: function () {
      return _edad;
    },
    set: function (edad) {
      _edad = edad;
    },
  });

  //Getters y Setters para RUT:
  Object.defineProperty(this, "_rut", {
    get: function () {
      return _rut;
    },
    set: function (rut) {
      _rut = rut;
    },
  });

  //Getters y Setters para DIAGNÓSTICO:
  Object.defineProperty(this, "_diagnostico", {
    get: function () {
      return _diagnostico;
    },
    set: function (diagnostico) {
      _diagnostico = diagnostico;
    },
  });
}

//Implementar métodos Getters y Setters para poder acceder y modificar los datos de los pacientes:

//Creamos el método Getters, que nos permitirá obtener el valor del atributo:
//Getters para prototype nombre:
Paciente.prototype.getNombre = function () {
  return this._nombre;
};
//Setters para prototype nombre:
Paciente.prototype.setNombre = function (nombre) {
  this._nombre = nombre;
};

//Getters para prototype edad:
Paciente.prototype.getEdad = function () {
  return this._edad;
};
//Setters para prototype edad:
Paciente.prototype.setEdad = function (edad) {
  this._edad = edad;
};

//Getters para prototype RUT:
Paciente.prototype.getRut = function () {
  return this._rut;
};
//Setters para prototype RUT:
Paciente.prototype.setRut = function (rut) {
  this._rut = rut;
};

//Getters para prototype diagnóstico:
Paciente.prototype.getDiagnos = function () {
  return this._diagnostico;
};
//Setters para prototype diagnóstico:
Paciente.prototype.setDiagnostico = function (diagnostico) {
  this._diagnostico = diagnostico;
};

//Solicitar un objeto a una clase:
let persona1 = new Paciente("Jorge", 128227962, 42, "Resfrío");
let persona2 = new Paciente("Pedro", 152356358, 36, "Covid");
let persona3 = new Paciente("Maria", 150007896, 39, "Gripe");
let persona4 = new Paciente("Lorena", 154563218, 32, "Amigdalitis");
let persona5 = new Paciente("Agustin", 125698765, 46, "Apendicitis");
// console.log(persona1.getDiagnos());
// persona1.setDiagnostico("Gustavo");
// console.log(persona1.getDiagnos());
let arregloPaciente = [persona1, persona2, persona3, persona4, persona5];
let consultorio = new Consultorio("nombre", arregloPaciente);
//Buscar paciente por nombre:
Consultorio.prototype.BuscPacientePorNombre = function (nombre) {
  let paciente = this.pacientes.find((p) => p.getNombre() === nombre);
  if (paciente) return paciente;
  return "El nombre del paciente no existe";
};
console.log(consultorio.BuscPacientePorNombre("Leon"));
Consultorio.prototype.mostrarTodosLosPacientes = function () {
  const arrPacientes = this.pacientes.map((paciente) => {
    return {
      nombre: paciente.getNombre(),
      rut: paciente.getRut(),
      edad: paciente.getEdad(),
      diagnostico: paciente.getDiagnos(),
    };
  });
  console.log(arrPacientes);
};
consultorio.mostrarTodosLosPacientes();