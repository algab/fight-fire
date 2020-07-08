export const calc = (height, building, subBuilding) => {
    if (building === "a") {
        if (height <= 6) {
            return { class: "P1", minutes: "30" };
        }
        else if (height > 6 && height <= 12) {
            return { class: "P2", minutes: "30" };
        }
        else if (height > 12 && height <= 23) {
            return { class: "P3", minutes: "60" };
        }
        else if (height > 23 && height <= 30) {
            return { class: "P4", minutes: "90" };
        }
        else if (height > 30) {
            return { class: "P5", minutes: "120" };
        }
    }
    else if (building === "b") {
        if (height <= 6) {
            return { class: "P1", minutes: "30" };
        }
        else if (height > 6 && height <= 12) {
            return { class: "P2", minutes: "60" };
        }
        else if (height > 12 && height <= 23) {
            return { class: "P3", minutes: "60" };
        }
        else if (height > 23 && height <= 30) {
            return { class: "P4", minutes: "90" };
        }
        else if (height > 30) {
            return { class: "P5", minutes: "120" };
        }
    }
    else if (building === "c") {
        if (height <= 6) {
            return { class: "P1", minutes: "60" };
        }
        else if (height > 6 && height <= 12) {
            return { class: "P2", minutes: "60" };
        }
        else if (height > 12 && height <= 23) {
            return { class: "P3", minutes: "60" };
        }
        else if (height > 23 && height <= 30) {
            return { class: "P3", minutes: "90" };
        }
        else if (height > 30) {
            return { class: "P5", minutes: "120" };
        }
    }
    else if (building === "d") {
        if (height <= 6) {
            return { class: "P1", minutes: "30" };
        }
        else if (height > 6 && height <= 12) {
            return { class: "P2", minutes: "60" };
        }
        else if (height > 12 && height <= 23) {
            return { class: "P3", minutes: "60" };
        }
        else if (height > 23 && height <= 30) {
            return { class: "P4", minutes: "90" };
        }
        else if (height > 30) {
            return { class: "P5", minutes: "120" };
        }
    }
    else if (building === "e") {
        if (height <= 6) {
            return { class: "P1", minutes: "30" };
        }
        else if (height > 6 && height <= 12) {
            return { class: "P2", minutes: "30" };
        }
        else if (height > 12 && height <= 23) {
            return { class: "P3", minutes: "60" };
        }
        else if (height > 23 && height <= 30) {
            return { class: "P4", minutes: "90" };
        }
        else if (height > 30) {
            return { class: "P5", minutes: "120" };
        }
    }
    else if (building === "f") {
        if (height <= 6) {
            return { class: "P1", minutes: "60" };
        }
        else if (height > 6 && height <= 12) {
            return { class: "P2", minutes: "60" };
        }
        else if (height > 12 && height <= 23) {
            return { class: "P3", minutes: "60" };
        }
        else if (height > 23 && height <= 30) {
            return { class: "P4", minutes: "90" };
        }
        else if (height > 30) {
            return { class: "P5", minutes: "120" };
        }
    }
    else if (building === "g") {
        if (subBuilding == "g-1-2" || subBuilding == "g-2-2" || subBuilding == "g-3" || subBuilding == "g-4" || subBuilding == "g-5") {
            if (height <= 6) {
                return { class: "P1", minutes: "30" };
            }
            else if (height > 6 && height <= 12) {
                return { class: "P2", minutes: "60" };
            }
            else if (height > 12 && height <= 23) {
                return { class: "P3", minutes: "60" };
            }
            else if (height > 23 && height <= 30) {
                return { class: "P4", minutes: "90" };
            }
            else if (height > 30) {
                return { class: "P5", minutes: "120" };
            }
        }
        else if (subBuilding == "g-1-1" || subBuilding == "g-2-1") {
            if (height <= 6) {
                return { class: "P1", minutes: "30" };
            }
            else if (height > 6 && height <= 12) {
                return { class: "P2", minutes: "30" };
            }
            else if (height > 12 && height <= 23) {
                return { class: "P3", minutes: "30" };
            }
            else if (height > 23 && height <= 30) {
                return { class: "P4", minutes: "30" };
            }
            else if (height > 30) {
                return { class: "P5", minutes: "60" };
            }
        }
    }
    else if (building === "h") {
        if (height <= 6) {
            return { class: "P1", minutes: "30" };
        }
        else if (height > 6 && height <= 12) {
            return { class: "P2", minutes: "60" };
        }
        else if (height > 12 && height <= 23) {
            return { class: "P3", minutes: "60" };
        }
        else if (height > 23 && height <= 30) {
            return { class: "P4", minutes: "90" };
        }
        else if (height > 30) {
            return { class: "P5", minutes: "120" };
        }
    }
    else if (building === "i") {
        if (subBuilding === "i-1") {
            if (height <= 6) {
                return { class: "P1", minutes: "30" };
            }
            else if (height > 6 && height <= 12) {
                return { class: "P2", minutes: "30" };
            }
            else if (height > 12 && height <= 23) {
                return { class: "P3", minutes: "60" };
            }
            else if (height > 23 && height <= 30) {
                return { class: "P4", minutes: "90" };
            }
            else if (height > 30) {
                return { class: "P5", minutes: "120" };
            }
        }
        else if (subBuilding === "i-2") {
            if (height <= 6) {
                return { class: "P1", minutes: "60" };
            }
            else if (height > 6 && height <= 12) {
                return { class: "P2", minutes: "60" };
            }
            else if (height > 12 && height <= 23) {
                return { class: "P3", minutes: "60" };
            }
            else if (height > 23 && height <= 30) {
                this.setState({ trrf: { class: "P4", minutes: "120" } })
            }
            else if (height > 30) {
                return { class: "P5", minutes: "120" };
            }
        }
    }
    else if (building === "j") {
        if (subBuilding === "j-1") {
            if (height <= 6) {
                return { class: "P1", minutes: "30" };
            }
            else if (height > 6 && height <= 12) {
                return { class: "P2", minutes: "30" };
            }
            else if (height > 12 && height <= 23) {
                return { class: "P3", minutes: "30" };
            }
            else if (height > 23 && height <= 30) {
                return { class: "P4", minutes: "30" };
            }
            else if (height > 30) {
                return { class: "P5", minutes: "60" };
            }
        }
        else if (subBuilding === "j-2") {
            if (height <= 6) {
                return { class: "P1", minutes: "60" };
            }
            else if (height > 6 && height <= 12) {
                return { class: "P2", minutes: "60" };
            }
            else if (height > 12 && height <= 23) {
                return { class: "P3", minutes: "60" };
            }
            else if (height > 23 && height <= 30) {
                return { class: "P4", minutes: "90" };
            }
            else if (height > 30) {
                return { class: "P5", minutes: "120" };
            }
        }
    }
};
