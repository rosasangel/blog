document.getElementById('btn').addEventListener("click",function(){

     var input = document.getElementById('input1').value;
    
     var newTag = document.createElement('h3');
    
     var newString = document.createTextNode(input);
     
     var container = document.getElementById("title1");

    
     newTag.appendChild(newString);
    
     var container = document.getElementById('title1');
    
     container.appendChild(newTag);
    
    // console.log("this button was clicked")
    });







    document.getElementById('btn').addEventListener("click",function(){

        var input = document.getElementById('input2').value;
       
        var newTag = document.createElement('p');
       
        var newString = document.createTextNode(input);
        
        var container = document.getElementById('container');
   
       
        newTag.appendChild(newString);
       
        var container = document.getElementById('title1');
       
        container.appendChild(newTag);
       
       // console.log("this button was clicked")
       });