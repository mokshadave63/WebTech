function validatePhoneNumber() {
    var phoneNumber = document.getElementById("phoneNumber").value;

    var phoneRegex = /^[6-9]\d{9}$/;

    if (phoneRegex.test(phoneNumber)) {
        phoneNumber="(91)"+phoneNumber;
        document.getElementById('result').innerHTML = "Valid phone number: " + phoneNumber;
    } else {
        document.getElementById('result').innerHTML = "Invalid phone number. It should start with a digit between 6-9 and be 10 digits long.";
    }
}