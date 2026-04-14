import React from 'react';
import footerImg from './../../assets/logo-xl.png';
import instaLogo from './../../assets/instagram.png';
import fbLogo from './../../assets/facebook.png';
import xLogo from './../../assets/twitter.png';

const Footer = () => {
    return (
        <footer className='bg-[#244D3F]'>
            <div className={'max-w-277.5 mx-auto px-8 sm:px-16'}>
                <div className={'flex flex-col items-center pt-20 pb-8 text-center'}>
                    <img className={'pb-4'} src={footerImg} alt=""/>
                    <p className={'text-white pb-6 opacity-80'}>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
                    <h4 className={'text-xl font-medium text-white'}>Social Links</h4>
                    <div className={'flex justify-center gap-2 pb-10'}>
                        <div className={'rounded-full'}><img className={'p-2.5'} src={instaLogo} alt=""/></div>
                        <button className={'rounded-full'}><img src={fbLogo} alt=""/></button>
                        <button className={'rounded-full'}><img src={xLogo} alt=""/></button>
                    </div>
                    <div className="divider before:bg-[#1A8862] after:bg-[#1A8862] opacity-20"></div>
                    <div className={'flex flex-col w-full items-center text-[#FAFAFA] opacity-50 gap-3 lg:gap-0 lg:flex-row lg:justify-between'}>
                        <p>© 2026 KeenKeeper. All rights reserved.</p>
                        <div className={'block md:flex gap-6'}>
                            <p>Privacy Policy</p>
                            <p>Terms of Service</p>
                            <p>Cookies</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;