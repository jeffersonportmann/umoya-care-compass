# Umoya Care Compass

https://www.umoya.care/

Baue bitte diese Seite nach einfach mit einbisschen mehr das gefühl von professionalität und der zweck verkörpern was sie anbieten

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/ebbff412-7937-494b-974a-39d6a29bfd8e).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

## Automatic Wix static deployment

The workflow `.github/workflows/wix-static.yml` builds with `npm run build`, renders all linked pages into `dist/static`, exports published blog content to public `blog-data.json`, checks for leaked credentials, then uploads **all** static files through Wix's official multipart `drop` endpoint. It never uploads the server bundle, creates a site, or generates Astro configuration. Blog updates appear at the next workflow run; run it manually after changing articles in Wix.

Target: the existing **uMoya Cape Town Private** headless website serving `https://www.umoya.care/`. The upload replaces its entire frontend file set. A verification failure stops the upload.

### Required GitHub setup (not configured by adding the workflow file)

1. Connect this repository through Lovable's Git settings if it is not already connected. The workflow triggers on pushes to `main` and manually in GitHub Actions.
2. In GitHub, create a protected environment named `wix-production`; restrict deployment branches to `main` and add any required reviewers.
3. Add **environment secrets**, never files or `VITE_` variables:
   - `WIX_CLI_API_KEY`: a provider-issued Wix API key with permissions to log in via the Wix CLI and publish this site. **Not** the Lovable connection key.
   - `WIX_BLOG_CONNECTION_KEY`: the existing Lovable Wix connection key used by the blog integration.
   - `LOVABLE_API_KEY`: the Lovable project key used to call the connection gateway during static rendering.
4. Run the workflow manually once. It obtains a short-lived Wix token at runtime and verifies the current static-file listing before replacing the frontend. Authentication/permission failures stop publication. Never upload temporary CLI login state or tokens as artifacts.

No credential values are committed. The GitHub environment is separate from Lovable's secret store; secrets are **not copied automatically**. If managed connection credentials are not available to configure GitHub securely, deployment remains blocked rather than putting a key in source or using a browser API call.

### Official references

- [Wix static upload and existing-site updates](https://dev.wix.com/docs/go-headless/wix-managed-headless/other-frameworks/your-own-frontend/upload-a-static-site)
- [Official multipart drop API and full replacement semantics](https://dev.wix.com/docs/api-reference/account-level/sites/skills/upload-a-website-or-html-files.md)
- [Wix CLI GitHub Actions authentication](https://dev.wix.com/docs/develop-websites/articles/workspace-tools/developer-tools/git-integration-wix-cli-for-sites/set-up-git-hub-actions-to-work-with-the-wix-cli-for-sites.md)
