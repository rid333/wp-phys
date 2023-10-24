import Logo from '../assets/logo.png';
import Search from '../assets/search.png';

const Header = () => {
    return (
        <>
            <header className='flex justify-start items-center h-full max-w-7xl m-auto mt-4 mb-2'>
                <img src={ Logo } className='h-36 mr-9' alt="Logo Unhas" />
                <div className="text-2xl mr-auto">
                    <p>Department of Physics</p>
                    <p className='font-bold'>Hasanuddin University</p>
                </div>
                <img src={ Search } className='h-6 mr-3'/>
            </header>
        </>
    );
}
 
export default Header;