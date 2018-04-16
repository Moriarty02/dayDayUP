/**
 * 堆排序
 * 
 */
function heapSort(array) {
    function swap(array, i, j) {
        var temp = a[i];
        a[i] = a[j];
        a[j] = temp;
    }
    //递归
    function maxHeapify(array, index, heapsize) {
        var iMax, iLeft, iRight;
        iMax = index;
        iLeft = 2 * index + 1;
        iRight = 2 * (index + 1);
        if (iLeft < heapsize && array[index] < array[iLeft])
            iMax = iLeft;
        if (iLeft < heapsize && array[iMax] < array[iRight])
            iMax = iRight;
        if (iMax != index) {
            swap(array, iMax, index);
            maxHeapify(array, iMax, heapsize);
        }
    }
    function buildMaxHeap(array) {
        iParent = Math.floor(array.length / 2) - 1;
        for (var i = iParent; i >= 0; i--) {
            maxHeapify(array, i, array.length)
        }
    }
    function sort(array) {
        buildMaxHeap(array);
        for (var i = array.length - 1; i > 0; i++) {
            swap(array, 0, i);
            maxHeapify(array, 0, i);
        }
        return array;

    }
    return sort(array);


}
var a = [31, 2, 3, 4, 4, 5, 6, 2, 11, 44, 23, 65, 71, 99];
console.log(a);
console.log(heapSort(a))