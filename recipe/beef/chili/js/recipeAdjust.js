function adjustRecipe() {
    var selectValue = document.getElementById("recipeOptions").value;
    if (selectValue == "half") {
        document.getElementById("servSize").innerHTML = "3";
        document.getElementById("ingr1").innerHTML = "1";
        document.getElementById("ingr2").innerHTML = "1/2";
        document.getElementById("ingr3").innerHTML = "1/2";
        document.getElementById("ingr4").innerHTML = "2";
        document.getElementById("ingr5").innerHTML = "1/2";
        document.getElementById("ingr6").innerHTML = "1/2";
        document.getElementById("ingr7").innerHTML = "1";
        document.getElementById("ingr8").innerHTML = "1";
        document.getElementById("ingr9").innerHTML = "1";
        document.getElementById("ingr10").innerHTML = "1";
        document.getElementById("ingr11").innerHTML = "1/2";
        document.getElementById("ingr12").innerHTML = "1/4";
    }

    if (selectValue == "double") {
        document.getElementById("servSize").innerHTML = "12";
        document.getElementById("ingr1").innerHTML = "4";
        document.getElementById("ingr2").innerHTML = "2";
        document.getElementById("ingr3").innerHTML = "2";
        document.getElementById("ingr4").innerHTML = "8";
        document.getElementById("ingr5").innerHTML = "2";
        document.getElementById("ingr6").innerHTML = "2";
        document.getElementById("ingr7").innerHTML = "4";
        document.getElementById("ingr8").innerHTML = "4";
        document.getElementById("ingr9").innerHTML = "4";
        document.getElementById("ingr10").innerHTML = "4";
        document.getElementById("ingr11").innerHTML = "2";
        document.getElementById("ingr12").innerHTML = "1";
    }

    if (selectValue == "original") {
        document.getElementById("servSize").innerHTML = "6";
        document.getElementById("ingr1").innerHTML = "2";
        document.getElementById("ingr2").innerHTML = "1";
        document.getElementById("ingr3").innerHTML = "1";
        document.getElementById("ingr4").innerHTML = "4";
        document.getElementById("ingr5").innerHTML = "1";
        document.getElementById("ingr6").innerHTML = "1";
        document.getElementById("ingr7").innerHTML = "2";
        document.getElementById("ingr8").innerHTML = "2";
        document.getElementById("ingr9").innerHTML = "2";
        document.getElementById("ingr10").innerHTML = "2";
        document.getElementById("ingr11").innerHTML = "1";
        document.getElementById("ingr12").innerHTML = "1/2";
    }
}