class Paciente {
    public medico: string
    private prontuario: string
    public clinicaMedica: string

    constructor (medico: string, prontuario: string, clinicaMedica: string) {
        this.medico = medico;
        this.prontuario = prontuario;
        this. clinicaMedica = clinicaMedica;
    }
    public ChangeclinicaMedica (clinicaMedica: string) {
        this.clinicaMedica = clinicaMedica;
    }
}   
    const paciente = new Paciente ('Fisioterapeuta', 'Atualizado', 'Clinica Campos Elisios');

    console.table (paciente);