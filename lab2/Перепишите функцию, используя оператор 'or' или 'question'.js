function checkAge(age) {
    return (age > 18) ?  true :  confirm('Родители разрешили?');

}

function checkAge2(age) {
    return (age > 18) ||  confirm('Родители разрешили?');

}

alert(checkAge2(19))