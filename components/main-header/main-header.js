import Link from "next/link";
import logoImg from '@/assets/logo.png'
import classes from './main-header.module.css'
import Image from "next/image";
import MainHeaderBackground from "@/components/main-header/main-header-background";
import NavLink from "@/components/main-header/nav-link/nav-link";

export default function MainHeader() {
    return (
        <>
            <MainHeaderBackground />
            <header className={classes.header}>
                <Link className={classes.logo} href={'/'}>
                    <Image src={logoImg} alt={'logo'}/>
                    NextLevel Food
                </Link>
                <nav className={classes.nav}>
                    <ul>
                        <li><NavLink href={'/meals'}>Meals</NavLink></li>
                        <li><NavLink href={'/community'}>Community</NavLink></li>
                    </ul>
                </nav>
            </header>
        </>
    );
}
