const api = process.env.REACT_APP_CONTACTS_API_URL || 'http://localhost:3001'

const headers = {
    'Accept': 'application/json'
};

export const result = (payload) =>
    fetch(`${api}/calculate/result`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    })
    .then(res => {
      console.log("This is: "+res.status);
        return res.status;
    })
        .catch(error => {
            console.log("This is error");
            return error;
        });
