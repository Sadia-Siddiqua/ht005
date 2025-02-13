// script.js

// HOMEPAGE FUNCTIONALITY

// 1. Get Started Button Scroll
document.addEventListener("DOMContentLoaded", function() {
    const ctaBtn = document.querySelector('.cta-btn');
    if (ctaBtn) {
        ctaBtn.addEventListener('click', function() {
            window.location.href = '#get-started'; // Scroll or navigate to a section
        });
    }
});


// MARKETPLACE FUNCTIONALITY

// 2. Product Search in Marketplace
function searchProduct() {
    const searchTerm = document.getElementById('productSearch').value.toLowerCase();
    const products = document.querySelectorAll('.product-card');

    products.forEach(product => {
        const productName = product.querySelector('h3').textContent.toLowerCase();
        const productLocation = product.querySelector('p').textContent.toLowerCase();

        // Show products that match the search term
        if (productName.includes(searchTerm) || productLocation.includes(searchTerm)) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}

// 3. Add Product to Cart (Simulated functionality)
function addToCart(productId) {
    console.log('Product added to cart:', productId);
    alert('Product added to your cart!');
}

// Add event listeners to all "Add to Cart" buttons
const addCartButtons = document.querySelectorAll('.add-cart-btn');
addCartButtons.forEach(button => {
    button.addEventListener('click', function() {
        const productCard = this.closest('.product-card');
        const productId = productCard.getAttribute('data-product-id');
        addToCart(productId);
    });
});

// 4. Handle "Buy Now" button click in Marketplace
const buyNowButtons = document.querySelectorAll('.buy-now-btn');
buyNowButtons.forEach(button => {
    button.addEventListener('click', function() {
        const productCard = this.closest('.product-card');
        const productName = productCard.querySelector('h3').textContent;
        alert('Proceeding to checkout for ' + productName);
    });
});

// 5. Farmer Section: Add Product Button (Redirect to add product page)
const addProductBtn = document.querySelector('.add-product-btn');
if (addProductBtn) {
    addProductBtn.addEventListener('click', function() {
        alert('Redirecting to product listing page for farmers...');
        window.location.href = 'add-product.html'; // Link to a page for adding products
    });
}


// PRICE MONITORING FUNCTIONALITY

// 6. Price Chart using Chart.js
const priceData = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'], // Weeks or months
    datasets: [{
        label: 'Price of Rice',
        data: [120, 130, 125, 135, 140], // Sample price data for Rice (replace with real data)
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
    }]
};

// Create the chart for price trends in Price Monitoring page
const ctx = document.getElementById('priceChart').getContext('2d');
const priceChart = new Chart(ctx, {
    type: 'line', // Type of chart
    data: priceData,
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// 7. Set Price Alerts
function setPriceAlert() {
    const product = document.getElementById('alert-product').value;
    const thresholdPrice = document.getElementById('alert-price').value;
    if (product && thresholdPrice) {
        alert(`Price alert set for ${product} when price goes ${thresholdPrice} or below.`);
    } else {
        alert('Please fill in the product name and price threshold.');
    }
}

// Add event listener for the "Set Alert" button
const setAlertButton = document.querySelector('.price-alerts button');
if (setAlertButton) {
    setAlertButton.addEventListener('click', setPriceAlert);
}

// 8. Download Historical Data (Simulated)
function downloadData() {
    alert('Downloading historical price data...');
    // Simulated data download functionality (you can replace this with actual data fetching logic)
}

// Add event listener for the "Download Data" button
const downloadButton = document.querySelector('.historical-data button');
if (downloadButton) {
    downloadButton.addEventListener('click', downloadData);
}

// script.js

// 1. Video Tutorial Section - Handle Video Embedding
// We can dynamically handle video embedding if needed (for now, just placeholders)
const videoLinks = document.querySelectorAll('.video iframe');
videoLinks.forEach(video => {
    video.addEventListener('click', function() {
        this.play(); // Play the video when clicked (optional)
    });
});

// 2. FAQ Section - Expand/Collapse Answers
const faqItems = document.querySelectorAll('.faq-item');
faqItems.forEach(item => {
    const question = item.querySelector('h4');
    question.addEventListener('click', function() {
        const answer = item.querySelector('p');
        answer.classList.toggle('visible');
        if (answer.classList.contains('visible')) {
            answer.style.display = 'block';
        } else {
            answer.style.display = 'none';
        }
    });
});

// 3. Product Search in Learning Resources - Search Filter for Articles and Blogs
function searchArticles() {
    const searchTerm = document.getElementById('articleSearch').value.toLowerCase();
    const articles = document.querySelectorAll('.article');

    articles.forEach(article => {
        const title = article.querySelector('h4').textContent.toLowerCase();
        const description = article.querySelector('p').textContent.toLowerCase();

        if (title.includes(searchTerm) || description.includes(searchTerm)) {
            article.style.display = 'block'; // Show the article if search term matches
        } else {
            article.style.display = 'none'; // Hide the article if search term doesn't match
        }
    });
}

// 4. Community Forum - Toggle the Join Forum Button
const joinForumButton = document.querySelector('.join-forum-btn');
if (joinForumButton) {
    joinForumButton.addEventListener('click', function() {
        // Simulating the forum joining action (you can replace this with a real redirect or action)
        alert('Redirecting to the Farmer Community Forum...');
        window.location.href = 'forum.html'; // Replace with actual forum URL or page
    });
}

// 5. Form Validation for Alerts (Optional)
// Function to validate that all fields are filled before setting an alert
function validateAlertForm() {
    const product = document.getElementById('alert-product').value;
    const thresholdPrice = document.getElementById('alert-price').value;

    if (!product || !thresholdPrice) {
        alert('Please fill in both product and price threshold to set an alert.');
        return false;
    }
    return true;
}

// 6. Event Listeners for Set Price Alert and other sections
const alertButton = document.querySelector('.price-alerts button');
if (alertButton) {
    alertButton.addEventListener('click', function() {
        if (validateAlertForm()) {
            setPriceAlert();
        }
    });
}

// 7. Set Price Alert Function (For setting price alert)
function setPriceAlert() {
    const product = document.getElementById('alert-product').value;
    const thresholdPrice = document.getElementById('alert-price').value;
    alert(`Price alert set for ${product} when price goes ${thresholdPrice} or below.`);
}

// 8. Download Historical Data (Simulated for now)
function downloadData() {
    alert('Downloading historical price data...');
    // Here, you can implement actual logic to fetch and download real data
}

// Adding event listener for the download button
const downloadButton = document.querySelector('.historical-data button');
if (downloadButton) {
    downloadButton.addEventListener('click', downloadData);
}

// script.js

// Example Data for Market Monitoring (replace with real-time data from your database)
const marketData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'], // Time intervals (Months)
    datasets: [{
        label: 'Rice Prices',
        data: [100, 110, 105, 115, 120], // Sample price data for Rice (replace with real-time data)
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true, // Fill the area under the graph
    }]
};

// Create the market price trend chart
const ctx = document.getElementById('marketChart').getContext('2d');
const marketChart = new Chart(ctx, {
    type: 'line', // Type of chart (line chart for trends)
    data: marketData,
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        },
        responsive: true, // Make the chart responsive to screen size
    }
});

