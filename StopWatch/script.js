// Write JavaScript code here
 // Step 1: Get the button element
        const startStopButton = document.getElementById('startStop');
        const resetButton = document.getElementById('reset');
        const stopwatchDisplay = document.getElementById('stopwatch');

        // Step 2: Create a variable to track the state (true = started, false = stopped)
        let isStarted = false;
        let intervalId = null;
        let secondsElapsed = 0;

          // Helper function to format time as "hh:mm:ss"
        function formatTime(seconds) {
            const hours = Math.floor(seconds / 3600);
            const minutes = Math.floor((seconds % 3600) / 60);
            const secondsLeft = seconds % 60;
            return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(secondsLeft).padStart(2, '0')}`;
        }

        // Function to update the stopwatch display every second
        function updateStopwatch() {
            secondsElapsed += 1;
            stopwatchDisplay.textContent = formatTime(secondsElapsed);
        }

        // Step 3: Add the click event listener
        startStopButton.addEventListener('click', function () {
            // Step 4: Toggle the state
            isStarted = !isStarted;

            // Step 5: Change the button text based on the state
            if (isStarted) {
                startStopButton.textContent = 'Stop';
                intervalId = setInterval(updateStopwatch, 1000);
            } else {
                startStopButton.textContent = 'Start';
                clearInterval(intervalId);
            }
        });

        resetButton.addEventListener('click', function () {
            // Clear the interval if it's running
            if (intervalId) {
                clearInterval(intervalId);
            }

            // Reset the time
            secondsElapsed = 0;
            stopwatchDisplay.textContent = '00:00:00';

            // Reset the Start/Stop button
            isStarted = false;
            startStopButton.textContent = 'Start';
        });
