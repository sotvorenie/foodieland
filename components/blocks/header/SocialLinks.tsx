import Link from "next/link";

import {socials} from "@/data/socials";

interface Props {
    className?: string
}

function SocialLinks({className}: Props) {
    return (
        <ul className={`flex gap-10 ${className}`}>
            {socials.map(social => (
                <li key={social.label} className="recolor-svg">
                    <Link href={social.href}
                          aria-label={social.label}
                    >
                        <img src={social.icon} alt={social.label}/>
                    </Link>
                </li>
            ))}
        </ul>
    )
}

export default SocialLinks;