  //1

  function calculer(){
    var n1 = parseFloat(document.getElementById("n1").value) ;
    var n2 = parseFloat(document.getElementById("n2").value) ;
    var s;
    s=n1+n2;
    document.getElementById("lab").innerText=s;
    
  }  
  //2
  function permuter(){
    var x1 = parseFloat(document.getElementById("x1").value) ;
    var x2 = parseFloat(document.getElementById("x2").value) ;
    document.getElementById("x1").value=x2;
    document.getElementById("x2").value=x1;
    
  } 
  //3
  function separer(){
      var stringg=document.getElementById("nomc").value;
      const tab = stringg.split(' ');
      document.getElementById("nom").innerHTML="Nom :"+tab[0];
      document.getElementById("prenom").innerHTML="Prenom :"+tab[1];
  }

  