const dropdownText = document.getElementsByClassName("dropdownText");
const dropdownItems = document.getElementsByClassName("dropdownItems");

let totalDropdowns = dropdownText.length;

// this loop will run for each dropdown
for (let i = 0; i < totalDropdowns; i ++) {
    const text = dropdownText[i];
    const item = dropdownItems[i];

    text.addEventListener("click", () => {

        // closes dropdowns after clicking a new one
        // the if function closes the dropdown when clicking an active dropdown
        for (let j = 0; j < totalDropdowns; j ++) {
            if(i != j){
                const element = dropdownItems[j];
                element.classList.remove("active");
            }  
        }
        item.classList.toggle("active")
    })
}