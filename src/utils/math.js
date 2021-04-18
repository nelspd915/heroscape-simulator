export function flattenNegative(value) {
    return value < 0 ? 0 : value;
}

export function flattenedAverage(values) {
    let sum = 0;
    let i = 0;
    values.forEach(value => {
      sum += flattenNegative(value);
      i++;
    });

    return sum / i;
}

export function round(num, places) {
    return Math.round((num + Number.EPSILON) * 10**places) / 10**places
}