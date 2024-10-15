const time = document.getElementById("time");
const quotedoc = document.getElementById("quote");
const email=document.getElementById("email");
const password=document.getElementById("password");
const submit=document.getElementById("submit");
const warning=document.getElementById("warning");

function gettime() {
    const curr_time = new Date();
    let day = curr_time.getDay();
    switch (day) {
        case 0: day = 'SUN'; break;
        case 1: day = 'MON'; break;
        case 2: day = 'TUE'; break;
        case 3: day = 'WED'; break;
        case 4: day = 'THU'; break;
        case 5: day = 'FRI'; break;
        case 6: day = 'SAT'; break;
    }

    const date = curr_time.getDate();
    let month = curr_time.getMonth();
    switch (month) {
        case 0: month = 'JAN'; break;
        case 1: month = 'FEB'; break;
        case 2: month = 'MAR'; break;
        case 3: month = 'APR'; break;
        case 4: month = 'MAY'; break;
        case 5: month = 'JUN'; break;
        case 6: month = 'JUL'; break;
        case 7: month = 'AUG'; break;
        case 8: month = 'SEP'; break;
        case 9: month = 'OCT'; break;
        case 10: month = 'NOV'; break;
        case 11: month = 'DEC'; break;
    }

    time.innerHTML = `${day} | ${date} ${month}`;
}
setInterval(gettime, 1000);

async function getQuote() {
    try {
        const response = await fetch(`https://zenquotes.io/api/today`);
        const quote_data = await response.json();
        const quote = quote_data[0].q;
        quotedoc.innerHTML = (`" ${quote} "`);
    } catch (err) {
        console.error("Failed to fetch the quote", err);
        quotedoc.innerHTML = "Quote not available";
    }
}

getQuote();