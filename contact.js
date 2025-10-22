// Contact Form Validation and Handling
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const successMessage = document.getElementById("success-message");

  // Form validation rules
  const validationRules = {
    fullName: {
      required: true,
      minLength: 2,
      pattern: /^[a-zA-Z\s]+$/,
      message:
        "Please enter a valid full name (letters and spaces only, minimum 2 characters)",
    },
    email: {
      required: true,
      pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: "Please enter a valid email address",
    },
    subject: {
      required: true,
      minLength: 3,
      message: "Please enter a subject (minimum 3 characters)",
    },
    message: {
      required: true,
      minLength: 10,
      message: "Please enter a message (minimum 10 characters)",
    },
  };

  // Validate individual field
  function validateField(fieldName, value) {
    const rules = validationRules[fieldName];
    const errorElement = document.getElementById(`${fieldName}-error`);

    // Clear previous error
    errorElement.textContent = "";
    errorElement.style.display = "none";

    // Check if field is required and empty
    if (rules.required && (!value || value.trim() === "")) {
      errorElement.textContent = `${getFieldLabel(fieldName)} is required`;
      errorElement.style.display = "block";
      return false;
    }

    // Check minimum length
    if (rules.minLength && value.length < rules.minLength) {
      errorElement.textContent = rules.message;
      errorElement.style.display = "block";
      return false;
    }

    // Check pattern
    if (rules.pattern && !rules.pattern.test(value)) {
      errorElement.textContent = rules.message;
      errorElement.style.display = "block";
      return false;
    }

    return true;
  }

  // Get field label for error messages
  function getFieldLabel(fieldName) {
    const labels = {
      fullName: "Full Name",
      email: "Email",
      subject: "Subject",
      message: "Message",
    };
    return labels[fieldName] || fieldName;
  }

  // Validate entire form
  function validateForm() {
    let isValid = true;
    const formData = new FormData(form);

    for (const fieldName in validationRules) {
      const field = document.getElementById(fieldName);
      const value = field.value.trim();

      if (!validateField(fieldName, value)) {
        isValid = false;
      }
    }

    return isValid;
  }

  // Real-time validation on input
  function setupRealTimeValidation() {
    for (const fieldName in validationRules) {
      const field = document.getElementById(fieldName);

      field.addEventListener("blur", function () {
        validateField(fieldName, this.value.trim());
      });

      field.addEventListener("input", function () {
        // Clear error on input if field becomes valid
        const errorElement = document.getElementById(`${fieldName}-error`);
        if (
          errorElement.textContent &&
          validateField(fieldName, this.value.trim())
        ) {
          errorElement.textContent = "";
          errorElement.style.display = "none";
        }
      });
    }
  }

  // Handle form submission
  function handleFormSubmit(event) {
    event.preventDefault();

    // Hide success message if it was previously shown
    successMessage.style.display = "none";

    // Validate form
    if (validateForm()) {
      // Simulate form submission
      const submitButton = document.querySelector(
        '[data-testid="test-contact-submit"]'
      );
      const originalText = submitButton.textContent;

      // Show loading state
      submitButton.textContent = "Sending...";
      submitButton.disabled = true;

      // Simulate API call
      setTimeout(() => {
        // Show success message
        successMessage.style.display = "block";
        successMessage.scrollIntoView({ behavior: "smooth" });

        // Reset form
        form.reset();

        // Reset button
        submitButton.textContent = originalText;
        submitButton.disabled = false;

        // Focus on first field for accessibility
        document.getElementById("fullName").focus();
      }, 1500);
    } else {
      // Focus on first invalid field
      const firstError = document.querySelector(
        '.error-message[style*="block"]'
      );
      if (firstError) {
        const fieldId = firstError.id.replace("-error", "");
        document.getElementById(fieldId).focus();
      }
    }
  }

  // Setup form event listeners
  if (form) {
    form.addEventListener("submit", handleFormSubmit);
    setupRealTimeValidation();
  }

  // Keyboard navigation for form
  document.addEventListener("keydown", function (event) {
    // Allow Enter key to submit form when focus is on submit button
    if (event.key === "Enter" && event.target.type === "submit") {
      handleFormSubmit(event);
    }
  });

  // Ensure form is accessible via keyboard
  const formElements = form.querySelectorAll("input, textarea, button");
  formElements.forEach((element, index) => {
    element.addEventListener("keydown", function (event) {
      // Tab navigation
      if (event.key === "Tab") {
        // Let default behavior handle tab navigation
        return;
      }

      // Enter key on input fields (except textarea)
      if (event.key === "Enter" && element.tagName !== "TEXTAREA") {
        event.preventDefault();
        const nextElement = formElements[index + 1];
        if (nextElement) {
          nextElement.focus();
        } else {
          // Focus submit button if at end
          document.querySelector('[data-testid="test-contact-submit"]').focus();
        }
      }
    });
  });
});
