import logoputih from '../assets/logoputih.png';

const Footer = () => {
    return (
        <>
        <footer className="relative footer text-lg p-10 bg-info text-white flex justify-around items-center">
            <div className='flex flex-col w-1/3 gap-y-5 mb-2'>
                <img src={logoputih} alt="logo unhas putih" className='pl-10 h-44' />
                <div>    
                    <p className='font-bold mb-2'>Departmen of Physics, Hasanuddin University</p>
                    <p>Jl. Perintis Kemerdekaan No.KM.10, Tamalanrea Indah, Kec. Tamalanrea Indah, Kota Makassar, Sulawesi Selatan 90245</p>
                </div>
            </div> 
            <nav>
                <header className="footer-title">Under Constr</header> 
                <a className="link link-hover">Under Constr</a> 
                <a className="link link-hover">Under Constr</a> 
                <a className="link link-hover">Under Constr</a> 
                <a className="link link-hover">Under Constr</a>
            </nav> 
            <nav>
                <header className="footer-title">Under Constr</header> 
                <a className="link link-hover">Under Constr</a> 
                <a className="link link-hover">Under Constr</a> 
                <a className="link link-hover">Under Constr</a> 
                <a className="link link-hover">Under Constr</a>
            </nav> 
            <nav>
                <header className="footer-title">Under Constr</header> 
                <a className="link link-hover">Under Constr</a> 
                <a className="link link-hover">Under Constr</a> 
                <a className="link link-hover">Under Constr</a> 
                <a className="link link-hover">Under Constr</a>
            </nav>
            <aside className='absolute right-0 bottom-0 text-sm'>
                <p>Copyright © - Department of Physics, Hasanuddin University</p>
            </aside>
        </footer>
        </>
    );
}
 
export default Footer;