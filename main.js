
                    //  amount*interest*(1+interest)^time  
                    // __________________________________   : EMI Formula
                    //     (1+interest)^time - 1


                    function calculate()
                    {
                        var amount = parseFloat(document.getElementById("amount").value);
                        var interest =parseFloat(document.getElementById("int").value);
                        var time=  parseInt(document.getElementById("time").value);
                        var monthly_int_rate =(interest/12)/100;
                    
                        var emi = amount*monthly_int_rate*Math.pow(1+monthly_int_rate,time)/ (Math.pow(1+monthly_int_rate,time)-1);
                        var total=emi*time
            
                        
                       document.getElementById("monthlypayment").value =emi.toFixed(2) ;
                       document.getElementById("total").value =total.toFixed(2) ;
                       document.getElementById("totalint").value =(total-amount).toFixed(2);
                     
             
                        
                    }