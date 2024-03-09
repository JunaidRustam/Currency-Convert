
document.getElementById('convertBtn').addEventListener('click', convert);

function convert() {
    const amount = document.getElementById('amount').value;
    const from = document.getElementById('from').value;
    const to = document.getElementById('to').value;
    
    // Call the API to get exchange rate data
    const apiUrl = `https://api.exchangerate-api.com/v4/latest/${from}`;
    
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // Extract the exchange rate for the 'to' currency
            const exchangeRate = data.rates[to];
            
            // Perform the conversion
            const result = amount * exchangeRate;
            
            // Display the result
            document.getElementById('result').innerText = `${amount} ${from} = ${result.toFixed(2)} ${to}`;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            document.getElementById('result').innerText = 'Error fetching data. Please try again later.';
        });
}


