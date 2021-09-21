function paciente (nombre, edad, rut, diagnosico) {
        this.nombre = nombre;
        this.edad = edad;
        this.rut = rut;
        this.diagnosico = diagnosico;
    var _nombre = nombre
        Object.defineProperty(this, "_getpaciente", {
            get: function() {
                return _nombre
            }
        })
        Object.defineProperty(this, "_setpaciente", {
            set: function(nom){
                _nombre = nom
            }
        })        
}

paciente.prototype.getpaciente = function(){
    return this._getpaciente
}

paciente.prototype.setpaciente = function(nom){
    return this._setpaciente = nom
}

var paciente1 = new paciente("Juan", 30, "17.103.697-6", "SBO")


function consultorio (nombre, pacientes){
    this.nombre = nombre;
    this.pacientes = pacientes || [];
}
var consultorio1 = new consultorio("Consultorio Desafio Latam", [paciente1])