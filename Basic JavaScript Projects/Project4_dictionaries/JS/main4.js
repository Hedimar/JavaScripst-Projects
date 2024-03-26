function my_Dictionary(){
    var Cars ={
       Model:"Stinger",
        Color:"Black",
        Trim:"GT",
        Year:"2023",
        
    };
    delete Cars.Trim; //remover the Trim KVP
    document.getElementById("Dictionary").innerHTML= Cars.Model;
}