// Function to view full market report (for demonstration purposes)
function viewFullReport() {
    alert('Redirecting to the full market report...');
    // You can link this to an actual report or data visualization page
    window.location.href = 'market-report.html'; // Replace with actual report URL or page
}
// Handle Sign Up Form
const signUpForm = document.getElementById('signUpForm');
if (signUpForm) {
    signUpForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const role = document.getElementById('role').value;

        // Simple form validation
        if (!username || !email || !password || !role) {
            alert('Please fill in all the fields.');
            return;
        }

        // Save the user data (this is just an example, actual implementation will require backend integration)
        console.log('User Registered:', { username, email, password, role });

        // Redirect or show success message
        alert('Sign Up successful!');
        window.location.href = 'login.html'; // Redirect to login page
    });
}

// Handle Login Form
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Simple form validation
        if (!email || !password) {
            alert('Please fill in all fields.');
            return;
        }

        // Perform login (this would involve backend validation)
        console.log('User Logged In:', { email, password });

        // Redirect or show success message
        alert('Login successful!');
        window.location.href = 'index.html'; // Redirect to homepage (or marketplace)
    });
}

// script.js

function getPrediction() {
    // Simulate an AI-powered prediction
    setTimeout(() => {
        const predictedPrice = (Math.random() * (500 - 100) + 100).toFixed(2); // Generate a random price between 100 and 500
        document.getElementById("predictionResult").style.display = 'block';
        document.getElementById("priceResult").textContent = `$${predictedPrice} per kg`; // Display the price
    }, 2000); // Simulate loading time with a 2-second delay
}
// script.js

