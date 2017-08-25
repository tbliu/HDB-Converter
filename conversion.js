/** 
 * Computes conversions between hex, decimal, and binary 
 */

// TODO: Validate inputs

// Get Hex letter values
function getHex(n) {
    if (!isNaN(parseInt(n))) {
        return parseInt(n);
    }
    switch (n) {
        case "A": return 10;
        case "B": return 11;
        case  "C": return 12;
        case "D": return 13;
        case "E": return 14;
        case "F": return 15;
    }
}

// Convert decimal to hex
function d2h(n) {
    return b2h(d2b(n))
}

// Convert hex to decimal
function h2d(n) {
    var decimal = 0;
    var factor = 0;
    for (var i = n.length - 1; i >= 0; i--) {
       decimal += getHex(n.charAt(i)) * Math.pow(16, factor);
       factor += 1; 
    }
    return decimal;
}

// Convert decimal to binary
function d2b(n) {
    var factor = 1;
    var binary = 0;
    while (n != 0) {
        var bit;
        if (n % 2 == 0) {
            bit = 0;
        } else {
            bit = 1;
        }
        binary += factor * bit;
        factor *= 10;
        n = Math.floor(n / 2);
    }
    return binary;
}

// Convert binary to decimal
function b2d(n) {
    var factor = 0;
    var decimal = 0;
    while (n != 0) {
        var bit = n % 10;
        decimal += bit * Math.pow(2, factor);
        n = Math.floor(n / 10);
        factor += 1;
    }
    return decimal;
}

// Convert binary to hex
function b2h(n) {
    var hex = "";
    while (n != 0) {
        var fourgroup = n % 10000;
        var hexval = convert(fourgroup, "binary", "hex");
        hex = hexval + hex;
        n = Math.floor(n / 10000);
    }
    return hex;
}

// Convert hex to binary
function h2b(n) {
   return d2b(h2d(n))
}

// Conversion table
function convert(n, from, to) {
    if (from == "binary") {
        var decimal = b2d(n);
        if (decimal <= 9) {
            return decimal;
        }
        switch (decimal) {
            case 10: return "A";
                break;
            case 11: return "B";
                break;
            case 12: return "C";
                break;
            case 13: return "D";
                break;
            case 14: return "E";
                break;
            default: return "F";
        }
    }
}
