let userInput = document.getElementById("date");
userInput.max = new Date().toISOString().split("T")[0];

document.querySelector("button").addEventListener("click", calculateAge);

function calculateAge() {
    let birthDate = new Date(userInput.value);
    let today = new Date();

    let d1 = birthDate.getDate();
    let m1 = birthDate.getMonth() + 1; // Months are 0-based, so add 1
    let y1 = birthDate.getFullYear();

    let d2 = today.getDate();
    let m2 = today.getMonth() + 1; // Months are 0-based, so add 1
    let y2 = today.getFullYear();

    let y3 = y2 - y1; // Calculate initial age in years

    // Adjust month difference
    let m3;
    if (m2 >= m1) {
        m3 = m2 - m1;
    } else {
        y3--; // Adjust year if month difference is negative
        m3 = 12 + m2 - m1;
    }

    // Adjust day difference
    let d3;
    if (d2 >= d1) {
        d3 = d2 - d1;
    } else {
        m3--; // Adjust month if day difference is negative
        d3 = getDaysInMonth(y1, m1) + d2 - d1;
    }

    // If month difference is negative after day adjustment, adjust year
    if (m3 < 0) {
        m3 = 11; // Set month to December
        y3--;
    }

    console.log(`Age: ${y3} years, ${m3} months, ${d3} days`);
}

function getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate(); // Month is 1-based, so 0 for last day of the previous month
}
