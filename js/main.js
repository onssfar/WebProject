//document.getElementById("6mois").addEventListener("click",fChange());


function fChangeIphone() {
    var price = 699.99;
    //document.getElementById("res").value = "ress"

    if (this.document.activeElement.id == "12mois") {
        price += 250;
        price /= 12;
        document.getElementById("res").value = price.toFixed(2) + " $";
    }
    if (this.document.activeElement.id == "6mois") {
        price += 100;
        price /= 6;
        document.getElementById("res").value = price.toFixed(2) + " $";
    }

}

function fChangeAirPods() {
    var price = 299.99;
    //document.getElementById("res").value = "ress"

    if (this.document.activeElement.id == "12mois") {
        price += 250;
        price /= 12;
        document.getElementById("res").value = price.toFixed(2) + " $";
    }
    if (this.document.activeElement.id == "6mois") {
        price += 100;
        price /= 6;
        document.getElementById("res").value = price.toFixed(2) + " $";
    }
}

function fChangeMac() {
    var price = 999.99;
    //document.getElementById("res").value = "ress"

    if (this.document.activeElement.id == "12mois") {
        price += 250;
        price /= 12;
        document.getElementById("res").value = price.toFixed(2) + " $";
    }
    if (this.document.activeElement.id == "6mois") {
        price += 100;
        price /= 6;
        document.getElementById("res").value = price.toFixed(2) + " $";
    }
}