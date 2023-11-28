const steps = Array.from(document.querySelectorAll('.step'));
const success = document.querySelector('.success-message');
let current = 0;

function showStep(stepNumber) {
    steps.forEach((step, index) => {
        if (index === stepNumber) {
            step.style.display = 'block';
        } else {
            step.style.display = 'none';
        }
    });
}

function nextStep() {
    if (current < steps.length - 1) {
        if (validateStep(current)) {
            current++;
            showStep(current);
        }
    } else {
        success.style.display = 'block';
    }
}

function prevStep() {
    if (current > 0) {
        current--;
        showStep(current);
    }
}

function validateStep(stepNumber) {
    const step = steps[stepNumber];
    const inputs = Array.from(step.querySelectorAll('input'));
    for (const input of inputs) {
        if (!input.checkValidity()) {
            input.reportValidity();
            return false;
        }
    }
    return true;
}

showStep(current);
