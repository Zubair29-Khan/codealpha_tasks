document.getElementById("ageForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const dobInput = document.getElementById("dob").value;

    if (!dobInput) {
        alert("Please enter a valid date of birth.");
        return; 
    }

    const birthDate = new Date(dobInput);
    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();

    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    document.getElementById("result").innerHTML = `Your age is: ${age} years old.`;
});
