
            function fibonachi(n){
                var n1 = 0,arr=[];
                var f = 0;
                var s = 1,t;
                console.log(n);
                while(n1<n){
                    arr.push(f);
                    t = f+s;
                    s = f;
                    f = t;

                    n1++;
                    // console.log(n1);
                }
                return arr;
                
            }

            console.log(fibonachi(10));
       