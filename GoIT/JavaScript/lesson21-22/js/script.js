function pow(a, b) {
    var result = 1;

    for (var i = 0; i < b; i++) {
        result = result * a;
    }

    return result;
}

module.exports = pow;