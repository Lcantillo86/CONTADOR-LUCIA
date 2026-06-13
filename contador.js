/*ASI GUARDO EL VALOR ACTUAL DEL CONTADOR QUE COMINEZA EN 0 */
let contador=0;

function incrementar(){
    /*ES UNA FORMA DE ABREBIAR QUE SUMA EL CONTADOR MAS 1*/
    contador++;

    actualizarContador();
}

function decrementar(){
   /*ES UNA FORMA DE DECIR QUE CONTADOR MENOS 1*/
    contador--;
    actualizarContador();

}

function actualizarContador(){
   //BUSCA EL ELEMENTO DIV ID CONTADOR

    const numero=document.getElementById("contador");
    //ESTA FUNCION ES LA QUE ACTUALIZA LO QUE VE EL USUARIO

    numero.textContent= contador;
     //ESTA LINEA PREGUNTA SI EL CONTADOR LLEGO A 10
    if(contador>=10){
       //ESTA LINEA MUESTRA QUE SI EL CONTADOR LLEGO A 10 ENTONCES CAMBIA A COLOR VERDE
        numero.style.color="green";
    }else{
        numero.style.color="black";
    }
    
}
