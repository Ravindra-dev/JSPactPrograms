

           function rev(a){
               var arr1 = [];
               for(var i = a.length - 1; i>=0; i--){
                   arr1.push(a[i]);
               }
               return arr1;
           }
           console.log(rev([1,2,3,4]));
       