$(document).ready(function(){
    $("#calculate").on("click", function(e){

        var num1 = $("#firstnum").val();
        var num2 = $("#secondnum").val();
        var options = $("#options").val();

        if(!num1 || !num2){
            e.preventDefault();
        }

        switch(options)
        {
            case '+':

                $("#Calculations").val(num1 + options + num2);//concatenation
                var addition = Number(num1) + Number(num2);//calculation
                $("#result").val(addition);//answer
                break;

            case '-':

                $("#Calculations").val(num1 + options + num2);
                var substraction = Number(num1) - Number(num2);
                $("#result").val(substraction);
                break;

            case '*':

                $("#Calculations").val(num1 + options + num2);
                var multiplication = Number(num1) * Number(num2);
                $("#result").val(multiplication);
                break;


            case '/':

                $("#Calculations").val(num1 + options + num2);
                var division = Number(num1) / Number(num2);
                $("#result").val(division);
                break;

            default:
                break;
        }

    });

    $("#backid").on("click",function(e){

        $("#firstnum").val("");
        $("#secondnum").val("");
    });


});
