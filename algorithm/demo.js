var a = [1, 2, 34, 6, 34, 32,3, 3, 45, 4, 564, 5];
function quickSort(a) {
    qSort(a, 0, a.length - 1)
}
function qSort1(a, low, high) {
    if (low < high) {
        var temp;
        var i = low, j = high;
        temp = a[low];
        while (i < j) {

            while (a[j] >= temp && i < j) {
                j--;
            }
            if (i < j) {
                a[i++] = a[j]

            }

            while (a[i] < temp && i < j) {
                i++
            }
            if (i < j) {
                a[j--] = a[i];
            }
        }
        a[i] = temp;
        qSort(a, low, i - 1);
        qSort(a, i + 1, high);
    }

}
// var quick_sort = function (s, l, r) {
//     if (l < r) {
//         //Swap(s[l], s[(l + r) / 2]); //将中间的这个数和第一个数交换 参见注1  
//         var i = l, j = r, x = s[l];
//         while (i < j) {
//             while (i < j && s[j] >= x) // 从右向左找第一个小于x的数  
//                 j--;
//             if (i < j)
//                 s[i++] = s[j];

//             while (i < j && s[i] < x) // 从左向右找第一个大于等于x的数  
//                 i++;
//             if (i < j)
//                 s[j--] = s[i];
//         }
//         s[i] = x;
//         quick_sort(s, l, i - 1); // 递归调用   
//         quick_sort(s, i + 1, r);
//     }
// }


console.log(a)
quickSort(a, 0, a.length - 1);
console.log(a)