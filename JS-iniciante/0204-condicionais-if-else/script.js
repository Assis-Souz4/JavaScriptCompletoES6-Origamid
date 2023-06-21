var estudando_js = true;
if(estudando_js) {
    console.log('verdadeiro');
}else {
        console.log('falso');
    }

//     // Falsy
// if(false)
// if(0) // ou -0
// if(NaN)
// if(null)
// if(undefined)
// if('') // ou "" ou ``


// // Truthy
// if(true)
// if(1)
// if(' ')
// if('andre')
// if(-5)
// if({})

var corFavorita = 'laranja';
switch(corFavorita){
    case 'azul':
        console.log('a cor é azul');
        break;
        case ' amarelo':
            console.log('a cor é amarela');
            break;
            case ' vermelha':
                console.log("a cor é vermelha");
                break;
                default:
                    console.log('nenhuma cor');
}