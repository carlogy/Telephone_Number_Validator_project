function telephoneCheck(str) {

    const phoneArray = str.split('');
    const filteredNumber = [];

    phoneArray.map((num) => {
       let char = parseInt(num);
       if(!isNaN(char)) {
         filteredNumber.push(char)
       }
    });

  const hasSpecialChar = phoneArray.some(char => char.match(/[!@#$%^&*_+]/));



  if (phoneArray.length > 16 || filteredNumber.length > 11 || filteredNumber.length < 9) {
    return false;
  } else if (phoneArray[5] === ')' && phoneArray.length === 14 & phoneArray[1] !== '(' ) {
    return false;
  }
  else if (hasSpecialChar) {
    return false;
  } else if (filteredNumber[0] !== 1 && filteredNumber.length === 11) {
    return false;
  } else if(phoneArray[0] !== '1' && phoneArray.length > 14) {
    return false;
  }else if (phoneArray[0] == '(' && phoneArray[phoneArray.length -1] == ')') {
    return false;
  } else if(phoneArray.length === 13 && phoneArray[0] === '(' && phoneArray[4] !== ')') {
    console.log(phoneArray)
    return false;
  }
  else if (filteredNumber.length === 11 && filteredNumber[0] === 1 ) {
    return true;
  } else if (filteredNumber.length === 10 && phoneArray.length !== 14 && phoneArray[3] !== ')') {
    return true;
  }
  else {
    return false;
  }

  }
  telephoneCheck("(555)555-5555");