
            function pairs(array){

                var newArray = new Array(array.length-1);

                for(var i=0;i<newArray.length;i++){
                    newArray[i] = new Array(2);   
                }
                
                for(var j=0;j<array.length-1;j++){
                    for(var k=0;k<2;k++){
                    newArray[j][k]=array[j+k];
                    }
                }

                return newArray;
                
            }

            console.log(pairs([1, 2, 3, 4, 5]));
        