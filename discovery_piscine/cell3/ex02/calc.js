setInterval(MesEmerg, 30000)

function MesEmerg() {
    alert("Please, use me...");
}

const form = document.querySelector("form")

form.addEventListener('submit',(event) => {
    event.preventDefault()
    CalckFuncion()
});

function CalckFuncion() {
    let arg1 = document.getElementById("arg01").value;
    let arg2 = document.getElementById("arg02").value;
    let oper = document.getElementById("operadorID").value;

    if (arg1 < 0 || arg2 < 0)
    {
        alert("Error :(");
        return false;
    }

    if (arg2 == 0 && oper == "/")
    {
        alert("It’s over 9000!");
        console.log("It’s over 9000!");
        return false;
    }

    /*var res = 0;*/

    if (oper == "%") 
    {
        let res = arg2*(arg1/100);
        alert(res);
        console.log(res);
    } else {
        let res = eval(arg1+oper+arg2);
        alert(res);
        console.log(res);
    }
}