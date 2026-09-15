import './App.css'

const LAST_UPDATED = 'September 15, 2026'
const APP_NAME = 'Charging Emoji: Battery Effect'
const ANDROID_PACKAGE = 'com.dreek.emojicharge'
const CONTACT_EMAIL = 'truongvq.se@gmail.com'

function App() {
  return (
    <main className="policy">
      <header className="policy-header">
        <h1>Privacy Policy</h1>
        <p className="subtitle">
          {APP_NAME} <span className="dot">·</span> {ANDROID_PACKAGE}
        </p>
        <p className="updated">Last updated: {LAST_UPDATED}</p>
      </header>

      <section>
        <h2>Summary</h2>
        <p>
          We do not run a server, and we never receive the content you create. Your emoji,
          colours, stickers and settings stay on your device. The app does, however, show ads and
          report crashes, and those third-party services collect and share technical identifiers
          about your device. This policy explains exactly what leaves your device and why.
        </p>
      </section>

      <section>
        <h2>What this app stores on your device</h2>
        <p>
          Your customization choices — selected emoji, colours, language, toggle states, wishlist,
          unlocked items and any sticker you create — are saved only on your device using local
          app storage. We have no server that receives them, and they are not transmitted or
          sold.
        </p>
      </section>

      <section>
        <h2>Battery and notifications</h2>
        <p>
          The app reads your device&apos;s battery level to show it on screen and to notify you
          when charging starts or stops, if you enable that in Settings. Your battery data stays
          on your device and is never sent anywhere.
        </p>
      </section>

      <section>
        <h2>Accessibility permission</h2>
        <p>
          If you enable the floating battery emoji, the app requests the Accessibility permission
          solely to draw that indicator above the system status bar. This permission is not used
          to read, collect, or monitor screen content from this or any other app.
        </p>
      </section>

      <section>
        <h2>Photos you choose</h2>
        <p>
          If you create a custom sticker, the app opens your device&apos;s photo picker so you can
          select an image. The image you pick is processed on your device and kept in the
          app&apos;s own local storage so your sticker keeps working. It is never uploaded,
          transmitted, or shared with us or anyone else. The app does not browse or index your
          gallery — it only receives the specific image you selected.
        </p>
      </section>

      <section>
        <h2>Wallpaper</h2>
        <p>
          When you set a wallpaper from this app, the chosen image is applied directly to your
          device&apos;s wallpaper setting. Nothing about that action is transmitted off your
          device.
        </p>
      </section>

      <section>
        <h2>Advertising</h2>
        <p>
          This app shows ads served by <strong>Google AdMob</strong>. AdMob may also source ads
          from mediation partners, currently including <strong>AppLovin</strong>. To select,
          deliver, measure and fraud-check those ads, these advertising services collect the
          following from your device and share it with advertising partners:
        </p>
        <ul>
          <li>
            <strong>Device identifiers</strong> — the Android advertising ID (Ad ID) and the App
            Set ID
          </li>
          <li>
            <strong>IP address</strong>, used to estimate your approximate (city-level) location.
            The app never requests GPS or precise location permission.
          </li>
          <li>
            <strong>Ad interactions</strong> — ad impressions, taps and video views
          </li>
          <li>
            <strong>Diagnostic information</strong> about the device and the ad request
          </li>
        </ul>
        <p>
          This data is shared with those advertising providers as independent third parties; we do
          not receive it ourselves. It is handled under{' '}
          <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer">
            Google&apos;s Privacy Policy
          </a>{' '}
          and{' '}
          <a href="https://www.applovin.com/privacy/" target="_blank" rel="noreferrer">
            AppLovin&apos;s Privacy Policy
          </a>
          .
        </p>
      </section>

      <section>
        <h2>Analytics and crash reporting</h2>
        <p>
          The app uses <strong>Google Firebase Analytics</strong> and{' '}
          <strong>Firebase Crashlytics</strong> to understand which features are used and to
          diagnose crashes. These collect a randomly generated app instance identifier, in-app
          events such as which screens you open, device and operating-system information, and
          crash reports including stack traces. They do not collect your name, your email address,
          or the content you create.
        </p>
      </section>

      <section>
        <h2>Push notifications</h2>
        <p>
          If you allow notifications, the app registers with{' '}
          <strong>Firebase Cloud Messaging</strong> so we can send you news about app updates and
          new content. Registering creates a device messaging token, which is a device identifier
          held by Google&apos;s messaging service. It is not linked to your identity, and you can
          stop it at any time by turning notifications off for this app in your Android settings.
        </p>
      </section>

      <section>
        <h2>Purchases</h2>
        <p>
          If you buy the ad-free upgrade, the transaction is processed entirely by{' '}
          <strong>Google Play Billing</strong>. We never see or store your payment card, billing
          address, or Google account details. The app only records on your own device whether the
          purchase is active.
        </p>
      </section>

      <section>
        <h2>Your choices</h2>
        <ul>
          <li>
            <strong>Ad privacy settings</strong> — open Settings inside the app to review or
            change your advertising consent choices where they apply in your region.
          </li>
          <li>
            <strong>Reset or delete your advertising ID</strong> — Android Settings → Privacy →
            Ads lets you reset your Ad ID or delete it entirely, which stops personalised
            advertising across all apps.
          </li>
          <li>
            <strong>Notifications</strong> — turn them off in Android Settings → Apps →{' '}
            {APP_NAME} → Notifications.
          </li>
          <li>
            <strong>Delete everything stored locally</strong> — clearing the app&apos;s storage, or
            uninstalling the app, removes all data the app keeps on your device.
          </li>
          <li>
            <strong>Questions or requests</strong> — email us at{' '}
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> and we will respond. For data
            held by Google or AppLovin, please use the controls described in their own privacy
            policies linked above.
          </li>
        </ul>
      </section>

      <section>
        <h2>Data security</h2>
        <p>
          All data transmitted by the app, and by the third-party services listed above, is
          encrypted in transit using HTTPS/TLS.
        </p>
      </section>

      <section>
        <h2>Children&apos;s Privacy</h2>
        <p>
          This app is not intended for children under the age of 13. We do not knowingly collect
          personal information from children under 13. If you believe a child has provided such
          information, please contact us and we will address it.
        </p>
      </section>

      <section>
        <h2>Changes to this policy</h2>
        <p>
          If this policy changes, the updated version will be published at this same address with
          a revised &quot;Last updated&quot; date.
        </p>
      </section>

      <section>
        <h2>Contact Us</h2>
        <p>
          If you have any questions or suggestions about this Privacy Policy, you can reach us via
          email at <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> or through the contact
          details listed on this app&apos;s Google Play Store page.
        </p>
      </section>
    </main>
  )
}

export default App
