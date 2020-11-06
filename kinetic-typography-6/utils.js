export function distance(x1, y1, x2, y2) {
    const x = x2 - x1;
    const y = y2 - y1;
    return Math.sqrt(x * x + y * y)
}

export function pointCircle(px, py, cx, cy, r) {
    if (distance(px, py, cx, cy) <= r) {
        return true;
    } else {
        return false;
    }
}

export function hslToHex(h, s, l) {
    s /= 100;
    l /= 100;

    let c = (1 - Math.abs(2 * l - 1)) * s);

}