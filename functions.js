
        function todayDate()
        {
            var inputD=document.getElementById("inputdate");

            
            date = new Date();
            year = date.getFullYear();
            month = date.getMonth() + 1;
            day = date.getDate();

            inputD.value =day+"/"+month+"/"+year;
        }

        function Time_duration(){
            var inputY=document.getElementById("yr");
            var inputA=document.getElementById("appr_type");
            var value,res;

            if(inputA.value==1){
                value=1;
            }
            else{
                value=2;
            }
            res= dur(value);
            inputY.value=res;
        }

        function dur(val){
            date = new Date();
            year = date.getFullYear();
            month = date.getMonth() + 1;
            var from,to,res;

            if(val==1){
                from=year-2;
                to=year-1;
            }
            else{
                if(month>6){
                    from="Jan "+year;
                    to="Jun "+year;
                }
                else{
                    from="Jul "+year-1;
                    to="Dec "+year-1;
                }
            }
            res= from +" - "+to;
            return res;
        }


        var x=1
        function nonWorkAddRow()
         {
             var table_obj= document.getElementById('non_work');
                 x++;
                
                 var new_row= table_obj.insertRow();
                 //var new_cell1=new_row.insertCell(0);
                 
                 new_row.id="nw_r"+x;
                 //new_cell1.id="nw_sl_no"+x;
 
                 
            var flag;
            for (var j=1;j<x;j++){
                flag=0;
                if (check("nw_r"+(x-j))==0 )
                {
                    copy_vals("nw_r"+(x-j),"nw_r"+x);
                    return;
                }
                if(j==x-1){
                    flag=1;
                }
            }
                if (flag==1){
                    alert("reload page");   
                }

                 //new_cell1.innerHTML=x+".";
                // sl_no(i);
             
         }
        
       var i=1
       function workAddRow()
        {
            var work_table_obj= document.getElementById('work');
                i++;
               
                var new_row= work_table_obj.insertRow();
                //var new_cell1=new_row.insertCell(0);
                
                new_row.id="w_r"+i;
                //new_cell1.id="w_sl_no"+i;

            var flag;
            for (var j=1;j<i;j++){
                flag=0;
                if (check("w_r"+(i-j))==0 )
                {
                    //console.log("j"+j+"i"+i+"fl"+flag)
                    copy_vals("w_r"+(i-j),"w_r"+i);
                    return;
                }
                if(j==i-1){
                    flag=1;
                }
            }
                if (flag==1){
                    alert("reload page");
                    
                }
            
            
        }

        function copy_vals(s,d) {
            var _src = document.getElementById(""+s);
            var _dest = document.getElementById( ""+d);
            _dest.innerHTML = _src.innerHTML;
        }

        function check(e1){
            var element1 = document.getElementById (e1);
            
            if (element1.innerHTML!=""){
                return 0;
            }
            else{
                return 1;
            }
        }

        function DelRow(r){
            //console.log(r)
            var del=document.getElementById(""+r);
            del.innerHTML="";
        }

