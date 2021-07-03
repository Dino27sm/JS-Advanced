function cookingNumbers(startNum, ...actions){
    let num = Number(startNum);
    let actionsLength = actions.length;
    for (let i = 0; i < actionsLength; i++){
        if(actions[i] == 'chop'){ num /= 2;}
        else if(actions[i] == 'dice'){num = Math.sqrt(num);}
        else if(actions[i] == 'spice'){num += 1;}
        else if(actions[i] == 'bake'){num *= 3;}
        else if(actions[i] == 'fillet'){num *= 0.8;}

        console.log(num);
    }
}

cookingNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');
