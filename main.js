function fn1() {

    // getting input
    var cost1 = document.getElementById("cheapest_cost").value;
    var cost2 = document.getElementById("expensive_cost").value;
    var monday = document.getElementById("mon_num").value;
    var friday = document.getElementById("fri_num").value;
    var tuesday = document.getElementById("tues_num").value;
    var saturday = document.getElementById("sat_num").value;
    var wednesday = document.getElementById("wed_num").value;
    var sunday = document.getElementById("sun_num").value;
    var thursday = document.getElementById("thurs_num").value;

    // avarage - cost
    var averageCost = (parseFloat(cost1) + parseFloat(cost2)) / 2;
    // averageCost = parseFloat(allCost) / 2;

    document.getElementById("avg_cost").innerHTML = ("$") + averageCost.toFixed(2);


    // day-wise inputs
    let weeklyCoffee = parseInt(monday) + parseInt(friday) + parseInt(tuesday) + parseInt(saturday) + parseInt(wednesday) + parseInt(sunday) + parseInt(thursday);

    // coffees per month
    let numberCoffeesMonthly = weeklyCoffee * 4;
    document.getElementById("month").innerHTML = numberCoffeesMonthly;

    // coffees per year
    let numberCoffeesYearly = weeklyCoffee * 52;
    document.getElementById("year").innerHTML = numberCoffeesYearly;

    // monthly costs
    let monthlyExpensive = numberCoffeesMonthly * cost2;
    document.getElementById("monthlyExpensive").innerHTML = ("$") + monthlyExpensive.toFixed(2);


    let monthlyCheapest = numberCoffeesMonthly * cost1;
    document.getElementById("monthlyCheapest").innerHTML = ("$") + monthlyCheapest.toFixed(2);


    let monthlyAverage = numberCoffeesMonthly * averageCost;
    document.getElementById("monthlyAverage").innerHTML = ("$") + monthlyAverage.toFixed(2);

    // yearly costs
    let yearlyExpensive = numberCoffeesYearly * cost2;
    document.getElementById("yearlyExpensive").innerHTML = ("$") + yearlyExpensive.toFixed(2);

    let yearlyCheapest = numberCoffeesYearly * cost1;
    document.getElementById("yearlyCheapest").innerHTML = ("$") + yearlyCheapest.toFixed(2);

    let yearlyAverage = numberCoffeesYearly * averageCost;
    document.getElementById("yearlyAverage").innerHTML = ("$") + yearlyAverage.toFixed(2);


    // output image
    if (numberCoffeesMonthly < 22) {
        document.getElementById("cup_img").src = "images/under_22 1.png";
    } else if (numberCoffeesMonthly < 80) {
        document.getElementById("cup_img").src = "images/bewteen_22_80.png";
    } else if (numberCoffeesMonthly > 80) {
        document.getElementById("cup_img").src = "images/over_80.png";
    }


    
    const hiddenDiv = document.getElementById("showme");
    hiddenDiv.style.display = "block";
    hiddenDiv.scrollIntoView({ behavior: 'smooth' });
}

// reset button
function fn2() {
    document.getElementById("showme").style.display = "none";
}


// NaN is default blank output in JavaScript