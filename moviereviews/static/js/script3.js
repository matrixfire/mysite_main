 
  function copyToClipboard(text) {
    const textarea = document.createElement("textarea");
    textarea.style.position = "fixed";
    textarea.style.opacity = 0;
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
  }
  
  function clearResult() {
    document.getElementById("result").innerHTML = "";
  }






function clearText() {
    document.getElementById("textInput").value = "";
    document.getElementById("result").innerHTML = "";
  }
  
  // The rest of the functions remain unchanged
  


  const commonNames = [
    "James", "John", "Robert", "Michael", "William", "David", "Richard", "Joseph", "Charles", "Thomas",
    "Christopher", "Daniel", "Matthew", "Anthony", "Donald", "Mark", "Paul", "Steven", "Andrew", "Kenneth",
    "George", "Joshua", "Kevin", "Brian", "Edward", "Ronald", "Timothy", "Jason", "Jeffrey", "Ryan",
    "Jacob", "Gary", "Nicholas", "Eric", "Jonathan", "Stephen", "Larry", "Scott", "Frank", "Benjamin",
    "Gregory", "Samuel", "Patrick", "Alexander", "Jack", "Dennis", "Jerry", "Tyler", "Aaron", "Henry",
    "Douglas", "Peter", "Jose", "Adam", "Zachary", "Nathan", "Walter", "Harold", "Jeremy", "Keith",
    "Roger", "Gerald", "Carl", "Terry", "Lawrence", "Joe", "Sean", "Christian", "Austin", "Randy",
    "Eugene", "Vincent", "Russell", "Roy", "Louis", "Bobby", "Philip", "Johnny", "Bradley", "Arthur",
    "Jimmy", "Albert", "Willie", "Jesse", "Billy", "Craig", "Alan", "Shawn", "Clarence", "Philip",
    "Chris", "Stanley", "Leonard", "Nathan", "Norma", "Jane", "Harry", "Vincent", "Irene"
  ];
  
  // You can use the commonNames array in your JavaScript code as needed.
  

  function guessNames2() {
    const textInput = document.getElementById("textInput").value;
    const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
    const emails = textInput.match(emailRegex);
  
    if (emails && emails.length > 0) {
      const uniqueEmails = Array.from(new Set(emails));
  
      const resultDiv = document.getElementById("result");
      resultDiv.innerHTML = "<h3>Email Addresses:</h3>";
  
      uniqueEmails.forEach(email => {
        const emailParts = email.split("@");
        const username = emailParts[0].toLowerCase();
  
        let longestMatch = "";
        commonNames.forEach(name => {
          if (username.includes(name.toLowerCase()) && name.length > longestMatch.length) {
            longestMatch = name;
          }
        });
  
        const displayName = longestMatch ? `${longestMatch.charAt(0).toUpperCase()}${longestMatch.slice(1)}` : "Unknown";
        resultDiv.innerHTML += `<p>${email}, ${displayName}</p>`;
      });
  
      // Copy the emails to the clipboard
      const copiedText = uniqueEmails.join("\n");
      copyToClipboard(copiedText);
  
      // Show success message
      resultDiv.innerHTML += "<p>Emails copied to clipboard!</p>";
    } else {
      alert("No email addresses found.");
    }
  }


  function extractAndCopyEmails() {
    const textInput = document.getElementById("textInput").value;
    const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
    const emails = textInput.match(emailRegex);
  
    if (emails && emails.length > 0) {
      const uniqueLowercaseEmails = Array.from(new Set(emails.map(email => email.toLowerCase())));
  
      const resultDiv = document.getElementById("result");
      resultDiv.innerHTML = `<h3>Email Addresses(Found: ${emails.length}):</h3>`;
      uniqueLowercaseEmails.forEach(email => {
        resultDiv.innerHTML += `<p>${email}</p>`;
      });
  
      // Copy the emails to the clipboard
      const copiedText = uniqueLowercaseEmails.join("\n");
      copyToClipboard(copiedText);
  
      // Show success message
      resultDiv.innerHTML += "<p>Emails copied to clipboard!</p>";
    } else {
      alert("No email addresses found.");
    }
  }


  function guessNames() {
    const textInput = document.getElementById("textInput").value;
    const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
    const emails = textInput.match(emailRegex);
  
    if (emails && emails.length > 0) {
      const uniqueEmails = Array.from(new Set(emails));
      const resultDiv = document.getElementById("result");
      resultDiv.innerHTML = `<h3>Email Addresses(Found: {uniqueEmails.length}):</h3>`;
  
      // Copy only the emails with names (not "Unknown" names)
      const copiedText = uniqueEmails.reduce((acc, email) => {
        const emailParts = email.split("@");
        const username = emailParts[0].toLowerCase();
  
        let longestMatch = "";
        commonNames.forEach(name => {
          if (username.includes(name.toLowerCase()) && name.length > longestMatch.length) {
            longestMatch = name;
          }
        });
  
        const displayName = longestMatch ? `${longestMatch.charAt(0).toUpperCase()}${longestMatch.slice(1)}` : "Unknown";
  
        if (displayName !== "Unknown") {
          resultDiv.innerHTML += `<p>${email}, ${displayName}</p>`;
          return `${acc}${email}, ${displayName}\n`;
        }
        return acc;
      }, "");
  
      // Copy the filtered emails with names to the clipboard
      copyToClipboard(copiedText);
  
      // Show success message
      resultDiv.innerHTML += "<p>Emails copied to clipboard!</p>";
    } else {
      alert("No email addresses found.");
    }
  }


  function supperExtractFromPaste() {
    // Access the clipboard data and extract the text
    navigator.clipboard.readText().then(text => {
      document.getElementById("textInput").value = text;
      extractAndCopyEmails();
    }).catch(err => {
      alert("Failed to read clipboard data.");
    });
    document.getElementById("textInput").value = '';
  }
  