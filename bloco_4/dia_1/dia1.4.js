let Eicke = 50

switch (Eicke) {
    case Eicke >= 80:
        console.log('aprovada');
        break;
    case Eicke < 80 && Eicke >= 60:
        console.log('fila');
    case Eicke < 60: 
        console.log('reprovada')
    default:
        console.log('não se aplica')
}