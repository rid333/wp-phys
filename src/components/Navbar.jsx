import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

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
                    {navbars.items?.[0] && (
                        <li key={navbars.items[0].ID}>
                        <Link to='/' className='rounded-none'>
                            {navbars.items[0].title}
                        </Link>
                        </li>
                    )}
                    {navbars.items?.slice(1).map((item) => (
                        <li key={item.ID}>
                            {item.children ? (
                                <details>
                                    <summary className='rounded-none'>{item.title}</summary>
                                    <ul className="p-2 rounded-none bg-white z-10">
                                        {item.children.map((child) => (
                                            <li key={child.ID}><Link to={`/${item.object_slug}/${child.object_slug}`} className='rounded-none hover:bg-primary hover:text-white'>{child.title}</Link></li>
                                        ))}
                                    </ul>
                                </details>
                            ) : (
                                <Link to={`/${item.object_slug}`} className='rounded-none'>{item.title}</Link>   
                            )}
                        </li>
                    ))}
                </ul>
            </nav>
            <hr className="border-2 mt-1 border-[#027333]"/>
            <hr className="border-4 border-[#D90404]"/>
        </>
    );
}

export default Navbar;