// Function to simulate logging a transaction in the blockchain
function logTransaction() {
    // Simulated blockchain transaction data (this would typically be done with a real blockchain API)
    const transactionData = {
        product: 'Rice',
        storageLocation: 'Warehouse 1',
        storageConditions: 'Temperature: 20°C, Humidity: 60%',
        transportationRoute: 'Farm A → Warehouse 1 → Market B',
        transactionTime: new Date().toLocaleString(),
    };

    // Simulate adding the transaction to the blockchain ledger
    setTimeout(() => {
        document.getElementById("transactionResult").style.display = 'block';
        document.getElementById("transactionDetails").textContent = 
            `Product: ${transactionData.product}
            \nStorage Location: ${transactionData.storageLocation}
            \nStorage Conditions: ${transactionData.storageConditions}
            \nTransportation Route: ${transactionData.transportationRoute}
            \nLogged at: ${transactionData.transactionTime}`;
    }, 2000); // Simulate delay for transaction logging
}

// script.js

// Demo data representing today's product prices
let priceData = [
    { product: "Rice", price: "50 BDT", trend: "↗️" },
    { product: "Onions", price: "40 BDT", trend: "↘️" },
    { product: "Wheat", price: "35 BDT", trend: "↗️" },
    { product: "Potatoes", price: "20 BDT", trend: "↗️" },
    { product: "Tomatoes", price: "30 BDT", trend: "↘️" },
];

// Function to display price data in the table
function displayPrices() {
    const priceTableBody = document.getElementById("priceData");
    priceTableBody.innerHTML = ""; // Clear the current table data

    priceData.forEach(item => {
        const row = document.createElement("tr");

        const productCell = document.createElement("td");
        productCell.textContent = item.product;

        const priceCell = document.createElement("td");
        priceCell.textContent = item.price;

        const trendCell = document.createElement("td");
        trendCell.textContent = item.trend;

        row.appendChild(productCell);
        row.appendChild(priceCell);
        row.appendChild(trendCell);

        priceTableBody.appendChild(row);
    });
}

// Function to simulate price data refresh (this would be replaced with an API call in real-time)
function refreshPrices() {
    // Simulating price data change
    priceData.forEach(item => {
        const randomChange = Math.floor(Math.random() * 10) - 5; // Random change in price
        item.price = (parseInt(item.price) + randomChange).toString() + " BDT";
        item.trend = randomChange > 0 ? "↗️" : randomChange < 0 ? "↘️" : "➖";
    });

    displayPrices(); // Refresh the displayed prices
}

// Call the function to display initial prices on page load
window.onload = function() {
    displayPrices();
};

