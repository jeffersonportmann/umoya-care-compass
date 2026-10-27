<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Wix static deployments use the official complete-file drop API against the verified existing site, never provision a new site or generate an Astro configuration.
- The static CI build exports published Wix articles as public JSON and pre-renders all linked pages; static browser navigation reads that snapshot because Wix static hosting cannot run server functions.
- GitHub deployment credentials live only in protected Actions environment secrets; CLI tokens and authentication output must never be logged or written into deliverable files.
