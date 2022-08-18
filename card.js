function updateField(isIncrease) {
    const casenum = document.getElementById('case-number');
    const casenumString = casenum.value;
    const caseNum = parseInt(casenumString);

    if (isIncrease === true) {
       currentCaseNum = caseNum + 1;
    }
    else {
        currentCaseNum = caseNum - 1;
    }
    casenum.value = currentCaseNum;

// try to add sub total

 //                   casing price set
    
    const casingPrice = document.getElementById('casing-price');
    const totalCasingPrice = currentCaseNum * 59;
    casingPrice.innerText = totalCasingPrice;

    return currentCaseNum;

}


//                  phone price fucntion code write here




function updateFields(isIncrease) {
    const phonenum = document.getElementById('phone-number');
    const phonenumString = phonenum.value;
    const phoneNum = parseInt(phonenumString);

    if (isIncrease === true) {
       currentPhoneNum = phoneNum + 1;
    }
    else {
        currentPhoneNum = phoneNum - 1;
    }
    phonenum.value = currentPhoneNum;

 //                   phone price set
    
    const phonePrice = document.getElementById('phone-price');
    const totalPhonePrice = currentPhoneNum *1219;
    phonePrice.innerText = totalPhonePrice;
    

    return currentPhoneNum;

}

document.getElementById('phone-btn-pluse').addEventListener('click', function () {
    updateFields(true)
  
})
document.getElementById('phone-btn-minus').addEventListener('click', function () {
    updateFields(false)
   
})



document.getElementById('case-btn-pluse').addEventListener('click', function () {
    updateField(true)
   
})
document.getElementById('case-btn-minus').addEventListener('click', function () {
    updateField(false)
 
})