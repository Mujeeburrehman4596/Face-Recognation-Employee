// Get elements from the DOM
const webcamElement = document.getElementById('webcam');
const captureButton = document.getElementById('captureButton');
const attendanceStatus = document.getElementById('attendanceStatus');

// Function to start webcam stream
async function startWebcam() {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        webcamElement.srcObject = stream;
    } catch (error) {
        alert('Unable to access webcam: ' + error);
    }
}

// Simulate face recognition for employees
function recognizeFace() {
    // List of employee names for recognition
    const employees = [
        'Ali Khan', 
        'Sara Malik', 
        'Usman Ahmed', 
        'Zainab Ali', 
        'Bilal Ahmad', 
        'Nida Iqbal', 
        'Omer Farooq', 
        'Mina Shaikh', 
        'Faisal Rahman', 
        'Noor Abbas'
    ];

    // Randomly select an employee from the list
    const randomEmployee = employees[Math.floor(Math.random() * employees.length)];

    return randomEmployee;
}

// Event listener for the capture button
captureButton.addEventListener('click', () => {
    // Simulate face recognition and attendance
    const recognizedEmployee = recognizeFace();
    attendanceStatus.style.display = 'block';
    attendanceStatus.textContent = `Attendance marked for: ${recognizedEmployee}`;
});

// Start webcam stream on page load
startWebcam();
