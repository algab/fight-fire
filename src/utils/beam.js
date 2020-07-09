export const calcBeam = (armorLongitudinal, armorTransversal, cover, base) => {
    const area = ((armorLongitudinal * armorTransversal) * 3.14159) / 4;
    const c1h = ((cover + armorTransversal + (armorLongitudinal / 2)) * area) / area;
    const c1v = c1h;

    let c1 = 0

    let trrf1 = 180;
    let trrf2 = 180;
    let trrf3 = 180;
    let trrf4 = 180;

    let trrfB1 = 180;
    let trrfB2 = 180;
    let trrfB3 = 180;
    let trrfB4 = 180;

    let trrfC1 = 180;
    let trrfC2 = 180;
    let trrfC3 = 180;
    let trrfC4 = 180;

    if (c1h <= c1v) {
        c1 = c1h;
    } else {
        c1 = c1v;
    }

    // Inicio dos cálculos da tabela 1

    if (base >= 80 && base < 120) {
        trrfB1 = 30;
    } else if (base >= 120 && base < 140) {
        trrfB1 = 60;
    } else if (base >= 140 && base < 190) {
        trrfB1 = 90;
    } else if (base >= 190 && base < 240) {
        trrfB1 = 120;
    } else if (base >= 240) {
        trrfB1 = 180;
    }

    if (c1 >= 15 && c1 < 25) {
        trrfC1 = 30;
    } else if (c1 >= 25 && c1 < 37) {
        trrfC1 = 60;
    } else if (c1 >= 37 && c1 < 45) {
        trrfC1 = 90;
    } else if (c1 >= 45 && c1 < 60) {
        trrfC1 = 120;
    } else if (c1 >= 60) {
        trrfC1 = 180;
    }

    if (trrfB1 <= trrfC1) {
        trrf1 = trrfB1;
    } else {
        trrf1 = trrfC1;
    }

    // Inicio dos cálculos da tabela 2

    if (base >= 160 && base < 190) {
        trrfB2 = 30;
    } else if (base >= 190 && base < 250) {
        trrfB2 = 60;
    } else if (base >= 250 && base < 300) {
        trrfB2 = 90;
    } else if (base >= 300 && base < 400) {
        trrfB2 = 120;
    } else if (base >= 400) {
        trrfB2 = 180;
    }

    if (c1 >= 12 && c1 < 25) {
        trrfC2 = 60;
    } else if (c1 >= 25 && c1 < 35) {
        trrfC2 = 90;
    } else if (c1 >= 35 && c1 < 50) {
        trrfC2 = 120;
    } else if (c1 >= 50) {
        trrfC2 = 180;
    }

    if (trrfB2 <= trrfC2) {
        trrf2 = trrfB2;
    } else {
        trrf2 = trrfC2;
    }

    // Inicio dos cálculos da tabela 3

    if (base >= 450 && base < 550) {
        trrfB3 = 120;
    } else if (base >= 550) {
        trrfB3 = 180;
    }

    if (c1 >= 35 && c1 < 50) {
        trrfC3 = 120;
    } else if (c1 >= 50) {
        trrfC3 = 180;
    }

    if (trrfB3 <= trrfC3) {
        trrf3 = trrfB3;
    } else {
        trrf3 = trrfC3;
    }

    // Inicio dos cálculos da tabela 4

    if (base >= 500 && base < 600) {
        trrfB4 = 120;
    } else if (base >= 600) {
        trrfB4 = 180;
    }

    if (c1 >= 30 && c1 < 40) {
        trrfC4 = 120;
    } else if (c1 >= 40) {
        trrfC4 = 180;
    }

    if (trrfB4 <= trrfC4) {
        trrf4 = trrfB4;
    } else {
        trrf4 = trrfC4;
    }

    // Comparação entre as tabelas

    if (trrf1 == 180 && trrf2 == 180 && trrf3 == 180 && trrf4 == 180) {
        return 0;
    } else if (trrf1 <= trrf2 && trrf1 <= trrf3 && trrf1 <= trrf4) {
        return trrf1;
    } else if (trrf2 <= trrf1 && trrf2 <= trrf3 && trrf2 <= trrf4) {
        return trrf2;
    } else if (trrf3 <= trrf1 && trrf3 <= trrf2 && trrf3 <= trrf4) {
        return trrf3;
    } else if (trrf4 <= trrf1 && trrf4 <= trrf2 && trrf4 <= trrf3) {
        return trrf4;
    }
};
