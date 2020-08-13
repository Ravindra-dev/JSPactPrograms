
            var date;
            var month;
            var year;
            var max_year = 9999
            var min_year = 1800;
            

            var dateValid = function(day,month,year){
                if(month===2){
                    if(leapYear(year)){
                        if(day<=29){
                            return true;
                        }else{
                            return false;
                        }
                    }
                }
                else if (month == 4||month == 6||month == 9||month == 11 ){
                    if(day <= 30){
                        return true;
                    }else{
                        return false;
                    }
                }else{
                    return true;
                }

                if(day>31 || day<1){
                    return false;
                }
                if(year>max_year || year<min_year){
                    return false;
                }
                if(month>12 || month<1){
                    return false;
                }
            }

            //check leaYear or Not
            var leapYear = function(year){
                return (((year % 4)===0) && ((year % 100)===0) && ((year % 400)===0));
            }
            
            if(dateValid(date=30,month=5,year=2000)){
                console.log("Valid date!");
            
            }else{
                console.log("Invalid date!")
            }


       