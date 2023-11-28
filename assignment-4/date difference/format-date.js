const prompt=require("prompt-sync")({sigint:true});

function formatDateToYYYYMMDD(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

// Example usage:
const dateToFormat = new Date(prompt());
const formattedDate = formatDateToYYYYMMDD(dateToFormat);
console.log(`Formatted date: ${formattedDate}`);
