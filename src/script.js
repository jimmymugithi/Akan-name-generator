document.getElementById("Akan-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const birthDateValue = document.getElementById("birthdate").value;
    const genderInputs = document.getElementsByName("gender");
    let gender = "";

    
    for (let i = 0; i < genderInputs.length; i++) {
        if (genderInputs[i].checked) {
            gender = genderInputs[i].value;
            break;
        }
    }


    if (!birthDateValue) {
        alert("Kindly enter your birthdate.");
        return;
    }
    if (!gender) {
        alert("Kindly select your gender.");
        return;
    }

    const birthDate = new Date(birthDateValue);
    const day = birthDate.getDate();
    let month = birthDate.getMonth() + 1;
    let year = birthDate.getFullYear();


    if (month < 3) {
        month += 12;
        year -= 1;
    }

    const CC = Math.floor(year / 100);
    const YY = year % 100;


    const dayOfWeek = Math.floor(
        (day + Math.floor(26 * (month + 1) / 10) + YY + Math.floor(YY / 4) + Math.floor(CC / 4) + 5 * CC) % 7
    );

    const dayIndex = ((dayOfWeek + 6) % 7); 

    const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const akanName = gender === "male" ? maleNames[dayIndex] : femaleNames[dayIndex];
    const bornDay = daysOfWeek[dayIndex];

    
    document.getElementById("New name").textContent = `You were born on a ${bornDay}. Your Akan name is ${akanName}.`;
});
