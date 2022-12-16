import classes from "./NavBar.module.scss"
import InfoIcon from "@mui/icons-material/Info";
import StarIcon from '@mui/icons-material/Star';
import DownloadIcon from '@mui/icons-material/Download';
import TranslateIcon from '@mui/icons-material/Translate';
import SupportIcon from '@mui/icons-material/Support';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link, useLocation } from "react-router-dom";
import { useEffect, useRef, useState, MouseEvent, MouseEventHandler } from "react";

export const NavBar = () => {
    const location = useLocation();

    const navigatorRef = useRef<HTMLDivElement>(null);
    const pagesRef = useRef<HTMLDivElement>(null);

    const [active, setActive] = useState<string>("")
    const [left, setLeft] = useState(0);
    const [width, setWidth] = useState(0);
    

    useEffect(() => {
        if(active.length > 0) {
            moveNavigator();
        } else {
            resetNavigator();
        }
    }, [active]);

    useEffect(() => {
        const path = location.pathname.substring(1);
        if(path.length === 0) setActive("");
    }, [location.pathname]);

    const onPageClick: MouseEventHandler<HTMLAnchorElement> = (e) => {
        if(!e.currentTarget) return;
        const attribute = e.currentTarget.getAttribute("data-path") ?? "";
        setActive(attribute);
    }

    useEffect(() => {
        const pages = pagesRef.current;
        if(!pages?.hasChildNodes()) return;

        const firstItem = Array.from(pages.children).filter(item => item.classList.contains(classes.item)).at(0);
        if(firstItem != null) {
            const pagesBounds = pages.getBoundingClientRect();
            const itemBounds = firstItem.getBoundingClientRect();
            setLeft(pagesBounds.width / 2);
        } else resetNavigator();
    }, []);

    const moveNavigator = () => {
        const pages = pagesRef.current;
        if(!pages?.hasChildNodes()) return;

        const currentItem = Array.from(pages.children).filter(item => item.classList.contains(classes.item)).find(item => item.getAttribute("data-path") === active);
        if(!currentItem) return;
        const pagesBounds = pages.getBoundingClientRect();
        const itemBounds = currentItem.getBoundingClientRect();
        setLeft(itemBounds.left - pagesBounds.left);
        setWidth(itemBounds.width);
    }

    const resetNavigator = () => {
        setLeft(prev => prev + width / 2);
        setWidth(0);
    }
    

    return (
        <div className={classes.navbar}>
            <Link to="/" className={classes.title}>
                <div className={classes.logo}>

                </div>
                <h2>LiveBloom</h2>
            </Link>
            <div className={classes.pages} ref={pagesRef}>
                <div className={classes.navigator} ref={navigatorRef} style={{
                    left,
                    width
                }} />
                <Link to="features" className={classes.item} data-path="features" onClick={onPageClick}>
                    <StarIcon className={classes.icon} />
                    Features
                </Link>
                <Link to="download" className={classes.item} data-path="download" onClick={onPageClick}>
                    <DownloadIcon className={classes.icon} />
                    Download
                </Link>
                <Link to="support" className={classes.item} data-path="support" onClick={onPageClick}>
                    <SupportIcon className={classes.icon} />
                    Support
                </Link>
            </div>
            <div className={classes.buttons}>
                <div className={classes.item}>
                    <TranslateIcon className={classes.icon} />
                </div>
                <div className={classes.item}>
                    <GitHubIcon className={classes.icon} />
                </div>
            </div>
        </div>
    )
}