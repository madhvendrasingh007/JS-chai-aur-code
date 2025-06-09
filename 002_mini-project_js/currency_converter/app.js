// Get references to HTML elements we'll use frequently
const fromSelect = document.querySelector("[name='from']");
const toSelect = document.querySelector("[name='to']");
const amountInput = document.querySelector("input[type='text']");
const exchangeMsg = document.querySelector(".msg span");
const convertBtn = document.querySelector(".convert-btn");
const form = document.querySelector("form");

// API URL for getting exchange rates (using a free API)
const API_URL = "https://api.exchangerate-api.com/v4/latest/";

// Function to populate dropdown menus with all currencies
function populateDropdowns() {
    // Clear existing options first
    fromSelect.innerHTML = "";
    toSelect.innerHTML = "";
    
    // Loop through each currency in countryList object
    for (let currencyCode in countryList) {
        // Create option element for "From" dropdown
        const fromOption = document.createElement("option");
        fromOption.value = currencyCode;
        fromOption.text = currencyCode;
        fromSelect.appendChild(fromOption);
        
        // Create option element for "To" dropdown
        const toOption = document.createElement("option");
        toOption.value = currencyCode;
        toOption.text = currencyCode;
        toSelect.appendChild(toOption);
    }
    
    // Set default values
    fromSelect.value = "USD";
    toSelect.value = "INR";
    
    // Update flags when dropdowns are populated
    updateFlag(fromSelect);
    updateFlag(toSelect);
}

// Function to update country flag when currency is selected
function updateFlag(selectElement) {
    // Get the selected currency code
    const currencyCode = selectElement.value;
    
    // Get the country code from countryList
    const countryCode = countryList[currencyCode];
    
    // Find the flag image next to this select element
    const flagImg = selectElement.parentElement.querySelector("img");
    
    // Update the flag image source
    flagImg.src = `https://flagsapi.com/${countryCode}/flat/64.png`;
    flagImg.alt = `${currencyCode} Flag`;
}

// Function to get exchange rate from API
async function getExchangeRate() {
    // Get selected currencies and amount
    const fromCurrency = fromSelect.value;
    const toCurrency = toSelect.value;
    const amount = amountInput.value;
    
    // Check if amount is valid
    if (!amount || amount <= 0) {
        alert("Please enter a valid amount");
        return;
    }
    
    try {
        // Show loading state
        convertBtn.classList.add("loading");
        exchangeMsg.innerHTML = "Getting exchange rate...";
        
        // Make API request
        const response = await fetch(`${API_URL}${fromCurrency}`);
        const data = await response.json();
        
        // Get exchange rate for target currency
        const exchangeRate = data.rates[toCurrency];
        
        // Calculate converted amount
        const convertedAmount = (amount * exchangeRate).toFixed(2);
        
        // Update the message with exchange rate
        exchangeMsg.innerHTML = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
        
    } catch (error) {
        // Handle errors
        console.error("Error fetching exchange rate:", error);
        exchangeMsg.innerHTML = "Error getting exchange rate. Please try again.";
    } finally {
        // Remove loading state
        convertBtn.classList.remove("loading");
    }
}

// Function to swap currencies
function swapCurrencies() {
    // Store current values
    const fromValue = fromSelect.value;
    const toValue = toSelect.value;
    
    // Swap the values
    fromSelect.value = toValue;
    toSelect.value = fromValue;
    
    // Update flags after swapping
    updateFlag(fromSelect);
    updateFlag(toSelect);
    
    // If there's an amount, get new exchange rate
    if (amountInput.value && amountInput.value > 0) {
        getExchangeRate();
    }
}

// Event Listeners - These run when user interacts with elements

// When page loads, populate dropdowns
document.addEventListener("DOMContentLoaded", function() {
    populateDropdowns();
});

// When form is submitted, get exchange rate
form.addEventListener("submit", function(e) {
    e.preventDefault(); // Prevent page refresh
    getExchangeRate();
});

// When currency selection changes, update flag
fromSelect.addEventListener("change", function() {
    updateFlag(this);
});

toSelect.addEventListener("change", function() {
    updateFlag(this);
});

// When amount input changes, automatically get new rate (optional)
amountInput.addEventListener("input", function() {
    // Only auto-update if amount is valid and we have a previous conversion
    if (this.value && this.value > 0 && exchangeMsg.innerHTML.includes("=")) {
        // Add small delay to avoid too many API calls
        clearTimeout(window.exchangeTimeout);
        window.exchangeTimeout = setTimeout(() => {
            getExchangeRate();
        }, 1000); // Wait 1 second after user stops typing
    }
});

// Make swapCurrencies function available globally for HTML onclick
window.swapCurrencies = swapCurrencies;