import {useEffect, useState} from "react";

const useMouseLocation = () => {
    const [mouseLocation, setMouseLocation] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        setMouseLocation({ x: e.clientX, y: e.clientY });
    };

    useEffect(() => {
        window.addEventListener("mousemove", handleMouseMove);
        return () => {
        window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return mouseLocation;
}

export default useMouseLocation;