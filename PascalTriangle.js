
            
            var pascalTriangle = function(rowSize)
            {
                var resultArr = new Array(rowSize);
                for(var i = 0;i<rowSize;i++){
                    row = new Array(i+1);
                    row[0] = 1;
                    row[row.length-1] = 1;
                    for(var j=1;j<row.length-1;j++){                        
                        previousRow = resultArr[(i-1)];
                        row[j] = previousRow[j]+previousRow[(j-1)];
                    }
                    resultArr[i] = row;
                }                
                return resultArr;
            }
            console.log(pascalTriangle(5));

        