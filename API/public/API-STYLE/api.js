$(document).ready(function(){
    // *********************  google firebase data base  **************** 
      // Your web app's Firebase configuration
      var firebaseConfig = {
        apiKey: "AIzaSyC48Vf1HQTTKLMYT64GTKLPpYiP3KBukhc",
        authDomain: "form-firebase-projects.firebaseapp.com",
        databaseURL: "https://form-firebase-projects-default-rtdb.asia-southeast1.firebasedatabase.app",
        projectId: "form-firebase-projects",
        storageBucket: "form-firebase-projects.appspot.com",
        messagingSenderId: "124747812194",
        appId: "1:124747812194:web:007949432f7ba74f69303b"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
    // *************** ajax country start ************************** 
    $.ajax({
        url : "https://restcountries.eu/rest/v2/all",
        type : "GET",
        dataType : "json",
        success : function(response){
            for(let key in response){
                $("#countryName").append(`<option vlaue="${response[key].name}">${response[key].name}</option>`);
            }
        },
        error : function(){
            console.log("Error");
        }
    })

    // ************ ajax country end *************************** 

    const yearsData = [2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010
        ,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025,2026,2027,2028,2029,2030,2031,2032,2033,2034,2035,2036,2037,2038,2039,2040,2041,2042,2043,2044,2045,2046,2047,2048,2049,2050];
    // console.log(yearsData);

    for(let i = 0; i < yearsData.length; i++){
        $("#year").append(`<option value="${yearsData[i]}">${yearsData[i]}</option>`);
    }

    // ************* years list array end *************************** 

        function randomNumber(item){
            return item[Math.floor(Math.random() * item.length)];
        }

        const item = ["A532D4","BD32D1","3A52D5","ZA32DA","A5323d","A532D4","DFE251","ZEW525","BDSE10","QRSA12","10Afjs","34d2sA","Adkde2","3E5dAi","50Desa","3500AS","ASI505","50001a","415aAjf","AFEXS5","ABCDEF","DSSFSS","A532D4"];

        const capcherCodeBox = document.querySelector(".capcherCodeBox");
        capcherCodeBox.innerHTML = randomNumber(item);
    

    // *************** capther code end ****************************** 
    // form submit start 

    $("form").submit(function(e){
        e.preventDefault();
        inputFunction();
    })

    let name, email, password, date, number, course, countryName, year, pincode, gender, message, capcherCode
   async function inputFunction(){
        let name = $("#name").val();
        let email = $("#email").val();
        let password = $("#password").val();
        let date = $("#date").val();
        let number = $("#number").val();
        let course = $("#course").val();
        let countryName = $("#countryName").val();
        let year = $("#year").val();
        let pincode = $("#pincode").val();
        let gender = $("#gender").val();
        let message = $("#message").val();
        let capcherCode = $("#capcherCode").val();
        
    // *************** input faild end ******************************

        if(name == ""){
            $(".iconFirst").css("display", "block");
            $("#popText").html(`<h1>Please Enter Name</h1>`);
        }else if(email == ""){
            $(".iconSecound").css("display", "block");
            $("#popText").html(`<h1>Please Enter Email</h1>`);
        }else if(password == "" || password.length < 6){
            $(".iconthreed").css("display", "block");
            alert("Password must be at least 6 characters long:");
            $("#popText").html(`<h1>Please Enter Password</h1>`);
        }else if(date == ""){
            $("#popText").html(`<h1>Please Enter DOB</h1>`);
        }else if(number == ""){
            $(".iconFourth").css("display", "block");
            $("#popText").html(`<h1>Please Enter Number</h1>`);
        }else if(course == ""){
            $("#popText").html(`<h1>Please Enter Course</h1>`);
        }else if(countryName == ""){
            $("#popText").html(`<h1>Please Enter Country</h1>`);
        }else if(year == ""){
            $("#popText").html(`<h1>Please Enter Years</h1>`);
        }else if(pincode == ""){
            $(".iconFifth").css("display", "block");
            $("#popText").html(`<h1>Please Enter PinCode</h1>`);
        }else if(gender == ""){
            $("#popText").html(`<h1>Please Enter Gender</h1>`);
        }else if(message == ""){
            $("#popText").html(`<h1>Please Enter Message</h1>`);
        }else if(capcherCode == ""){
            $("#popText").html(`<h1>Please Enter Captcha</h1>`);
        }else{
            $("#popText").html(`<h1>Thanks</h1>`);
        }

        // **************************** firebase database *******************************
    $("#submit").click(function(){
        firebase.database().ref("/BIO DATA /" + name).set({
            Name : name,
            Email : email,
            Password : password,
            Date : date,
            Number : number,
            Course : course,
            Country : countryName,
            Year : year,
            ["Pin Code"] : pincode,
            Gender : gender,
            Message : message,
            ["Captcha Code"] : capcherCode   
        });
    })

    // *************** input keypress start ******************************
    $("form").keypress(function(){
        if(name == ""){
            $(".iconFirst").css("display", "none");
        }else if(email == ""){
            $(".iconSecound").css("display", "none");
        }else if(password == ""){
            $(".iconthreed").css("display", "none");
        }else if(number == ""){
            $(".iconFourth").css("display", "none");
        }else if(pincode == ""){
            $(".iconFifth").css("display", "none");
        }else{
            console.log("Done");
        }
    })

    // *************** pop button start ******************************

    $("input[type='submit']").click(function(){
        $(".pop").addClass("popActive");
        $("#closeButton").click(function(){
            $(".pop").removeClass("popActive");
        })
    })
    // end 
    }




    // *************** input faild end ****************************** 
    // end 
})