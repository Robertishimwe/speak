// Initialize the speech recognition object
const recognition = new webkitSpeechRecognition();
let transcript;

// Set the recognition settings
recognition.continuous = true;
recognition.interimResults = true;
recognition.lang = 'en-US';

// Initialize the timeout variable
let timeout;

// Get the text element
const text = document.getElementById('text');

// Start the recognition process
recognition.start();

// Listen for speech recognition results
recognition.onresult = event => {
  // Clear the timeout
  clearTimeout(timeout);
  
  // Get the last result
  const result = event.results[event.results.length - 1];
  
  // Get the transcribed text
  transcript = result[0].transcript.trim();
  
  // Append the transcribed text to the text element
  text.innerHTML += `<p>${transcript}</p>`;
  
  // Start the timeout again
  timeout = setTimeout(() => {
    recognition.stop();
  }, 3000);
};

// Listen for speech recognition errors
recognition.onerror = event => {
  console.error(`Speech recognition error occurred: ${event.error}`);
};

// Listen for the end of the recognition process
recognition.onend = () => {
  console.log('Speech recognition stopped.');
};
