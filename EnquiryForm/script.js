const form = document.getElementById('registrationForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const formMessage = document.getElementById('formMessage');
    const dataTableBody = document.querySelector('#dataTable tbody');

    const submittedEmails = [];

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      // Reset messages
      nameError.textContent = '';
      emailError.textContent = '';
      formMessage.textContent = '';

      let isValid = true;
      const name = nameInput.value.trim();
      const email = emailInput.value.trim().toLowerCase();

      // Name validation
      if (name === '') {
        nameError.textContent = 'Name is required.';
        isValid = false;
      }

      // Email validation
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (email === '') {
        emailError.textContent = 'Email is required.';
        isValid = false;
      } else if (!emailPattern.test(email)) {
        emailError.textContent = 'Please enter a valid email.';
        isValid = false;
      } else if (submittedEmails.includes(email)) {
        emailError.textContent = 'This email has already been used.';
        isValid = false;
      }

      if (isValid) {
        submittedEmails.push(email);
        addToTable(name, email);
        formMessage.textContent = 'Form submitted successfully!';
        form.reset();
      }
    });

    function addToTable(name, email) {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${dataTableBody.rows.length + 1}</td>
        <td>${name}</td>
        <td>${email}</td>
      `;
      dataTableBody.appendChild(row);
    }