

            function mergeSort(arr,arr2){

                //merge the two arrays
                for(var i=0;i<arr2.length;i++){
                    arr.push(arr2[i]);
                }
                    // create decending array
                    for(var k=0;k<arr.length;k++){
                        for(var j=0;j<arr.length-1;j++){
                            if(arr[j]<arr[j+1]){
                                var temp = arr[j];                  
                                arr[j]=arr[j+1];
                                arr[j+1]=temp;
                            }

                        }
                    }
                    return arr;
                }
                
            
           console.log(mergeSort([1, 3, 5], [2,9,4]));
        