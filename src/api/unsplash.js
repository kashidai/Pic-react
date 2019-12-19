import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization:
            'Client-ID 1e597489d067f19eb1b5ce980f4503ac1dde24d9366e00f3df9f5b97a6704a61'
    }
});


// dsdsd
