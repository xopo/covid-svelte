function number(num) {
    if (num === null || num === undefined ) {
        return 'unknown';
    }

    return num.toString();
}

export default {
    number
}