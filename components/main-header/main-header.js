import Link from "next/link";
import logoImg from '@/assets/logo.png'
import classes from './main-header.module.css'
import Image from "next/image";
import MainHeaderBackground from "@/components/main-header/main-header-background";

export default function MainHeader() {
    return (
        <>
            <MainHeaderBackground />
            <header className={classes.header}>
                <Link className={classes.logo} href={'/public'}>
                    <Image src={logoImg} alt={'logo'}/>
                    NextLevel Food
                </Link>
                <nav className={classes.nav}>
                    <ul>
                        <li><Link href={'/meals'}>Meals</Link></li>
                        <li><Link href={'/meals/share'}>Meals share</Link></li>
                        <li><Link href={'/meals/9'}>Meals 9</Link></li>
                        <li><Link href={'/community'}>community</Link></li>

                    </ul>
                </nav>
            </header>
        </>
    );
}
