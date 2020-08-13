

            function isSorted(arr){

                    var boolVal ;
                    for(var j=0;j<arr.length-1;j++){
                        if(arr[j]>arr[j+1]){
                            
                            boolVal = 0;
                        }else{
                            boolVal = 1;
                        }

                    }
                    if(boolVal){
                        return true;
                    }
                    else{
                    return false;
                    }
                    
                
            }

           console.log(isSorted([1, 2, 3,9,7]));


        