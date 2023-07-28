import { useState,useEffect } from 'react';

export const useWindowSize = () => {

    const [windowWidth,setWindowWidth] = useState<number>(window.innerWidth);

    useEffect(()=>{
        const windowWidth = () => { setWindowWidth(window.innerWidth)};
        window.addEventListener('resize',windowWidth);
        return () => { window.removeEventListener('resize',windowWidth) }
    },[])

    return windowWidth;
}