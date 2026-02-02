const SECRET_CODE = "1234";

function checkCode() {
    const input = document.getElementById('passcode').value;
    if (input === SECRET_CODE) {
        document.getElementById('page1').classList.add('hidden');
        document.getElementById('page1-question').classList.remove('hidden');
    } else {
        document.getElementById('error').style.display = 'block';
    }
}

function nextPage(pageNumber) {
    // Hide all pages
    document.querySelectorAll('.container').forEach(page => page.classList.add('hidden'));
    
    // Show specific page
    document.getElementById(`page${pageNumber}`).classList.remove('hidden');
}

function moveButton() {
    const btn = document.getElementById('no-btn');
    // Calculate random zig-zag coordinates
    const x = Math.random() * (window.innerWidth - btn.offsetWidth);
    const y = Math.random() * (window.innerHeight - btn.offsetHeight);
    
    btn.style.position = 'fixed';
    btn.style.left = `${x}px`;
    btn.style.top = `${y}px`;
}
