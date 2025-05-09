
function getalert(){
    document.write("welcome to javascript");
}
function getalert1() {
    document.getElementById("result").innerHTML='welcome to javascript';
}
function calculate() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);

    var add = num1 + num2;
    var sub = num1 - num2;
    var mul = num1 * num2;

    document.getElementById('result_add').innerHTML = "Addition: " + add;
    document.getElementById('result_sub').innerHTML = "Subtraction: " + sub;
    document.getElementById('result_mul').innerHTML = "Multiplication: " + mul;
}
function hid(id1) {
     var id1=id1;
    confirmw=confirm("Do u want hide this row!");
    if(confirmw==true) {
        document.getElementById(id1).style.visibility="hidden";
    }
}
{
    function get_big_image() {
        document.getElementById("img_id").width="700";
    }
    function get_normal_image() {
        document.getElementById("img_id").width="200";
        document.getElementById("img_id").height="300";
    }
}
function get_word_count() { var wordCount =
    document.getElementById("get_word_count").value;
    wordCount1 = wordCount.split(' ').length; 
    length = wordCount.length;
    cap = wordCount.toUpperCase(); 
    lowerCase = wordCount.toLowerCase();
    document.getElementById("result_here").innerHTML =length;
    document.getElementById("result_here_word").innerHTML=wordCount;
    document.getElementById("result_here_cap").innerHTML= cap;
    document.getElementById("result_here_low").innerHTML=wordCount1;
}
function return_get_start() {
    let val=document.getElementById("scroller");
    val.start();
}
function return_get_stop() {
    let val=document.getElementById("scroller");
    val.stop();
}
//  function addrow {
//      let parent=document.querySelector(".hi5");
//      let existinginput=document.getElementById("inp");

//      let newInput=document.createElement("input");
//      newInput.type="text";
//      newInput.style.marginleft="50px";
//      newInput.style.width="300px";
    
//      parent.insertBefore(bre, existinginput.nextSibling);
//      parent insertBefore(row, bre.nextSibling);

//      document.getElementById("btn-9").addEventListener("click",addrow);
//  }

 function newWindow() {
     openwindow=window.open("login.html", 'name' ,'height=500 width=500');
 }

