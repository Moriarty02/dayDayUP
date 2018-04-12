/**
 * 找出一组数里第K的数字
 */
function findKthBigger(a, K, m, n) {
    var i = m, j = n;
    var base = a[i];

    while (i < j) {
        while (i < j && a[j] < base) {
            --j;
        }
        if (i < j)
            a[i++] = a[j];
        while (i < j && a[i] >= base) {
            ++i;
        }
        if (i < j) {
            a[j--] = a[i];
        }
    }
    a[i] = base;
    if (K - 1 > i) {
        return findKthBigger(a, K, i + 1, n);
    }
    if (K - 1 < i) {
        return findKthBigger(a, K, m, i - 1);
    }
    else {
        return a[i];
    }


}
var a = [6, 3, 4, 8, 7, 1, 2, 5, 9];
var num = findKthBigger(a, 3, 0, a.length - 1);
console.log(num)