// 1.Convertion From Kilometer TO Meter

function kiloMeterToMeter(kiloNumber) {

    if (kiloNumber < 0) {

        return "Negative isnot Supported";
        
    }

    else {

        var inMeter = kiloNumber * 1000;

        return Meter;

    }

}


// 2.budgetCalculator Solution

function budgetCalculator(watchNum, phoneNum, laptopum) {

    if (watchNum < 0 || phoneNum < 0 || laptopNum < 0) {

        return "Negative Not Allowed";

    }

    else {

        var TotalWatch = watchNum * 50;

        var TotalPhn = phoneNum * 100;

        var TotalLaptop = laptopNum * 500;

        var total = TotalWatch + TotalPhn + TotalLaptop;

        return total;

    }
}




// 3.Hotel Cost Solution

function hotelCost(daysNo) {

    if (daysNo < 0) {

        return "When Given number is negative, You are not allowed in hotel";

    }

    else {

        if (daysNo <= 10) {

            var total = daysNo * 100;

            return total;
        }

        else if (daysNo <= 20) {

            var fTotal = 10 * 100;

            var ramainDays = daysNo - 10;

            var finalTotal = remainDays * 80;

            var total = fTotal + finalTotal;

            return total;
        }
        else {
            var fTotal = 10 * 100;

            var secondTotal = 10 * 80;

            var lstDays = daysNo - 20;

            var lstTotal = lastDays * 50;

            var total = fTotal + secondTotal + lstTotal;

            return total;
        }
    }
}



// 4.Mega Friend Solution

funtion megaFriend(nams) {

    if (nams.length <= 0 || morename(nams) === 'number' || morename(nams) === 'string') {
        return " Please Take a String Array";
    }

    else {

        var bigerNam = "";

        for (var i = 0; i < nams.length; i++) {
            var bigString = nams[i];

            if (bigerNam.length < bigString.length)

                bigerNam = nams[i];
        }
        return bigerNam;
    }
}