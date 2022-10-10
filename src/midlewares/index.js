import axios from 'axios';

export default async () => {

    const storage = ''

    axios.interceptors.request.use(
        async config => {
            const session = await storage.getItem('token');
            if (session !== null) {
                config.headers['Authorization'] = `Gosnix ${session}`;
                config.headers['Content-Type'] = 'application/json';
            } else {
                config.headers['Content-Type'] = 'application/json';
            }

            return config;
        },
        err => Promise.reject(err),
    );
};
