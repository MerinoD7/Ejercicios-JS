
let clave = prompt ("Ingrese la Clave");
let minutos = prompt ("Ingrese Minutos de Lamada");
let tarifa = 0;


switch(clave){
    case 12:
        tarifa = minutos * 2.00;
        if(minutos < 30){
            tarifa = (tarifa * 0.10) - tarifa;
          alert("Zona: America del Norte" + "\n" +
                        "Numero de minutos: " + minutos + "\n" +
                        "Tarifa: " + Math.abs(tarifa));
        }else{
            alert("Zona: America del Norte" + "\n" +
                        "Numero de minutos: " + minutos + "\n" +
                        "Tarifa: " + tarifa);
        }
        break;
    case 15:
        tarifa = minutos * 2.20;
        if(minutos < 30){
            tarifa = (tarifa * 0.10) - tarifa;
            alert("Zona: America Central" + "\n" +
                        "Numero de minutos: " + minutos + "\n" +
                        "Tarifa: " + Math.abs(tarifa));
        }else{
           alert("Zona: America Central" + "\n" +
                        "Numero de minutos: " + minutos + "\n" +
                        "Tarifa: " + tarifa);
        }
        break;
    case 18:
        tarifa = minutos * 4.50;
        if(minutos < 30){
            tarifa = (tarifa * 0.10) - tarifa;
            alert("Zona: America del Sur" + "\n" +
                        "Numero de minutos: " + minutos + "\n" +
                        "Tarifa: " + Math.abs(tarifa));
        }else{
            alert("Zona: America del Sur" + "\n" +
                        "Numero de minutos: " + minutos + "\n" +
                        "Tarifa: " + tarifa);
        }
        break;
    case 19:
        tarifa = minutos * 3.50;
        if(minutos < 30){
            tarifa = (tarifa * 0.10) - tarifa;
            alert("Zona: Europa" + "\n" +
                        "Numero de minutos: " + minutos + "\n" +
                        "Tarifa: " + Math.abs(tarifa));
        }else{
            alert("Zona: Europa" + "\n" +
                        "Numero de minutos: " + minutos + "\n" +
                        "Tarifa: " + tarifa);
        }
        break;
    case 23:
        tarifa = minutos * 6.00;
        if(minutos < 30){
            tarifa = (tarifa * 0.10) - tarifa;
            alert("Zona: Asia" + "\n" +
                        "Numero de minutos: " + minutos + "\n" +
                        "Tarifa: " + Math.abs(tarifa));
        }else{
            alert("Zona: Asia" + "\n" +
                        "Numero de minutos: " + minutos + "\n" +
                        "Tarifa: " + tarifa);
        }
        break;
    case 25:
        tarifa = minutos * 6.00;
        if(minutos < 30){
            tarifa = (tarifa * 0.10) - tarifa;
            alert("Zona: Africa" + "\n" +
                        "Numero de minutos: " + minutos + "\n" +
                        "Tarifa: " + Math.abs(tarifa));
        }else{
            alert("Zona: Africa" + "\n" +
                        "Numero de minutos: " + minutos + "\n" +
                        "Tarifa: " + tarifa);
        }
        break;
    case 29:
        tarifa = minutos * 5.00;
        if(minutos < 30){
            tarifa = (tarifa * 0.10) - tarifa;
            alert("Zona: Oceania" + "\n" +
                        "Numero de minutos: " + minutos + "\n" +
                        "Tarifa: " + Math.abs(tarifa));
        }else{
            alert("Zona: Oceania" + "\n" +
                        "Numero de minutos: " + minutos + "\n" +
                        "Tarifa: " + tarifa);
        }
        break;
}