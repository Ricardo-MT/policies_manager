"use client";

const h1Styles = "mb-3 text-3xl font-semibold";
const h2Styles = "m-3 text-2xl font-semibold";
const pStyles = "m-0 max-w-[90ch] text-sm opacity-50";
const mainStyles = `[&_a]:underline flex min-h-screen flex-col items-center justify-between p-12 before:absolute before:h-[100vh] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]`;
const olStyles = "list-decimal list-inside";

const email = "info@ricardomejiastravieso.com";

export const EnglishText = ({ name }: { name: string }) => {
  return (
    <main className={mainStyles}>
      <header>
        <h1 className={h1Styles}>Privacy Policy for {name}</h1>
      </header>
      <br />

      <div>
        <h2 className={h2Styles}>1. Introduction</h2>
        <p className={pStyles}>
          Welcome to {name} (&ldquo;we,&rdquo; &ldquo;our,&rdquo;
          &ldquo;us&rdquo;). We are committed to protecting your personal
          information and your right to privacy. If you have any questions or
          concerns about our policy or our practices with regards to your
          personal information, please contact us.
        </p>
        <br />

        <h2 className={h2Styles}>2. App Information</h2>
        <ul>
          <li>
            <strong>Terms of Use</strong>
          </li>
          <p className={pStyles}>
            Please read these Terms of Use carefully before using {name}. By
            accessing or using {name}, you agree to be bound by these terms and
            conditions.
          </p>
          <p className={pStyles}>
            {name} (&ldquo;we,&rdquo; &ldquo;our,&rdquo; &ldquo;us&rdquo;)
            provides this Terms of Use Agreement (&ldquo;Agreement&rdquo;) to
            govern your use of {name} and its related services. By accessing or
            using {name}, you agree to comply with and be bound by this
            Agreement, as well as any other terms, guidelines, or rules that we
            may post.
          </p>
          <p className={pStyles}>
            By using {name}, you accept and agree to be bound by these Terms of
            Use. If you do not agree to these terms, please do not use {name}.
          </p>
          <p className={pStyles}>
            We may modify these Terms of Use at any time. You are responsible
            for regularly reviewing these terms, and your continued use of{" "}
            {name} constitutes your acceptance of any changes.
          </p>
          <p className={pStyles}>
            We reserve the right to terminate or suspend access to {name} at our
            discretion without notice, including for violations of these Terms
            of Use.
          </p>
          <p className={pStyles}>
            If you have any questions about these Terms of Use, please contact
            us at {email}.
          </p>
          <br />

          <li>
            <strong>Data We Collect</strong>
          </li>
          <p className={pStyles}>
            We do not collect any personal data from our users. {name} is
            designed to respect your privacy.
          </p>
          <br />

          <li>
            <strong>Cookies</strong>
          </li>
          <p className={pStyles}>
            We do not use any cookies or similar tracking technologies on {name}
            .
          </p>
          <br />
          <li>
            <strong>Sessions</strong>
          </li>
          <p className={pStyles}>
            We might use sessions for authentication purposes, to allow users
            ease of access to the app and access to their data in our servers.
          </p>
          <br />

          <li>
            <strong>Information Shared with Third Parties</strong>
          </li>
          <p className={pStyles}>
            For a better experience, while using our Service, we may require you
            to provide us with certain personally identifiable information. The
            app does use third party services that may collect information used
            to identify you. Link to privacy policy of third party service
            providers used by the app:
            <br />
            <br />
            <ol className={olStyles}>
              <li>
                <a href="https://policies.google.com/privacy">
                  Google Play Services
                </a>
              </li>
              <li>
                <a href="https://firebase.google.com/policies/analytics">
                  Google Analytics for Firebase
                </a>
              </li>
              <li>
                <a href="https://firebase.google.com/support/privacy/">
                  Firebase Crashlytics
                </a>
              </li>
            </ol>
            <br />
          </p>
          <li>
            <strong>Children’s Privacy</strong>
          </li>
          <p className={pStyles}>
            These Services do not address anyone under the age of 13. We do not
            knowingly collect personally identifiable information from children
            under 13 years of age. In the case we discover that a child under 13
            has provided me with personal information, we immediately delete
            this from our servers. If you are a parent or guardian and you are
            aware that your child has provided us with personal information,
            please contact us and we will take the necessary actions.
          </p>
          <br />
          <li>
            <strong>Changes to This Privacy Policy</strong>
          </li>
          <p className={pStyles}>
            We may update our Privacy Policy from time to time. Thus, you are
            advised to review this page periodically for any changes. We will
            notify you of any changes by posting the new Privacy Policy on this
            page.
          </p>
          <br />
        </ul>

        <h2 className={h2Styles}>Contact Us</h2>
        <p className={pStyles}>
          If you have any questions or suggestions about our Privacy Policy or
          wish to exercise your rights regarding your personal information,
          please contact us at {email}.
        </p>
        <br />
      </div>
    </main>
  );
};
