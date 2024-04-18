let otp='';
let userInputOtp='';

//ganarate otp via click the send otp button
const sendOTPBtn =document.getElementById("sendOTPBtn");
const ResendOtp=document.getElementById('ResendOtp');
sendOTPBtn.addEventListener('click',ganarateOtp);
ResendOtp.addEventListener('click',ganarateOtp);


//ganarate otp
function ganarateOtp(e){
    e.preventDefault();

    //disappare the send otp btn
    const sendOtpContainer=document.getElementById('sendOtpContainer');
    sendOtpContainer.style.display='none';

    //ganarate random number
    const randomNumber=Math.floor(1000+Math.random()*9000);
    otp=randomNumber;

    //show the modal
    const modal=document.getElementById('modal');
    modal.style.display="flex";
    modal.classList.add("showModal");

    //show the loading effect
    const loading=document.getElementById('loading');
    loading.style.display="block";

    setTimeout(()=>{
        // finished loading effect
        loading.style.display="none";

        //put the otp value div inside the modal
        const otpbox=document.getElementById('otpbox');
        const otpValueModal=document.getElementById('otpValueModal');
        otpbox.style.display="block";
        otpValueModal.innerText=otp;

    },1000);
}

//get otp model close
const otpmodalOkBtn=document.getElementById('otpmodalOkBtn');
otpmodalOkBtn.addEventListener("click",(e)=>{
    const modal=document.getElementById('modal');
    const otpbox=document.getElementById('otpbox');
    modal.style.display="none";
    modal.classList.remove('removeModal');
    otpbox.style.display='none';
})



//varificatin successfulll modal close
const varificationOkBtn=document.getElementById('varificationOkBtn');
varificationOkBtn.addEventListener('click',()=>{
    const modal=document.getElementById('modal');
    const varified=document.getElementById('varified');
    modal.style.display="none";
    modal.classList.remove('removeModal');
    varified.style.display='none';

    const sendOtpContainer=document.getElementById('sendOtpContainer');
    sendOtpContainer.style.display="block";
})


//varificatin failed modal close
const unvarificationOkBtn=document.getElementById('unvarificationOkBtn');
unvarificationOkBtn.addEventListener('click',()=>{
    const modal=document.getElementById('modal');
    const unvarified=document.getElementById('unvarified');
    modal.style.display="none";
    modal.classList.remove('removeModal');
    unvarified.style.display='none';
})


//handle otp input feiled function
function handleFocus(){
    const inputContainer=document.getElementById("inputContainer");

    inputContainer.addEventListener("input",(e)=>{
        const target=e.target;
        const value=target.value;

        //only allow the number type value
        if(isNaN(value)){
            target.value = "";
            return;
        }

        //focus the next input flelid
        const nextElement=target.nextElementSibling;
        if(nextElement){
            nextElement.focus();
        }        

        //asign the value in the variable
        userInputOtp+=value;
        
    })
}


//varify the otp
const varifyBtn=document.getElementById('varifyBtn');
varifyBtn.addEventListener('click',()=>{
    if(otp === parseInt(userInputOtp,10)){
        
        //show the otp modal and show the varifyed division
        const varified=document.getElementById('varified');
        const modal=document.getElementById('modal');
        modal.style.display="flex";
        modal.classList.add("showModal");
        varified.style.display="block";
        
    }else{
       //show the otp modal and show the unvarifyed division
       const unvarified=document.getElementById('unvarified');
       const modal=document.getElementById('modal');
       modal.style.display="flex";
       modal.classList.add("showModal");
       unvarified.style.display="block";
    }
});



//initialization the function 
function init(){
    handleFocus();
}

init();