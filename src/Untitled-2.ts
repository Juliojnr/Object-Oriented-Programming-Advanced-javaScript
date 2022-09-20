class ContaBancaria {
    private tipoconta: string
    private numeroDaConta: number
    public pix: string


    constructor (tipoconta: string, numeroDaConta: number, pix: string) {
        this.numeroDaConta = numeroDaConta;
        this.tipoconta = tipoconta;
        this.pix = pix;
    }

    public ChangePix (pix: string) {
        this.pix = pix;
    }
}
    const Contabancaria = new ContaBancaria ('Corrente', 12305609, 'julio123@gmail.com');

    console.table(Contabancaria);
    
