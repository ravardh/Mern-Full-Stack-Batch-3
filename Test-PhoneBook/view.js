// Display all contacts from localStorage in a table with delete options

function displayContacts() {
    var contacts = JSON.parse(localStorage.getItem('contacts') || '[]');
    var html = '';
    if (contacts.length === 0) {
        html = '<div class="alert alert-info">No contacts found.</div>';
    } else {
        html = '<table class="table table-bordered table-striped">';
        html += '<thead><tr><th>Name</th><th>Phone</th><th>Email</th><th>Action</th></tr></thead><tbody>';
        
        for (var i = 0; i < contacts.length; i++) {
            html += '<tr>';
            html += '<td>' + contacts[i].name + '</td>';
            html += '<td>' + contacts[i].phone + '</td>';
            html += '<td>' + contacts[i].email + '</td>';
            html += '<td><button class="btn btn-sm btn-danger" onclick="deleteContact(' + i + ')">Delete</button></td>';
            html += '</tr>';
        }
        html += '</tbody></table>';
    }
    document.getElementById('contactsContainer').innerHTML = html;
}

function clearAllContacts() {
    localStorage.removeItem('contacts');
    displayContacts();
}

function deleteContact(index) {
    var contacts = JSON.parse(localStorage.getItem('contacts') || '[]');
    contacts.splice(index, 1);
    localStorage.setItem('contacts', JSON.stringify(contacts));
    displayContacts();
}

displayContacts(); // Call by default when page loads