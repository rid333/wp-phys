import axios from 'axios';
import { useEffect, useState } from 'react';

const Navbar = () => {
    const [navbars, setNavbars] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(
                    "http://localhost:8000/wp-json/wp-api-menus/v2/menus/849"
                );
                setNavbars(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchData();
    }, []);

    return (
        <>
            <nav className='navbar-center'>
                <ul className='flex menu menu-horizontal px-1 justify-center gap-x-16 max-w-screen-x text-base font-bold'>
                    {navbars.items?.map((item) => (
                        <li key={item.ID}>
                            {item.children ? (
                                <details>
                                    <summary className='rounded-none'>{item.title}</summary>
                                    <ul className="p-2 rounded-none bg-white z-10">
                                        {item.children.map((child) => (
                                            <li key={child.ID}><a href={child.url} className='rounded-none hover:bg-primary hover:text-white'>{child.title}</a></li>
                                        ))}
                                    </ul>
                                </details>
                            ) : (
                                <a href={item.url} className='rounded-none'>{item.title}</a>   
                            )}
                        </li>
                    ))}
                </ul>
            </nav> 
        </>
    );
}

export default Navbar;