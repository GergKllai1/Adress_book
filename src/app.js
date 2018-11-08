const renderContacts = () => {
    const storage = window.localStorage
    const contacts = JSON.parse(storage.getItem('contacts'))
    let div = document.querySelector('.contentt')

    if(contacts){
        div.innerHTML = ''
        const ul = document.createElement('p')
        contacts.forEach(contact => {
            let li = document.createElement('p')
            if(contact.gender == 'male'){
                li.innerHTML = `
                <div>
                    <div class="w-64 rounded overflow-hidden shadow-lg">
                        <img class="w-full" src="./images/male.jpg" alt="Profile picture">
                        <div class="px-6 py-4 ">
                            <h1> ${contact.name} </h1>
                            <h3> ${contact.gender} </h3>
                            <h2> ${contact.company} </h2>
                            <p> ${contact.notes} </p>
                            ${contact.email} |
                            <a href ="https://www.twitter.com/${contact.twitter}">@${contact.twitter}</a>                
                        </div>
                    </div>
                </div>
                `
            } else if ( contact.gender == "female" ) {
                    li.innerHTML = `
                    <div>
                        <div class="w-64 rounded overflow-hidden shadow-lg">
                            <img class="w-full" src="./images/female.jpg" alt="Profile picture">
                            <div class="px-6 py-4 ">
                                <h1> ${contact.name} </h1>
                                <h3> ${contact.gender} </h3>
                                <h2> ${contact.company} </h2>
                                <p> ${contact.notes} </p>
                                ${contact.email} |
                                <a href ="https://www.twitter.com/${contact.twitter}">@${contact.twitter}</a>                
                            </div>
                        </div>
                    </div>
                `
            }
            div.appendChild(li)
        })
        //div.appendChild(ul)
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

