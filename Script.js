
    document.querySelector("form").addEventListener("submit", function(event) {
        let password = document.getElementById("password").value;
        let confirmPassword = document.getElementById("confirm_password").value; // JavaScript function to check if passwords match
        let phone = document.getElementById("phone").value;

        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            event.preventDefault(); // Prevent form submission if passwords don't match
        }

        // Check if phone number is exactly 10 digits and numeric
        let phonePattern = /^\d{10}$/; // Regex for 10-digit numeric input
        if (!phonePattern.test(phone)) {
            alert("Please enter a valid 10-digit phone number!");
            event.preventDefault(); // Stop form submission
        }
    });