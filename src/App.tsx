import './App.css'

const LAST_UPDATED = 'August 6, 2026'
const APP_NAME = 'Charging Emoji: Battery Effect'
const ANDROID_PACKAGE = 'com.dreek.emojicharge'
const CONTACT_EMAIL = 'truongvq.se@gmail.com' // 👈 Thay email thực tế của bạn vào đây (hoặc để mặc định)

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
        <h2>What this app stores</h2>
        <p>
          Your customization choices (selected emoji, colors, language, and toggle states) are
          saved only on your device using local app storage. We do not collect, transmit, or sell
          this data, and we have no server that receives it.
        </p>
      </section>

      <section>
        <h2>Battery and notifications</h2>
        <p>
          The app reads your device&apos;s battery level to show it on screen and to notify you
          when charging starts or stops, if you enable that in Settings. This data stays on your
          device and is never sent anywhere.
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
        <h2>Advertising</h2>
        <p>
          This app shows ads served by Google AdMob. AdMob may collect and use data, such as your
          device&apos;s advertising ID, to serve and measure ads in accordance with{' '}
          <a 
            href="https://policies.google.com/privacy" 
            target="_blank" 
            rel="noreferrer"
          >
            Google&apos;s Privacy Policy
          </a>
          . We do not control or receive that data ourselves.
        </p>
      </section>

      <section>
        <h2>Wallpaper</h2>
        <p>
          When you set a wallpaper from this app, the chosen image (bundled with the app) is
          applied directly to your device&apos;s wallpaper setting. The app does not access your
          personal photo gallery or storage.
        </p>
      </section>

      <section>
        <h2>Children&apos;s Privacy</h2>
        <p>
          This app is not intended for children under the age of 13. We do not knowingly collect
          personal information from children under 13.
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
          email at{' '}
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> or through the contact details 
          listed on this app&apos;s Google Play Store page.
        </p>
      </section>
    </main>
  )
}

export default App