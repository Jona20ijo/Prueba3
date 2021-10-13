function dimeTipoMotor() {

    var tipoMotor;

tipoMotor = prompt('Porfavor introduzca el valor de la bomba ');
tipoMotor = Number(tipoMotor);
switch(tipoMotor){
case 0:
    alert('No hay establecido un valor definido para el tipo de bomba');
break;

case 1:
    alert('La bomba es una bomba de agua');
break;

case 2:
    alert('La bomba es una bomba de gasolina');
break;
    
case 3:
    alert('La bomba es una bomba de hormigón');
break;

case 4:
    alert('La bomba es una bomba de pasta alimenticia');
break;

default:
    alert('No existe un valor valido para ese tipo de bomba');  
}
    
}       