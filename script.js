 const Maths = {
        "pow" : function(a,b){
            let result = 1;
            for(let index = 0; index < b ; index++){
                result *= a;
            }
            return result;
        },
        "min" : function(...arr){
            var min = arguments[0];
            for (var i = 0, j = arguments.length; i < j; i++){
                if (arguments[i] < min) {
                    min = arguments[i];
                }
            }
             return min;
        },
        "max" : function(...arr){
            var max = arguments[0];
            for(var index = 0 , j = arguments.length; index < j; index++){
                if(arguments[index] > max){
                    max = arguments[index];
                }
            }
            return max;
        },
        // "sqrt" : function(a){
        //     let i = 1;
        //     let result;
        //     let gotten  = false;
        //     while(!gotten){
        //         if(i * i === a){
        //             result = i;
        //             gotten = true;
        //         }
        //         i++
        //     }
        //     return result;
        // },
        "trunc" : function(a){
            let value = String(a);
            let arrs = value.split(".");
            return arrs[0];
        },
        "sign" : function(a){
            let result;
            if(a > 0){
                result = 1;
            }
            else if( a < 0){
                result = -1;
            }
            else if( a == 0) {
                result = 0;
            }
            else {
                result = NaN;
            }
            return result;
        },
        "ceil" : function(a){
            let val = String(a).split(".")
            let result;
            if(val[1] > 0){
                result = Number(val[0]) + 1;
            }  
            else {
                result = val[0];
            } 
            if(!a){
                result = NaN;
            }
            return result; 
        }
        
    }
    Maths.floor = Maths.trunc;