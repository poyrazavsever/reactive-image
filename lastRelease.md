# Last Release Notes

## Highlights
- Introduced the **KenBurnsSequence** variant with reusable presets plus customizable frame timelines, complete with hooks, animations, and type-safe props.
- Documented the new variant in both English and Turkish docs and updated the package/root README files with fresh examples and feature counts.
- Added a KenBurnsSequence showcase section so visitors can preview classic, dramatic, and custom timelines directly in the demo app.

## Recommended Release Steps
1. `cd packages/reactive-image`
2. `npm version minor` *(or bump `patch`/`major` as needed)*
3. `npm publish --access public`
4. `git push origin main --follow-tags`
5. `cd .. && npm run build` *(optional: rebuild the demo site after publishing)*
