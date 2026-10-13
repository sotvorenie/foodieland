import Image from "next/image";
import Link from "next/link";

function Logo() {
    return (
        <Link href="/">
            <Image src="/images/logo.svg"
                   alt="Foodieland"
                   width={110}
                   height={30}
            />
        </Link>
    )
}

export default Logo;