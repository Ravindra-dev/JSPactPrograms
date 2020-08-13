
            var matricsMul = function(array1,array2){

                if(array1[0].length === array2.length){

                    //Creating empty 2 dimesional array
                    var res = new Array(array1.length);
                    for(var i = 0;i<array1.length;i++){
                        res[i] = new Array(array2[0].length);
                    }

                    //Initialize with zero's
                
                    for(var row1 = 0;row1<array1.length;row1++){
                        for(var col1 = 0;col1<array2[0].length;col1++){
                            res[row1][col1] = 0;
                        }
                    }

                    for(var row=0;row<array1.length;row++){
                        for(var col=0;col<array2[0].length;col++){
                            for(var z=0;z<array2.length;z++){
                                res[row][col] += array1[row][z]*array2[z][col];
                            
                            }
                        }
                    }
                    console.log(res);           
                }
                else{
                    console.log("Matrics doesn't compatable!");
                }
            
            }

            var x1 = [[1,2,3],
                [4,5,6]];

            var y1 = [[7,8],
                [9,10],
                [11,12]];

            matricsMul(x1,y1);
               
        