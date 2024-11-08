// Insertion Sort

const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i]
    let j = i - 1
    
    while ( j >= 0 && key < arr[j] ){
        arr[j + 1] = arr[j]
        j -= 1
    }
    arr[j + 1] = key
  }
};

let arr = [12, 11, 13, 5, 6];
insertionSort(arr);
console.log(arr);