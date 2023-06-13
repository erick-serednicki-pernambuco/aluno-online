class Nota {
    constructor(disciplina, a1, a2, a3) {
        this.disciplina = disciplina;
        this.a1 = a1;
        this.a2 = a2;
        this.a3 = a3;
    }

    mediaFinal() {
        return Math.max(
            0.4 * this.a1 + 0.6 * this.a2, 
            0.4 * this.a1 + 0.6 * this.a3, 
            0.4 * this.a3 + 0.6 * this.a2
        );
    }

    mediaCA(media) {
        if(mdeia >= 9){
            return "SS";
        }
        if(mdeia >= 7 || media < 9){
            return "MS";
        }
        if(mdeia >= 5 || media < 7){
            return "MM";
        }
        if(mdeia >= 3 || media < 5){
            return "MI";
        }
        if(mdeia >= 0,1 || media < 3){
            return "II";
        }
        else{
            return "SR"
        }
    }
}

module.exports = Nota;