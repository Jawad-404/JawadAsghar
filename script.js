
  document.getElementById("Submit").addEventListener("click", function (e) {
    e.preventDefault();

    const email = document.querySelector('input[placeholder="Your Email"]').value.trim();
    const name = document.querySelector('input[placeholder="Your Name"]').value.trim();
    const message = document.querySelector('textarea').value.trim();

    if (!email || !name || !message) {
      alert("Please fill in all fields before sending.");
      return;
    }

    // // Simulate sending message (replace this with backend logic if needed)
    // console.log("Message sent:", {
    //   name,
    //   email,
    //   message
    // });

    alert("Thanks, " + name + "! Your message has been sent 🚀");

    // Optionally reset the form
    document.querySelector('input[placeholder="Your Email"]').value = "";
    document.querySelector('input[placeholder="Your Name"]').value = "";
    document.querySelector('textarea').value = "";
  });

  