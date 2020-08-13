
            function partition(arr,val){
                var small = [];
                var large = [];

                for(var i = 0;i<arr.length;i++){
                   
                    if(arr[i]<val){                        
                        small.push(arr[i]);
                    }else if(arr[i] > val){                        
                        large.push(arr[i]);                      
                        
                    }
                }
                
                return [small,large];                
            }
           var xy =  partition([1, 4, 2, 5, 3], 3);
           console.log(xy);
       