// Demo data for market price trends (this can be replaced with real-time data)
const marketPriceData = {
    labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'], // Days
    datasets: [{
        label: 'Price of Rice (BDT)',
        data: [50, 52, 55, 60, 65, 62, 70], // Simulated prices for Rice over the last 7 days
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true, // Fill the area under the graph
    },
    {
        label: 'Price of Onions (BDT)',
        data: [40, 38, 36, 42, 45, 48, 47], // Simulated prices for Onions over the last 7 days
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        fill: true,
    },
    {
        label: 'Price of Wheat (BDT)',
        data: [35, 37, 40, 42, 43, 45, 44], // Simulated prices for Wheat over the last 7 days
        borderColor: 'rgba(153, 102, 255, 1)',
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        fill: true,
    }]
};

// Demo data for product inventory (this can be replaced with real-time data)
const productInventory = [
    { product: "Rice", quantity: 1000, price: 50, status: "In Stock" },
    { product: "Onions", quantity: 500, price: 40, status: "In Stock" },
    { product: "Wheat", quantity: 1200, price: 35, status: "In Stock" },
    { product: "Potatoes", quantity: 300, price: 20, status: "Low Stock" },
    { product: "Tomatoes", quantity: 700, price: 30, status: "In Stock" },
];

// Demo data for market alerts (this can be replaced with real-time alert data)
const marketAlerts = [
    "Price manipulation detected for Rice in region X.",
    "Hoarding issue reported for Onions in region Y.",
    "Low stock levels for Potatoes in Warehouse 1.",
    "Price surge detected for Tomatoes in region Z.",
    "Unusual price fluctuations detected for Wheat in region A.",
];

// script.js

// Render the market price chart (using Chart.js)
const ctx = document.getElementById('marketPriceChart').getContext('2d');
const marketPriceChart = new Chart(ctx, {
    type: 'line',
    data: marketPriceData,
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        },
        responsive: true,
    }
});

// Function to display product inventory in the table
function displayInventory() {
    const inventoryTable = document.getElementById("inventoryData");
    inventoryTable.innerHTML = ""; // Clear existing data

    productInventory.forEach(item => {
        const row = document.createElement("tr");

        const productCell = document.createElement("td");
        productCell.textContent = item.product;

        const quantityCell = document.createElement("td");
        quantityCell.textContent = item.quantity;

        const priceCell = document.createElement("td");
        priceCell.textContent = item.price + " BDT";

        const statusCell = document.createElement("td");
        statusCell.textContent = item.status;

        row.appendChild(productCell);
        row.appendChild(quantityCell);
        row.appendChild(priceCell);
        row.appendChild(statusCell);

        inventoryTable.appendChild(row);
    });
}

// Function to display market alerts in the list
function displayMarketAlerts() {
    const alertsList = document.getElementById("alerts");
    alertsList.innerHTML = ""; // Clear existing alerts

    if (marketAlerts.length > 0) {
        marketAlerts.forEach(alert => {
            const alertItem = document.createElement("li");
            alertItem.textContent = alert;
            alertsList.appendChild(alertItem);
        });
    } else {
        const noAlertsItem = document.createElement("li");
        noAlertsItem.textContent = "No alerts currently.";
        alertsList.appendChild(noAlertsItem);
    }
}

// Call the functions to populate the data on page load
window.onload = function() {
    displayInventory();
    displayMarketAlerts();
};
// script.js

// Sample demo data for regulation alerts (can be replaced with real-time data)
const regulationAlerts = [
    { alertType: "Price Manipulation", product: "Rice", region: "Region X", status: "Pending", action: "Resolve" },
    { alertType: "Hoarding", product: "Onions", region: "Region Y", status: "Pending", action: "Resolve" },
    { alertType: "Low Stock", product: "Potatoes", region: "Region Z", status: "Resolved", action: "Investigate" },
    { alertType: "Price Surge", product: "Tomatoes", region: "Region A", status: "Pending", action: "Resolve" },
];

