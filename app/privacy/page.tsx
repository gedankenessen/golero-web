export default function PrivacyPolicyPage() {
  return (
    <main>
      <section>
        <h1>Privacy policy</h1>
        <ul>
          <li>
            We only store what is necessary to make the app work (your email,
            username, groups, matches, predictions etc.)
          </li>
          <li>
            We only store what you enter in the app (so no tracking of any kind)
          </li>
          <li>
            We don&apos;t sell your data and only share it with the services
            that we need, to run the app (
            <a href="https://expo.dev/privacy" target="_blank">
              Expo
            </a>
            {", "}
            <a href="https://www.convex.dev/legal/privacy" target="_blank">
              Convex
            </a>
            {", "}
            <a href="https://resend.com/legal/privacy-policy" target="_blank">
              Resend
            </a>
            )
          </li>
        </ul>
        <br />
        <p>
          If you wish to delete all of the data associated with your account,
          please use the &ldquo;Delete Account&quot; option in the app. If
          you&lsquo;re experiencing issues, contact us via support in the app or
          at{" "}
          <a href="mailto:support@golero.app" target="_blank">
            support@golero.app
          </a>
          .
        </p>
      </section>
    </main>
  );
}
