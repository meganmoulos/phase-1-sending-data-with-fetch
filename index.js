// Add your code here

function submitData(userName, userEmail){
    let options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(
            {
                name : userName, 
                email: userEmail
            }
        )
    };
    
    return fetch('http://localhost:3000/users', options)
        .then(res => res.json())
        .then(obj => {
           let idNum = obj.id
           let elem = document.createElement('p')
           elem.textContent = idNum
           document.body.appendChild(elem)
        })
        .catch(error => {
            let elem = document.createElement('p')
            elem.textContent = error.message
            document.body.appendChild(elem)
        })
}

submitData('Giuliano', 'Gmail')