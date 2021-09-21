function Paciente (nombre, edad, rut, diagnostico) {
        // this.nombre = nombre;
        // this.edad = edad;
        // this.rut = rut;
        // this.diagnosico = diagnostico;
    var _nombre = nombre
        Object.defineProperty(this, "_getNombre", {
            get: function() {
                return _nombre
            }
        });
        Object.defineProperty(this, "_setNombre", {
            set: function(nombre){
                _nombre = nombre
            }
        }); 
    var _edad = edad
        Object.defineProperty(this, "_getEdad", {
            get: function() {
                return _edad
            }
        });
        Object.defineProperty(this, "_setEdad", {
            set: function(edad){
                _edad = edad
            }
        });      
    var _rut = rut
        Object.defineProperty(this, "_getRut", {
            get: function() {
                return _rut
            }
        });
        Object.defineProperty(this, "_setRut", {
            set: function(rut){
                _rut = rut
            }
        });       
    var _diagnostico = diagnostico
        Object.defineProperty(this, "_getDiagnostico", {
            get: function() {
                return _diagnostico
            }
        });
        Object.defineProperty(this, "_setDiagnostico", {
            set: function(diagnostico){
                _diagnostico = diagnostico
            }
        });             
}

Paciente.prototype.getNombre = function(){
    return this._getNombre;
};

Paciente.prototype.setNombre = function(nombre){
    this._setNombre = nombre;
};

Paciente.prototype.getEdad = function(){
    return this._getEdad;
};

Paciente.prototype.setNombre = function(edad){
    this._setEdad = edad;
};

Paciente.prototype.getRut = function(){
    return this._getRut;
};

Paciente.prototype.setRut = function(rut){
    this._setRut = rut;
};

Paciente.prototype.getDiagnostico = function(){
    return this._getDiagnostico;
};

Paciente.prototype.setDiagnostico = function(diagnostico){
    this._setDiagnostico = diagnostico;
};

var paciente1 = new Paciente("Juan", 32, "17.103.697-6", "SBO");


function Consultorio (nombre, pacientes){
    this.nombre = nombre;
    this.pacientes = pacientes || [];
}

Consultorio.prototype.agregar_paciente = function(_paciente){
    this.personas.push(_paciente);
}

var consultorio1 = new Consultorio("Consultorio Desafio Latam", [paciente1])