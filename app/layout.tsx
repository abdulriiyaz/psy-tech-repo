import './globals.css';
import { Changa } from 'next/font/google';

const changa = Changa({ subsets: ['latin'] });

export const metadata = {
    title: 'Psy & Techno Party | Book Your Tickets Now! | [Event Name]',
    description:
        'Experience an unforgettable night of techno music, energetic beats, and mind-blowing performances at our versatile techno and psy club event. Book your tickets now and join us for an electrifying party with renowned DJs and talented artists.',
    canonical: 'https://psytech.com',
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://psytech.com',
        title: 'Psy Tech',
        description:
            'Experience an unforgettable night of techno music, energetic beats, and mind-blowing performances at our versatile techno and psy club event. Book your tickets now and join us for an electrifying party with renowned DJs and talented artists.',
        images: [
            {
                url: 'https://psytech.com/favicon.png',
                alt: 'Psy Tech',
            },
        ],
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={changa.className}>{children}</body>
        </html>
    );
}
