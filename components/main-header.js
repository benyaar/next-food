import Link from "next/link";
import logoImg from '@/assets/logo.png'

export default function MainHeader() {
    return (
        <header>
            <Link href={'/'}>
                <img src={logoImg.src} alt={'logo'}/>
                NextLevel Food
            </Link>
            <nav>
                <ul>
                    <li><Link href={'/meals'}>Meals</Link></li>
                    <li><Link href={'/meals/share'}>Meals share</Link></li>
                    <li><Link href={'/meals/9'}>Meals 9</Link></li>
                    <li><Link href={'/community'}>community</Link></li>

                </ul>
            </nav>
        </header>
    );
}
