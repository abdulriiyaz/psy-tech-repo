import { Footer, Header, CTA } from './components/index';

export default function Home() {
    return (
        <main className="w-screen h-screen min-h-screen flex flex-col justify-between">
            {/* Header */}
            <Header />
            {/* CTA */}
            <CTA />
            {/* Footer */}
            <Footer />
        </main>
    );
}
