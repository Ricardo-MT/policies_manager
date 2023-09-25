'use client';

const h1Styles = 'mb-3 text-3xl font-semibold';
const h2Styles = 'm-3 text-2xl font-semibold';
const pStyles = 'm-0 max-w-[90ch] text-sm opacity-50';
const mainStyles = `flex min-h-screen flex-col items-center justify-between p-12 before:absolute before:h-[100vh] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]`;

function Home() {
    return (
        <main className={mainStyles}>
            <header>
                <h1 className={h1Styles}>Privacy Policy for [Your App Name]</h1>
            </header>

            <div>
                <h2 className={h2Styles}>1. Introduction</h2>
                <p className={pStyles}>
                    Welcome to [Your App Name] (&ldquo;we,&rdquo;
                    &ldquo;our,&rdquo; &ldquo;us&rdquo;). We are committed to
                    protecting your personal information and your right to
                    privacy. If you have any questions or concerns about our
                    policy or our practices with regards to your personal
                    information, please contact us.
                </p>

                <h2 className={h2Styles}>2. App Information</h2>
                <ul>
                    <li>
                        <strong>Terms of Use</strong>
                    </li>
                    <p className={pStyles}>
                        Please read these Terms of Use carefully before using
                        [Your App Name]. By accessing or using [Your App Name],
                        you agree to be bound by these terms and conditions.
                    </p>
                    <p className={pStyles}>
                        [Your App Name] (&ldquo;we,&rdquo; &ldquo;our,&rdquo;
                        &ldquo;us&rdquo;) provides this Terms of Use Agreement
                        (&ldquo;Agreement&rdquo;) to govern your use of [Your
                        App Name] and its related services. By accessing or
                        using [Your App Name], you agree to comply with and be
                        bound by this Agreement, as well as any other terms,
                        guidelines, or rules that we may post.
                    </p>
                    <p className={pStyles}>
                        By using [Your App Name], you accept and agree to be
                        bound by these Terms of Use. If you do not agree to
                        these terms, please do not use [Your App Name].
                    </p>
                    <p className={pStyles}>
                        We may modify these Terms of Use at any time. You are
                        responsible for regularly reviewing these terms, and
                        your continued use of [Your App Name] constitutes your
                        acceptance of any changes.
                    </p>
                    <p className={pStyles}>
                        We reserve the right to terminate or suspend access to
                        [Your App Name] at our discretion without notice,
                        including for violations of these Terms of Use.
                    </p>
                    <p className={pStyles}>
                        If you have any questions about these Terms of Use,
                        please contact us at [Contact Email].
                    </p>

                    <li>
                        <strong>Data We Collect</strong>
                    </li>
                    <p className={pStyles}>
                        We do not collect any personal data from our users.
                        [Your App Name] is designed to respect your privacy, and
                        we do not track, collect, or share any user information.
                    </p>

                    <li>
                        <strong>Cookies</strong>
                    </li>
                    <p className={pStyles}>
                        We do not use any cookies or similar tracking
                        technologies on [Your App Name].
                    </p>

                    <li>
                        <strong>Information Shared with Third Parties</strong>
                    </li>
                    <p className={pStyles}>
                        We do not share any user information or personal data
                        with third parties. Your privacy is important to us, and
                        we do not engage in data sharing practices.
                    </p>
                </ul>

                <h2 className={h2Styles}>Contact Us</h2>
                <p className={pStyles}>
                    If you have any questions or suggestions about our Privacy
                    Policy or wish to exercise your rights regarding your
                    personal information, please contact us at [Contact Email].
                </p>

                <p className={pStyles}>
                    This Privacy Policy page was created using a privacy policy
                    generator.
                </p>
            </div>
        </main>
    );
}

export default Home;
