let result = function binToDec(bin){
    let n =  Array.from(bin);
    let potencia = n.length-1;
    let numero=0;
    for(let i=0; i<n.length; i++){
        numero += parseInt(n[i])*Math.pow(2, potencia);
        potencia--;
    }
    return numero;
}

function print(){
    let valor = document.getElementById('binary').value;
    let comp = isNaN(valor) ? true : false;
    if(comp == true){
        alert("ingrese un numero");
    } else {
        alert(result(valor));
    }
}