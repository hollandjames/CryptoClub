function loadModal(){

    var modal = document.getElementById('myModal');
    var btn = document.getElementById("delivery");
    var span = document.getElementsByClassName("close")[0];
    btn.onclick = function() {
        modal.style.display = "block";
    }
    span.onclick = function() {
        modal.style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
    }
    var subtotal=0;
    var shipping = 2.99;
    if(Cookies.get('item_name')=='Ethereum Hat'){
      subtotal = 30 * parseInt(Cookies.get('item_quantity'));
    } 
    
    
    
    
function createTable(){
    
    
    var tableArr = ["Product",Cookies.get('item_name')+' * '+Cookies.get('item_quantity'),"Subtotal","Shipping","Total"];
    
    
    var tableArr2 =['Total','£'+ subtotal.toFixed(2),'£' +subtotal.toFixed(2),'Royal Mail First Class £' + shipping,'£' + parseFloat(subtotal+shipping)];
    
    var myTableDiv = document.getElementById("tableData");
    var table = document.createElement('TABLE');
    table.border='1';
    table.cellPadding='5px';
    var tableBody = document.createElement('TBODY');
    table.appendChild(tableBody);
    for (var i=0; i<5; i++){
       var tr = document.createElement('TR');
       

       
    
       tableBody.appendChild(tr);
    
       for (var j=0; j<2; j++){
           var td = document.createElement('TD');
           td.width='250px';
    

           if(i!==1){
            td.style.fontWeight="bold";
           }

    if(j==0){
           td.appendChild(document.createTextNode(tableArr[i]));     
       }
       if(j==1){
    
        td.appendChild(document.createTextNode(tableArr2[i]));  
        
       }


       tr.appendChild(td);
      }
    }
    myTableDiv.appendChild(table);
    }
    

    
    