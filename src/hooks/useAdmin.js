import axios from 'axios';
import { useEffect, useState } from 'react';

const useAdmin = (user) => {
    const [admin, setAdmin] = useState(false);
    const [adminLoading, setAdminLoading] = useState(true);

    useEffect(() => {
        const email = user?.email;
        const url = `http://localhost:5000/api/v1/user/${email}`;
        axios.get(url).then(res => {
            setAdmin(res?.data?.admin)
            setAdminLoading(false);
        })
    }, [user])

    return [admin, adminLoading];
};

export default useAdmin;