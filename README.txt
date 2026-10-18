SAVORY SPOON — FOUR-PAGE STATIC RESTAURANT WEBSITE
=================================================

WHAT IS INCLUDED
- index.html    Home page
- menu.html     Menu page with working category filters and search
- about.html    About/story page
- contact.html  Contact page with a demo-only contact form
- styles.css    Responsive layout and styling
- app.js        Mobile navigation, menu filtering and demo form behaviour

QUICK START (NO INSTALLATION NEEDED)
1. Extract savory_spoon_restaurant.zip to a folder on your computer.
2. Open the extracted folder.
3. Double-click index.html.
4. Use the navigation to visit Menu, Our Story and Contact.

For best results, use an up-to-date version of Chrome, Edge, Firefox or Safari.
The food photos and Google Fonts are loaded from the internet, so these visual assets
may not load when you are offline. The website's structure and local code remain local.

RUN ON A LOCAL TEST SERVER — RECOMMENDED
Option A: Python
1. Install Python 3 from https://www.python.org/downloads/ if it is not installed.
2. Open Command Prompt (Windows) or Terminal (macOS/Linux).
3. Change directory into the extracted folder. Example on Windows:
   cd C:\Users\YourName\Downloads\savory_spoon_restaurant
4. Run:
   python -m http.server 8000
   If that command is not recognised, try:
   py -m http.server 8000
5. Open this URL in your browser:
   http://localhost:8000
6. To stop the server, return to the terminal and press Ctrl+C.

Option B: Visual Studio Code
1. Install Visual Studio Code.
2. Open the extracted folder in VS Code.
3. Install the "Live Server" extension by Ritwick Dey.
4. Right-click index.html and choose "Open with Live Server".
5. Your browser will open a local address, usually http://127.0.0.1:5500.

UPLOAD TO A TEST/HOSTING SERVER
1. Open your hosting control panel (for example cPanel or a similar file manager).
2. Open the document root for the test domain/subdomain. In cPanel this is often
   public_html or the folder assigned to your subdomain.
3. Upload the contents of the extracted folder (not just the ZIP file) so that
   index.html, menu.html, about.html, contact.html, styles.css and app.js are
   in the same directory.
4. Visit your test domain. Make sure index.html is in the directory that the
   domain serves as its document root.
5. If you upload into a subfolder, open that subfolder's URL.

TEST CHECKLIST
- Open Home, Menu, Our Story and Contact from the navigation.
- On Menu, select Mains/Sides/Drinks/Desserts and try the search box.
- Resize the browser or use mobile device emulation to test the responsive menu.
- Submit the contact form: it shows a demo notice only; it does NOT send a message.
- Check that food images and fonts load while connected to the internet.

IMPORTANT LIMITATIONS
- This is a static frontend demo; it has no backend or database.
- The contact form does not send, save or email messages.
- There is no online ordering, payment, booking, login or admin dashboard.
- Menu prices, address, telephone and email are sample content; replace them.
- Photos and fonts are loaded from third-party services and require internet access.
- Use HTTPS on a public test server. Do not put secrets or API keys in frontend files.

CUSTOMISING THE SITE
- Edit text and page sections in the relevant .html file.
- Edit colours and layout in styles.css (the colour variables are at the top).
- Edit interactions in app.js.
- Replace the image URLs with your own licensed image URLs or local image files.