function get_date_details(){
    var dateMonth=prompt("Give date/month ex:24/02");
    switch(dateMonth) {
        case '11/11':
            birthday="UdayaSri";
            break;
            case '05/02':
            birthday="Likitha";
            break;
            case '25/04':
            birthday="Chaitra";
            break;
            case '21/05':
            birthday="leenisha";
            break;
            case '22/05':
            birthday="Anusha";
            break;
            case '23/05':
            birthday="Deekshitha";
            break;
            default:
                birthday="No One birthday to day";
    }
    if(birthday==="No One birthday to day")
    {
        document.getElementById("birth").innerHTML="No Birthday found";
    }
        else
        {
            document.getElementById("birth").innerHTML="Today birthday is "+birthday;

        }
    
}
function checkStrength() 
{
    let password=document.getElementById("paw").value;
    let result=document.getElementById("result");
    let fill=document.getElementById("strength-fill");
    

    let hasUpper=/[A-Z]/.test(password);
    let hasLower=/[[a-z]/.test(password);
    let hasNumber=/[0-9]/.test(password);
    let hasSpecial=/[!@#$%^&*()_]/.test(password);
    let length=password.length>=0
    
    let strength=0;
    if(hasUpper)
    {
        strength++;
    }
    if(hasLower)
        {
            strength++;
        }
        if(hasNumber)
            {
                strength++;
            }
            if(hasSpecial)
                {
                    strength++;
                }
if(length)
{
    strength++;
}

if(strength<=2)
{
    result.textcontent="weak Password";
    result.style.color="red";
    fill.style.width="33%";
    fill.style.background="red";
}
else if(strength==3 || strength===4)
{
    result.textcontent="Medium Password";
    result.style.color="yellow";
    fill.style.width="75%";
    fill.style.background="yellow";
}   
else{
    result.textcontent="strong Password";
    result.style.color="green";
    fill.style.width="100%";
    fill.style.background="green";
}
}

 
let currentIndex = 0;

function showImage(index) {
    const images = document.getElementsByClassName('slidename');

    if (index >= images.length) currentIndex = 0;
    else if (index < 0) currentIndex = images.length - 1;
    else currentIndex = index;

    for (let i = 0; i < images.length; i++) {
        images[i].style.display = 'none';
    }

    images[currentIndex].style.display = 'block';
}

function next(n) {
    showImage(currentIndex + n);
}

window.onload = function() {
    showImage(currentIndex);
};
function show(tab_id) { id=tab_id + "_result";

    if(tab_id=="tab1"){ tab1.className +=" active";
        document.getElementById(id).style.display="block";
        document.getElementById("tab2_result").style.display="none";
        document.getElementById("tab3_result").style.display="none";
    } if(tab_id=="tab2"){ tab2.className +=" active";
        document.getElementById(id).style.display="block";
        document.getElementById("tab1_result").style.display="none";
        document.getElementById("tab3_result").style.display="none";
    } if(tab_id=="tab3"){ tab3.className +=" active";
        document.getElementById(id).style.display="block";
        document.getElementById("tab1_result").style.display="none";
        document.getElementById("tab2_result").style.display="none";
    }
}

function validate() {
    var name=document.getElementById("pr_name").value;
    var imageName=document.getElementById("pr_img").value;
    var cost=document.getElementById("pr_cost").value;
    var email=document.getElementById("pr_email").value;
    female=document.getElementById('female').checked;

    tel=document.getElementById('tel').checked;
    eng=document.getElementById('eng').checked;
    hin=document.getElementById('hin').checked;
    male=document.getElementById('male').checked;
    area=document.getElementById('area').checked;


    if(name==="") {
        document.getElementById("pr_name_result").innerHTML="Please Enter Your Name";
        document.getElementById("pr_name").focus();
        return false;
    }
    else {
        document.getElementById("pr_name_result").innerHTML="";
    }
    if(imageName==="") {
        document.getElementById("pr_img_result").innerHTML="Please Enter Your Number";
        document.getElementById("pr_img").focus();
        return false;
    }
    else {
        document.getElementById("pr_img_result").innerHTML="";
    }
    if(cost==="") {
        document.getElementById("pr_cost_result").innerHTML="Please Enter Your Number";
        document.getElementById("pr_cost").focus();
        return false;
    } else if(isNaN(cost)==true) {
        document.getElementById("pr_cost_result").innerHTML="Please Enter Your Number only";
        document.getElementById("pr_cost").focus();
        return false;
    }
    else {
        document.getElementById("pr_cost_result").innerHTML="";
    }
    if(email==="") {
        document.getElementById("pr_email_result").innerHTML="Please Enter Your email";
        document.getElementById("pr_email").focus();
        document.getElementById("pr_email").value="";
        document.getElementById("pr_email").focus();
        return false;
    }
    else if (checkmail.test(email)== false) {
        document.getElementById("pr_email_result").innerHTML="Please Enter a Valid Email";
        return false;
    }
    else {
        document.getElementById("pr_cost_result").innerHTML="";
    }
    if(male==false&&female==false)
    {
        document.getElementById("male_result").innerHTML="Please Check Male or Female";
        document.getElementById("male").focus();
        return false;
    }
    else {
        document.getElementById("male_result").innerHTML="";
    }
    if(tel==false&& eng==false&& hin==false) {
        document.getElementById("lang_result").innerHTML="Please Check Language";
        document.getElementById("tel").focus();
        return false;
    }
    else {
        document.getElementById("lang_result").innerHTML="";
    }
    if(area==="") {
        document.getElementById("area_result").innerHTML="Please Check Language";
        document.getElementById("area").focus();
        return false;
    }
    return true;
}

function addRow() {
    let parent=document.querySelector(".parent");
    let existingInput=document.getElementById("inp");

    let br=document.createElement("br");
    let newInput=document.createElement("input");

    newInput.type="text";
    newInput.style.width="300px";
    newInput.style.marginTop="5px";

    parent.insertBefore(br, existingInput.nextSibling);
    parent.insertBefore(newInput, br.nextSibling);
}

    document.getElementById("btn-9").addEventListener("click", addRow);