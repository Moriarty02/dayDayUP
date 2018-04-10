/**
 * 
 *  找出 row*col均匀分成若干个方块 要求方块尽可能的大v
 * @param {any} row 
 * @param {any} col 
 * @returns 
 */

function D_C(row,col){
   
    let min,max;
    if(row<=1||col<=1)return 1;
    if(row==col){
        return row;
    };
    if(row>col){
        min=col;
        max=row;
    }else{
        min=row;
        max=col;
    }
   return D_C(min,max-min);   
}
//console.log(D_C(640,400))

function quickSort(a) {
        Qsort(a, 0, a.length - 1);
        return   a;
    }

    function Qsort(a, low, high) {
        var pivot;
        if (low < high) {
            pivot = Partition(a, low, high);
            Qsort(a, low, pivot - 1);
            Qsort(a, pivot+1, high);
        }


    }

  
    function Partition(a, low, high) {

        var temp;
        var pivotKey;
        pivotKey = a[low];
        while (low < high) {
            while (low < high && a[high] >= pivotKey)
                high--;
            temp = a[high];
            a[high] = a[low];
            a[low] = temp;
            while (low < high && a[low] <= pivotKey)
                low++;
            temp = a[low];
            a[low] = a[high];
            a[high] = temp;

        }
        return low;
    }
var a=[6 ,1, 2, 7, 9, 3,3, 4 ,5, 8,10];

console.log("before",a);
quickSort(a);
console.log('after ',a);