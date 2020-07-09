export const calcSlab = (cover, armor, height) => {
    const c1 = cover + (armor / 2);
    
    let trrfHeight = null;
    let trrfC1 = null;

    if (height >= 60 && height < 80) {
        trrfHeight = 30
    } else if (height >= 80 && height < 100) {
        trrfHeight = 60
    } else if (height >= 100 && height < 120) {
        trrfHeight = 90
    } else if (height >= 120 && height < 150) {
        trrfHeight = 120
    } else if (height >= 150) {
        trrfHeight = 180
    }

    if (c1 >= 10 && c1 < 15) {
        trrfC1 = 60
    } else if (c1 >= 15 && c1 < 20) {
        trrfC1 = 90
    } else if (c1 >= 20 && c1 < 30) {
        trrfC1 = 120
    } else if (c1 >= 30) {
        trrfC1 = 180
    }

    if (trrfC1 !== null && trrfHeight !== null) {
        if (trrfC1 <= trrfHeight) {
            return trrfC1;
        }
        return trrfHeight;
    }
    return 0;
};

export const slabDepth = (depth, height) => {
    const c1 = depth;

    let trrfHeight = null;
    let trrfC1 = null;

    if (height >= 60 && height < 80) {
        trrfHeight = 30;
    } else if (height >= 80 && height < 100) {
        trrfHeight = 60;
    } else if (height >= 100 && height < 120) {
        trrfHeight = 90;
    } else if (height >= 120 && height < 150) {
        trrfHeight = 120;
    } else if (height >= 150) {
        trrfHeight = 180;
    }

    if (c1 >= 10 && c1 < 20) {
        trrfC1 = 30;
    } else if (c1 >= 20 && c1 < 30) {
        trrfC1 = 60;
    } else if (c1 >= 30 && c1 < 40) {
        trrfC1 = 90;
    } else if (c1 >= 40 && c1 < 55) {
        trrfC1 = 120;
    } else if (c1 >= 55) {
        trrfC1 = 180;
    }

    if (trrfC1 !== null && trrfHeight !== null) {
        if (trrfC1 <= trrfHeight) {
            return trrfC1;
        }
        return trrfHeight;
    }
    return 0;
};

export const slabWidth = (cover, armor, width) => {
    const c1 = cover + (armor / 2);
    const b = width;

    let trrfT1 = 180;
    let trrfT2 = 180;

    let b1 = null;
    let b2 = null;

    let c11 = null;
    let c12 = null;

    // Inicio dos cálculos da tabela 1

    if (b >= 80 && b <= 100) {
        b1 = 30;
    } else if (b > 100 && b <= 130) {
        b1 = 60;
    } else if (b >= 130 && b < 160) {
        b1 = 90;
    } else if (b >= 160 && b < 220) {
        b1 = 120;
    } else if (b >= 220) {
        b1 = 180;
    }

    if (c1 >= 25 && c1 < 45) {
        c11 = 30;
    } else if (c1 >= 45 && c1 < 60) {
        c11 = 60;
    } else if (c1 >= 60 && c1 < 65) {
        c11 = 90;
    } else if (c1 >= 65 && c1 < 80) {
        c11 = 120;
    } else if (c1 >= 80) {
        c11 = 180;
    }

    if (b1 <= c11) {
        trrfT1 = b1;
    } else {
        trrfT1 = c11;
    }

    // Inicio dos cálculos da tabela 2

    if (b >= 100 && b <= 120) {
        b2 = 30;
    } else if (b > 120 && b <= 150) {
        b2 = 60;
    } else if (b > 150 && b < 220) {
        b2 = 90;
    } else if (b >= 220) {
        b2 = 120;
    }

    if (c1 >= 20 && c1 < 40) {
        c12 = 30;
    } else if (c1 >= 40 && c1 < 50) {
        c12 = 60;
    } else if (c1 >= 50) {
        c12 = 90;
    }

    if (b2 <= c12) {
        trrfT2 = b2;
    } else {
        trrfT2 = c12;
    }

    // Comparação entre as tabelas

    if (trrfT1 == 0 && trrfT2 == 0) {
        return 180;
    } else if (trrfT1 == 0) {
        return trrfT2;
    } else if (trrfT2 == 0) {
        return trrfT1;
    } else if (trrfT1 <= trrfT2) {
        return trrfT1;
    } else {
        return trrfT2;
    }
};