// Function to display regulation alerts in the table
function displayAlerts() {
    const alertsTableBody = document.getElementById("alertsData");
    alertsTableBody.innerHTML = ""; // Clear existing alerts

    regulationAlerts.forEach(alert => {
        const row = document.createElement("tr");

        const alertTypeCell = document.createElement("td");
        alertTypeCell.textContent = alert.alertType;

        const productCell = document.createElement("td");
        productCell.textContent = alert.product;

        const regionCell = document.createElement("td");
        regionCell.textContent = alert.region;

        const statusCell = document.createElement("td");
        statusCell.textContent = alert.status;

        const actionCell = document.createElement("td");
        const actionButton = document.createElement("button");
        actionButton.textContent = alert.action;
        actionButton.onclick = function() {
            resolveAlert(alert);
        };
        actionCell.appendChild(actionButton);

        row.appendChild(alertTypeCell);
        row.appendChild(productCell);
        row.appendChild(regionCell);
        row.appendChild(statusCell);
        row.appendChild(actionCell);

        alertsTableBody.appendChild(row);
    });
}

// Function to mark an alert as resolved and update the status
function resolveAlert(alert) {
    alert.status = "Resolved"; // Change the status to "Resolved"
    alert.action = "Investigation Pending"; // Change the action to something else if needed
    displayAlerts(); // Re-render the alerts table with updated status
}

// Call the function to display the initial alerts on page load
window.onload = function() {
    displayAlerts();
};
// script.js

// Sample data for users (can be replaced with actual data from an API or database)
const users = [
    { userId: 1, name: "John Doe", email: "john@example.com", role: "Farmer", status: "Active" },
    { userId: 2, name: "Jane Smith", email: "jane@example.com", role: "Consumer", status: "Inactive" },
    { userId: 3, name: "Alice Johnson", email: "alice@example.com", role: "Government", status: "Active" },
];

// Function to display user data in the table
function displayUsers() {
    const userTableBody = document.getElementById("userData");
    userTableBody.innerHTML = ""; // Clear existing data

    users.forEach(user => {
        const row = document.createElement("tr");

        const userIdCell = document.createElement("td");
        userIdCell.textContent = user.userId;

        const nameCell = document.createElement("td");
        nameCell.textContent = user.name;

        const emailCell = document.createElement("td");
        emailCell.textContent = user.email;

        const roleCell = document.createElement("td");
        roleCell.textContent = user.role;

        const statusCell = document.createElement("td");
        statusCell.textContent = user.status;

        const actionsCell = document.createElement("td");
        const editButton = document.createElement("button");
        editButton.textContent = "Edit";
        const deactivateButton = document.createElement("button");
        deactivateButton.textContent = user.status === "Active" ? "Deactivate" : "Activate";
        
        // Add event listeners for buttons
        editButton.onclick = function() {
            alert("Editing user: " + user.name);
        };

        deactivateButton.onclick = function() {
            user.status = user.status === "Active" ? "Inactive" : "Active"; // Toggle status
            displayUsers(); // Re-render the user list with updated status
        };

        actionsCell.appendChild(editButton);
        actionsCell.appendChild(deactivateButton);

        row.appendChild(userIdCell);
        row.appendChild(nameCell);
        row.appendChild(emailCell);
        row.appendChild(roleCell);
        row.appendChild(statusCell);
        row.appendChild(actionsCell);

        userTableBody.appendChild(row);
    });
}

// Call the function to display initial users on page load
window.onload = function() {
    displayUsers();
};

// script.js

// Function to handle logout and clear session storage or token (if applicable)
function logout() {
    // Clear session or local storage if you're using them
    sessionStorage.clear();
    localStorage.clear();
    
    // Redirect to the homepage or login page
    window.location.href = 'index.html'; // or 'login.html'
}

