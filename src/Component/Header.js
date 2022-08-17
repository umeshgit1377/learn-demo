import React from 'react';
import HeaderMenu from './HeaderMenu';
function Header() {
    return (
        <div className='headerSec'>
            <div className='container'>
                <div className='row'>
                    <div className='cmheadin'>
                        <div className='headerLogo'>
                            Logo
                        </div>
                        <div className='headerMenu'>
                            <HeaderMenu />
                        </div>
                    </div>  
                </div>
            </div>
        </div>
    );
}

export default Header;