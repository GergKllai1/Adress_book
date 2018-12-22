const renderContacts = () => {
    console.log('I am being rendered')
    const storage = window.localStorage
    const contacts = JSON.parse(storage.getItem('contacts'))
    let div = document.querySelector('.contentt')

    if(contacts){
        div.innerHTML = ''
        contacts.forEach(contact => {
            let p = document.createElement('p')
            if(contact.gender == 'Male'){
                p.innerHTML = `
                <div class="rounded-lg">
                <div class="w-64  rounded overflow-hidden shadow-lg flex flex-col justify-around">
                    <img class="w-32 h-32 self-center" src="./images/man-grey.png" alt="Profile picture">
                    <div class="px-6 py-4 ">
                        <h2> ${contact.name} </h2>
                        <h4><u>Works at:</u>  </h4>
                        <h4 class="h-12 overflow-auto">${contact.company} </h4>
                        <br>
                        <p><u>Mobil:</u>  ${contact.phone} </p> 
                        <p><u>Email:</u> ${contact.email}</p>
                        <p><u>Twitter:</u> <a href ="https://www.twitter.com/${contact.twitter}">@${contact.twitter}</a></p>
                        <br>
                        <p><u>About him:</u></p>                 
                        <p class="h-16 overflow-auto">${contact.notes} </p>
                    </div>
                </div>
            </div>
            `
        } else if ( contact.gender == "Female" ) {
            p.innerHTML = `
            <div>
            <div class="w-64  rounded overflow-hidden shadow-lg flex flex-col justify-around">
                <img class="w-32 h-31 self-center" src="./images/woman-grey.png" alt="Profile picture">
                <div class="px-6 py-4 ">
                    <h2> ${contact.name} </h2>
                    <h4><u>Works at:</u>  </h4>
                    <h4 class="h-12 overflow-auto">${contact.company} </h4>
                    <br>
                    <p><u>Mobil:</u>  ${contact.phone} </p> 
                    <p><u>Email:</u> ${contact.email}</p>
                    <p><u>Twitter:</u> <a href ="https://www.twitter.com/${contact.twitter}">@${contact.twitter}</a></p>
                    <br>
                    <p><u>About her:</u></p>                 
                    <p class="h-16 overflow-auto">${contact.notes} </p>
                </div>
            </div>
        </div>
            `
            }
            div.appendChild(p)
        })
    } else{
        div.innerHTML = '<p> You have no contacts in your address book </p>'
    }
}

document.addEventListener('DOMContentLoaded', () => {
    renderContacts()
    const addContactForm = document.querySelector('.new-contact-form')
    addContactForm.addEventListener('submit', event => {
        event.preventDefault()
        const storage = window.localStorage;

        const {
            name,
            gender,
            email,
            phone,
            company,
            notes,
            twitter,
        } = addContactForm.elements

        const contact = {
            id: Date.now(),
            name: name.value,
            gender: gender.value,
            email: email.value,
            phone: phone.value,
            company: company.value,
            notes: notes.value,
            twitter: twitter.value,
        }

        console.log(`Saving the following contact: ${JSON.stringify(contact)}`);
        let formcontacts = JSON.parse(storage.getItem('contacts')) || []
        formcontacts.push(contact)
        storage.setItem('contacts', JSON.stringify(formcontacts))
        renderContacts()
        addContactForm.reset()
    })
document.addEventListener('DOMContentLoaded', function() {
    let elems = document.querySelectorAll('.parallax');
    let instances = M.Parallax.init(elems, options);
    });
    
})

