export const columnEdge = (armorLongitudinal, armorTransversal, base, cover) => {
    const c1 = (cover + armorTransversal + (armorLongitudinal / 2));

    let trrfBase = 180;
    let trrfC1 = 180;

    if (base >= 155 && base < 175) {
        trrfBase = 90;
    } else if (base >= 175 && base < 230) {
        trrfBase = 120;
    } else if (base >= 230) {
        trrfBase = 180;
    }

    if (c1 >= 25 && c1 < 35) {
        trrfC1 = 90;
    } else if (c1 >= 35 && c1 < 55) {
        trrfC1 = 120;
    } else if (c1 >= 55) {
        trrfC1 = 180;
    }

    if (trrfBase == trrfC1) {
        return 0;
    } else if (trrfBase <= trrfC1) {
        return trrfBase;
    } else {
        return trrfC1;
    }
};

export const columnCorner = (armorLongitudinal, armorTransversal, base, bars, cover, height, nsd, le) => {
    let c1 = cover + armorTransversal + (armorLongitudinal / 2);    
    const area = base * height;

    let b = 0;
    let rn = 0;
    let rb = 0;

    if (c1 <= 25) {
        c1 = 25;
    } else if (c1 >= 80) {
        c1 = 80;
    }

    if (height <= (1.5 * base)) {
        b = ((2 * area) / (base + height));
    } else {
        b = (1.2 * base);
    }

    let mi = (0.7 * nsd) / nsd;

    if (mi >= 0.7) {
        mi = 0.7;
    }

    let lef = 0.5 * le;

    if (lef >= 6) {
        lef = 6;
    }

    if (bars == 4) {
        rn = 0;
    } else if (bars > 4) {
        rn = 12;
    }

    if (b >= 190 && b <= 450) {
        rb = 0.09 * b;
    } else if (b > 450) {
        rb = 40.5;
    }

    let rl = 9.60 * (5 - lef);
    let ra = 1.6 * (c1 - 30);
    let rmi = 83 * (1 - mi);            

    return parseFloat(120 * Math.pow(((rmi + ra + rl + rb + rn) / 120), 1.8)).toFixed(2);
};
