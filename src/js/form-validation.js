document.querySelector('.form').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const form = this;

    if (this.checkValidity() === false) {
        event.stopPropagation();
        $(this).addClass('was-validated');
    } else {
        setTimeout(function() {
            $('.form').hide();

            $('.success-message').show();

            $('.submitted-data').append(`
                <li><strong>Ime:</strong> ${$('#firstName').val()}</li>
                <li><strong>Prezime:</strong> ${$('#lastName').val()}</li>
                <li><strong>Pol:</strong> ${$('#gender').val()}</li>
                <li><strong>Godina rođenja:</strong> ${$('#birthYear').val()}</li>
                <li><strong>Adresa:</strong> ${$('#address').val()}</li>
                <li><strong>Grad:</strong> ${$('#city').val()}</li>
            `);
        }, 500); 
    }
    
});

