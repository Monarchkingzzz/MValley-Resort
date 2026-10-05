/**
 * The Mugumo Valley Resort - Main JavaScript
 * Location: Thika, Kenya
 * 
 * Handles enquiry form submissions and user interactions.
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
});
