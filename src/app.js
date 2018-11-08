const renderContacts = () => {
    const storage = window.localStorage
    const contacts = JSON.parse(storage.getItem('contacts'))
    let div = document.querySelector('.contentt')

    if(contacts){
        div.innerHTML = ''
        contacts.forEach(contact => {
            let p = document.createElement('p')
            if(contact.gender == 'male'){
                p.innerHTML = `
                <div>
                <div class="w-64 rounded overflow-hidden shadow-lg">
                    <img class="w-max h-64" src="./images/man-grey.png" alt="Profile picture">
                    <div class="px-6 py-4 ">
                        <h2> ${contact.name} </h2>
                        <h3><u>Works at:</u>  ${contact.company} </h3>
                        <p><u>Mobil:</u>  ${contact.phone} </p> 
                        <p><u>Email:</u> ${contact.email}</p>
                        <p><u>Twitter:</u> <a href ="https://www.twitter.com/${contact.twitter}">@${contact.twitter}</a></p>                
                        <p><u>About him:</u> ${contact.notes} </p>
                    </div>
                </div>
            </div>
            `
        } else if ( contact.gender == "female" ) {
            p.innerHTML = `
            <div>
                <div class="w-64 rounded overflow-hidden shadow-lg">
                    <img class="w-max h-64" src="./images/woman-grey.png" alt="Profile picture">
                    <div class="px-6 py-4 ">
                        <h2> ${contact.name} </h2>
                        <h3><u>Works at:</u>  ${contact.company} </h3>
                        <p><u>Mobil:</u>  ${contact.phone} </p> 
                        <p><u>Email:</u> ${contact.email}</p>
                        <p><u>Twitter:</u> <a href ="https://www.twitter.com/${contact.twitter}">@${contact.twitter}</a></p>                
                        <p><u>About hem:</u> ${contact.notes} </p>
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
})

