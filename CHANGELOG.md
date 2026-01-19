# [0.2.0](https://github.com/leoweyr/leoweyr_Original_Verse/compare/v0.1.0...v0.2.0) (2026-01-18)


### Bug Fixes

* enable precise pause and resume control for ongoing animations ([0eb2180](https://github.com/leoweyr/leoweyr_Original_Verse/commit/0eb218036393728792b243eb1bd4042daf0bad2e))
* **intro:** resolve compilation error from unused `prevProps` and `snapshot` parameters in componentDidUpdate ([29b9b1f](https://github.com/leoweyr/leoweyr_Original_Verse/commit/29b9b1f5d56bd2a88acc1692e62ef2eac635e9ed))
* **observer-perspective:** resolve enum syntax error with erasableSyntaxOnly enabled ([4b429bb](https://github.com/leoweyr/leoweyr_Original_Verse/commit/4b429bb4507328bcbcb5adb56ee6343c82bd727d))
* **temporary-irresponsibility:** complete responsive behavior fix ([29bcd59](https://github.com/leoweyr/leoweyr_Original_Verse/commit/29bcd59750ea9ce667ebe82eb65d48828c13fbd6))
* **temporary-irresponsibility:** ensure responsive behavior persists across orientation changes ([cd76935](https://github.com/leoweyr/leoweyr_Original_Verse/commit/cd76935c7ff11364d20b333ac40c2300653160d6))
* **temporary-irresponsibility:** prevent users bypassing landscape orientation requirement through rapid device rotation ([7e18108](https://github.com/leoweyr/leoweyr_Original_Verse/commit/7e18108c40f94d0d87657855a49fba77c7dc7e9b))


### Features

* add animation pause/resume controller and enable TemporaryIrresponsibility component to use it ([dec8c92](https://github.com/leoweyr/leoweyr_Original_Verse/commit/dec8c92bb11b0752b3ceafdfe42060b4df5e6287))
* enable intro scene to transition to main stage ([050d388](https://github.com/leoweyr/leoweyr_Original_Verse/commit/050d388303d516e4b263442217082082a61d5bdc))
* **intro:** add two-phase sequential animations ([dba2979](https://github.com/leoweyr/leoweyr_Original_Verse/commit/dba2979e42c16d8d705929546182b7d8c36b7c57))
* **main-stage:** encapsulate Spotlight, MusicBox and random backgrounds into unified scene ([3aeea84](https://github.com/leoweyr/leoweyr_Original_Verse/commit/3aeea8442b03451c8ccbd5f0908794145a55b1a3))
* **observer-perspective:** add internationalization support with language detection and translation capabilities ([1acc095](https://github.com/leoweyr/leoweyr_Original_Verse/commit/1acc0955d18b589b4cadfd728c44847d0dfa016e))
* **spotlight:** implement slice-based favicon, impression, and expression synchronization ([7744df7](https://github.com/leoweyr/leoweyr_Original_Verse/commit/7744df718a3103daa586f3b7a403dd3aee5bab2c))
* **temporary-irresponsibility:** make component responsive ([6aaad23](https://github.com/leoweyr/leoweyr_Original_Verse/commit/6aaad2309852c3b347eabc826eb2571dde475326))
* **temporary-irresponsibility:** prompt mobile users in portrait narrow screen to forcibly rotate device to landscape mode ([47cd860](https://github.com/leoweyr/leoweyr_Original_Verse/commit/47cd860886d7bdadb5fb2b85739fac1a49b7a76d))



# [0.1.0 - Chaos](https://github.com/leoweyr/leoweyr_Original_Verse/compare/8f22495882a3e03484d199cddef999d4633845d0...v0.1.0) (2025-11-18)


### Bug Fixes

* **expression:** adjust bar circle height to match bar rectangle width on Safari ([#1](https://github.com/leoweyr/leoweyr_Original_Verse/issues/1)) ([d5a995e](https://github.com/leoweyr/leoweyr_Original_Verse/commit/d5a995e5f3511f5596281a84f97f7f8533cbff9f))
* **expression:** resolve layering issue where bar circles obscured text ([32745ae](https://github.com/leoweyr/leoweyr_Original_Verse/commit/32745ae4ebfd413cd459f05f7d7019327aa57037))
* **impression:** resolve component scrolling instead of staying fixed to viewport ([71b2c00](https://github.com/leoweyr/leoweyr_Original_Verse/commit/71b2c00912a4fd68051b251afa9f0c7184d3a4e5))
* resolve background scrolling issue ([268b040](https://github.com/leoweyr/leoweyr_Original_Verse/commit/268b04014c1d8b9b65a6236e149074bdd886f9e4))


### Features

* add cosmic background option with random presentation alongside original background ([e230034](https://github.com/leoweyr/leoweyr_Original_Verse/commit/e2300345091884cb24b6313309a8db4c9444e7bd))
* add multiple impressions and expressions with random display ([8f22495](https://github.com/leoweyr/leoweyr_Original_Verse/commit/8f22495882a3e03484d199cddef999d4633845d0))
* add music box with microwave echo of the verse audio playback ([e2add6e](https://github.com/leoweyr/leoweyr_Original_Verse/commit/e2add6e778fa151d9b65cd3f33cea8627b59126f))
* expand impressions and expressions collection ([8065c07](https://github.com/leoweyr/leoweyr_Original_Verse/commit/8065c07aa5004d81a67b77b26a32f79ea78584fb))
* randomize website title, description, and icon display ([93b27c9](https://github.com/leoweyr/leoweyr_Original_Verse/commit/93b27c9b87516f311cab102754260c7d9085ee43))


### Performance Improvements

* **music-box:** optimize icon switching to eliminate visual gap when playback starts ([57dad57](https://github.com/leoweyr/leoweyr_Original_Verse/commit/57dad57b23613637db743a2e3e6a25fb0dfc3b7c))
* **music-box:** optimize icon transition to reduce visual flickering when playback starts ([330cc96](https://github.com/leoweyr/leoweyr_Original_Verse/commit/330cc967faa1cb074af2fcf6afeb05137232b9ee))