// Call the logout function when the user visits the logout page
window.onload = function() {
    logout(); // This will clear storage and redirect the user to the homepage
};
// Check if MetaMask is installed
if (typeof window.ethereum !== 'undefined') {
    // Connect to MetaMask
    const web3 = new Web3(window.ethereum);

    // Request user to connect their wallet
    window.ethereum.request({ method: 'eth_requestAccounts' })
        .then(accounts => {
            const account = accounts[0];  // Use the first account
            console.log('Connected Account:', account);

            // Use the account for interacting with smart contracts
            interactWithContract(account);
        })
        .catch(error => {
            console.error('User denied access:', error);
        });
} else {
    alert('Please install MetaMask to interact with Ethereum.');
}

// Example smart contract ABI and address
const contractABI = [ /* Your contract ABI here */ ];
const contractAddress = 'YOUR_CONTRACT_ADDRESS';  // Replace with your contract's address

// Interact with the smart contract
function interactWithContract(account) {
    const contract = new web3.eth.Contract(contractABI, contractAddress);

    // Example: Call a function from the contract (e.g., get data)
    contract.methods.someMethod().call()
        .then(result => {
            console.log('Contract Call Result:', result);
        })
        .catch(error => {
            console.error('Contract call failed:', error);
        });

    // Example: Send a transaction to the contract (e.g., completing a transaction)
    contract.methods.completeTransaction().send({ from: account, value: web3.utils.toWei('1', 'ether') })
        .then(result => {
            console.log('Transaction completed:', result);
        })
        .catch(error => {
            console.error('Transaction failed:', error);
        });
}

// Show the corresponding form based on selected option (Exchange, Rent, or Sell)
function showForm(formType) {
    // Hide all forms initially
    document.getElementById('exchangeForm').style.display = 'none';
    document.getElementById('rentForm').style.display = 'none';
    document.getElementById('sellForm').style.display = 'none';
  
    // Show the selected form based on the type
    if (formType === 'exchange') {
      document.getElementById('exchangeForm').style.display = 'block';
    } else if (formType === 'rent') {
      document.getElementById('rentForm').style.display = 'block';
    } else if (formType === 'sell') {
      document.getElementById('sellForm').style.display = 'block';
    }
  }
  
  // Handle form submissions for Equipment Exchange, Rent, and Sell
  document.getElementById('exchangeEquipment').onsubmit = function(event) {
    event.preventDefault();
    const message = 'Your equipment exchange request has been submitted.';
    document.getElementById('message').textContent = message;
  };
  
  document.getElementById('rentEquipment').onsubmit = function(event) {
    event.preventDefault();
    const message = 'Your equipment rent request has been submitted.';
    document.getElementById('message').textContent = message;
  };
  
  document.getElementById('sellEquipment').onsubmit = function(event) {
    event.preventDefault();
    const message = 'Your equipment sell request has been submitted.';
    document.getElementById('message').textContent = message;
  };
  // Handle microloan form submission
document.getElementById('microloanForm').onsubmit = function(event) {
    event.preventDefault();
    
    // Get form data
    const loanType = document.getElementById('loanType').value;
    const loanAmount = document.getElementById('loanAmount').value;
    const loanDuration = document.getElementById('loanDuration').value;
    const loanProvider = document.getElementById('loanProvider').value;
    let interestRate = "0%";  // Default for imported staple food
    
    // Update interest rate for local farming products
    if (loanType === "local") {
        interestRate = "3%"; // Set interest rate for local farming
    }
    
    // Show confirmation message
    const confirmationMessage = `
      <h3>Loan Application Submitted</h3>
      <p>Loan Type: ${loanType === 'imported' ? 'Imported Staple Food' : 'Local Farming Products'}</p>
      <p>Loan Amount: ${loanAmount} BDT</p>
      <p>Loan Duration: ${loanDuration} month(s)</p>
      <p>Interest Rate: ${interestRate}</p>
      <p>Loan Provider: ${loanProvider === 'ngo' ? 'NGO' : 'Bank'}</p>
      <p>Your application will be reviewed, and you will be notified once it is approved.</p>
    `;
    document.getElementById('confirmationMessage').innerHTML = confirmationMessage;
};
