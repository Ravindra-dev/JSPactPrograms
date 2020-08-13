
            function secondLargest(arr){
                var first=0,second=0;


                for(var i=0;i<arr.length;i++){
                    if(arr[i]>arr[i+1]){
                        first = arr[i];
                        second = arr[i+1];
                    }else if(arr[i]<arr[i+1]){
                        first = arr[i+1];
                        second = arr[i];
                    }                    
                }
                
                return second;                
            }

            console.log(secondLargest([1, 3,4,5,9,15,20,19]));
       