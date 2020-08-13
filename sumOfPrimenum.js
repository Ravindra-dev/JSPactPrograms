
            var sumOfPrimes = function(number){
                var primeNumSum=0;
                 for(var j=2;j<number;j++){
                    var b = true;
                    for(var i=2;i<j;i++){
                        if(j%i===0){
                            b=false;
                            break;                                                
                        }             
                    }
                    
                    if(b){
                        primeNumSum+=j;
                        }
                }

                return primeNumSum;
            }
           console.log(sumOfPrimes(11));
        