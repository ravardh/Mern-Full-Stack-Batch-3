// Remove validation and form usage, use divs and onclick method for saving contact

document.addEventListener('DOMContentLoaded', function () {
    const saveBtn = document.getElementById('saveBtn');
    const successMsg = document.getElementById('successMsg');

    saveBtn.onclick = function () {
        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const email = document.getElementById('email').value;

        const contact = { name, phone, email };
        
        let contacts = JSON.parse(localStorage.getItem('contacts') || '[]');
        
        contacts.push(contact);
        localStorage.setItem('contacts', JSON.stringify(contacts));
        
        successMsg.classList.remove('d-none');
        
        document.getElementById('name').value = '';
        document.getElementById('phone').value = '';
        document.getElementById('email').value = '';
        
        setTimeout(() => successMsg.classList.add('d-none'), 2000);
    };
});