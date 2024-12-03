let currentStep = 1;
const steps = [
    'Select Operation (Import or Export)',
    'Select Data Table Row',
    'Confirm Selection',
    'Select Card Rows/Columns',
    'Preview and Download'
];

function loadStep(step) {
    const container = document.getElementById('step-container');
    container.innerHTML = `<p>${steps[step - 1]}</p>`;
    updateNavigation();
}

function updateNavigation() {
    document.getElementById('prev-button').disabled = currentStep === 1;
    document.getElementById('next-button').textContent = 
        currentStep === steps.length ? 'Finish' : 'Next';
}

document.getElementById('prev-button').addEventListener('click', () => {
    if (currentStep > 1) currentStep--;
    loadStep(currentStep);
});

document.getElementById('next-button').addEventListener('click', () => {
    if (currentStep < steps.length) currentStep++;
    loadStep(currentStep);
});

// Initial load
loadStep(currentStep);
