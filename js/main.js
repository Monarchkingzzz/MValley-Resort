/**
 * The Mugumo Valley Resort - Main JavaScript
 * Location: Thika, Kenya
 * 
 * Handles enquiry form submissions, glowing navbar interactions, and reactant clicking animations.
 */

document.addEventListener('DOMContentLoaded', () => {
  // Destination email address for guest enquiries
  const RESORT_EMAIL = 'info@mugumovalleyresort.com';

  const enquiryForm = document.getElementById('enquiryForm') || document.getElementById('f');
  const nameInput = document.getElementById('name') || document.getElementById('n');
  const phoneInput = document.getElementById('phone') || document.getElementById('p');
  const messageInput = document.getElementById('message') || document.getElementById('m');
  const formStatus = document.getElementById('formStatus');

  if (enquiryForm) {
    enquiryForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const guestName = nameInput ? nameInput.value.trim() : '';
      const guestPhone = phoneInput ? phoneInput.value.trim() : '';
      const guestMessage = messageInput ? messageInput.value.trim() : '';

      // Construct mail body
      const emailBody = `Name: ${guestName}\nPhone: ${guestPhone}\n\nEnquiry Details:\n${guestMessage}`;

      // Show user feedback that their email client is launching
      if (formStatus) {
        formStatus.textContent = '✓ Opening your email client to send your enquiry...';
        formStatus.style.display = 'block';
      }

      // Generate mailto link and redirect
      const mailtoUrl = `mailto:${RESORT_EMAIL}?subject=${encodeURIComponent(
        'Enquiry from Mugumo Valley Resort Website'
      )}&body=${encodeURIComponent(emailBody)}`;

      window.location.href = mailtoUrl;
    });
  }

  // Glowing reactant click ripple animation for all navbar components
  const navComponents = document.querySelectorAll('header .logo, header nav a');
  navComponents.forEach((component) => {
    component.addEventListener('click', function (e) {
      const rect = this.getBoundingClientRect();
      const ripple = document.createElement('span');
      ripple.classList.add('nav-ripple');

      const diameter = Math.max(rect.width, rect.height) * 2;
      ripple.style.width = `${diameter}px`;
      ripple.style.height = `${diameter}px`;
      ripple.style.left = `${e.clientX - rect.left - diameter / 2}px`;
      ripple.style.top = `${e.clientY - rect.top - diameter / 2}px`;

      // Remove existing ripple if rapidly re-clicked
      const existing = this.querySelector('.nav-ripple');
      if (existing) {
        existing.remove();
      }

      this.appendChild(ripple);

      setTimeout(() => {
        ripple.remove();
      }, 600);
    });
  });
});
