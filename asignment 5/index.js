document.getElementById('fcfc').addEventListener
    ('click', function () {
        const depositIncome = document.getElementById('fifi');
        const incomeValueText = depositIncome.value;
        const incomeValue = parseFloat(incomeValueText);
        console.log(incomeValue);

        const depositFood = document.getElementById('fdd');
        const foodValueText = depositFood.value;
        const foodValue = parseFloat(foodValueText);
        console.log(foodValue);

        const depositRent = document.getElementById('rnt');
        const rentValueText = depositRent.value;
        const rentValue = parseFloat(rentValueText);
        console.log(rentValue);

        const depositCloth = document.getElementById('clth');
        const clothValueText = depositCloth.value;
        const clothValue = parseFloat(clothValueText)
        console.log(clothValue);

        const exp = document.getElementById('exp');
        expText = exp.innerText;


        exp.innerText = clothValue + foodValue + rentValue;
        console.log(expText);

        const blnc = document.getElementById("blnc");
        blncText = blnc.innerText;
        blnc.innerText = incomeValue - expText;
        console.log(blncText);

    })