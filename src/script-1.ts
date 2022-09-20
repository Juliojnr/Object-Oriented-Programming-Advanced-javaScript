class Patinete { 
    private maxSpeed: string
    private color: string
    public speed: string
    public autoOrNot: boolean  

    constructor (maxspeed: string, color: string, speed: string, autoOrNot: boolean,){
        this.autoOrNot = autoOrNot;
        this.color = color;
        this.maxSpeed = maxspeed;
        this.speed = speed
    }
    public ChangeAutoOrNot (autoOrNot: boolean){
        this.autoOrNot = autoOrNot;
    }
    public ChangeSpeed (speed: string){
        this.speed = speed;
    }
}
    const patinete = new Patinete ('30 Km/H', 'Green', '15 Km/H', true);

    console.table(patinete);
