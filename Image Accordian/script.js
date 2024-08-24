// Get all radio buttons and labels
const radios = document.querySelectorAll('input[type="radio"]');
const labels = document.querySelectorAll('label');

// console.log('Radios:', radios);
// console.log('Labels:', labels);

// Add event listener to each radio button
radios.forEach((radio) => {
  radio.addEventListener('click', () => {
    // Get the corresponding label
    const label = document.querySelector(`label[for="${radio.id}"]`);

    // Toggle the display of the image
    label.classList.toggle('active');
  });
});