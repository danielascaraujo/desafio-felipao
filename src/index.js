let heroi = ["Joselita", 10050]

if (heroi[1] < 1000) {
    heroi.push("Ferro");
} else if (heroi[1] <= 2000) {
    heroi.push("Bronze");
} else if (heroi[1] <= 5000){
    heroi.push("Prata");
} else if (heroi[1] <= 7000) {
    heroi.push("Ouro");
} else if (heroi[1] <= 8000) {
    heroi.push("Platina");
} else if (heroi[1] <= 9000) {
    heroi.push("Ascendente");
} else if (heroi[1] <= 10000) {
    heroi.push("Imortal");
} else {
    heroi.push("Radiante");
}

console.log("O Herói de nome " + heroi[0] + " está no nível de " + heroi[2])

