# Khoai Store website

This is a static website ready for GitHub Pages. It uses only HTML, CSS, and the supplied Khoai Store image assets.

## Before publishing

Review `privacy-policy.html` against the live app configuration and the Google Play **Data safety** form. Update it if any data use, SDK, advertising, purchase, or cloud-save feature changes.

## Publish with GitHub Pages

1. Create a new GitHub repository and upload the full contents of this folder, including the `apps` folder and image files.
2. In the repository, open **Settings → Pages**.
3. Under **Build and deployment**, select **Deploy from a branch**, then choose `main` and `/ (root)`.
4. Wait for GitHub to show the HTTPS site address, then open it to verify the pages and images.
5. Paste the homepage address into **Developer website** in Google Play Console. Use the HTTPS address of `privacy-policy.html` for the app privacy-policy URL.

If this repository is named `khoai-store.github.io`, the homepage will normally be `https://khoai-store.github.io/`. Otherwise it will normally be `https://<github-user>.github.io/<repository-name>/`.
