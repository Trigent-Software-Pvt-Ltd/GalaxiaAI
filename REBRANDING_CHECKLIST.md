# Galaxia Rebranding Checklist

Complete checklist for rebranding from Roo Code to Galaxia (Trigent Software Inc. version)

**Note:** This is an internal tool for Trigent Software Inc. developers. All public-facing contributing documentation has been removed.

---

## 📦 1. Package & Configuration Files

### Root Package Files
- [ ] `package.json`
  - [ ] Change `"name": "roo-code"` → `"galaxia"`
  - [ ] Update any scripts referencing roo-code

### Main Extension Package
- [ ] `src/package.json`
  - [ ] `"name": "roo-cline"` → `"galaxia"`
  - [ ] `"publisher": "RooVeterinaryInc"` → `"TrigentSoftwareInc"`
  - [ ] `"displayName"` → Update to "Galaxia"
  - [ ] `"author.name": "Roo Code"` → `"Anand Padia 'Andy' - Trigent Software Inc."`
  - [ ] `"repository.url": "https://github.com/RooCodeInc/Roo-Code"` → `https://github.com/Trigent-Software-Pvt-Ltd/GalaxiaAI`
  - [ ] `"homepage": "https://roocode.com"` → `https://trigent.com/`
  - [ ] All `"roo-cline.*"` command IDs → `"galaxia.*"`
  - [ ] All `"roo-cline.*"` configuration keys → `"galaxia.*"`
  - [ ] Keywords array - remove "roo code", "roocode", add "galaxia"

### Workspace Packages
- [ ] `packages/types/package.json`
  - [ ] Package name: `@roo-code/types` → `@galaxia/types` (or your preferred naming)
  
- [ ] `packages/cloud/package.json`
  - [ ] Package name: `@roo-code/cloud` → `@galaxia/cloud`
  
- [ ] `packages/ipc/package.json`
  - [ ] Package name: `@roo-code/ipc` → `@galaxia/ipc`
  
- [ ] `packages/telemetry/package.json`
  - [ ] Package name: `@roo-code/telemetry` → `@galaxia/telemetry`
  
- [ ] `packages/build/package.json`
  - [ ] Package name: `@roo-code/build` → `@galaxia/build`
  
- [ ] `packages/config-eslint/package.json`
  - [ ] Check and update any roo-code references
  
- [ ] `packages/config-typescript/package.json`
  - [ ] Check and update any roo-code references

- [ ] `webview-ui/package.json`
  - [ ] Check and update any roo-code references

- [ ] `apps/web-roo-code/package.json`
  - [ ] Update package name if using this app

- [ ] `apps/web-evals/package.json`
  - [ ] Update package name if using this app

---

## 💻 2. Code References & Imports

### Import Statements (698+ instances)
- [ ] Replace all `from "@roo-code/types"` → `from "@galaxia/types"`
- [ ] Replace all `from "@roo-code/cloud"` → `from "@galaxia/cloud"`
- [ ] Replace all `from "@roo-code/ipc"` → `from "@galaxia/ipc"`
- [ ] Replace all `from "@roo-code/telemetry"` → `from "@galaxia/telemetry"`
- [ ] Replace all `from "@roo-code/build"` → `from "@galaxia/build"`

**Files to update:**
- [ ] `webview-ui/src/**/*.ts` and `webview-ui/src/**/*.tsx`
- [ ] `src/**/*.ts`
- [ ] `packages/**/*.ts`

### Command & Configuration IDs (204+ instances)
- [ ] All `"roo-cline.*"` command IDs → `"galaxia.*"`
  - [ ] `roo-cline.plusButtonClicked` → `galaxia.plusButtonClicked`
  - [ ] `roo-cline.promptsButtonClicked` → `galaxia.promptsButtonClicked`
  - [ ] `roo-cline.mcpButtonClicked` → `galaxia.mcpButtonClicked`
  - [ ] `roo-cline.historyButtonClicked` → `galaxia.historyButtonClicked`
  - [ ] `roo-cline.marketplaceButtonClicked` → `galaxia.marketplaceButtonClicked`
  - [ ] `roo-cline.popoutButtonClicked` → `galaxia.popoutButtonClicked`
  - [ ] `roo-cline.cloudButtonClicked` → `galaxia.cloudButtonClicked`
  - [ ] `roo-cline.settingsButtonClicked` → `galaxia.settingsButtonClicked`
  - [ ] `roo-cline.openInNewTab` → `galaxia.openInNewTab`
  - [ ] `roo-cline.explainCode` → `galaxia.explainCode`
  - [ ] `roo-cline.fixCode` → `galaxia.fixCode`
  - [ ] `roo-cline.improveCode` → `galaxia.improveCode`
  - [ ] `roo-cline.addToContext` → `galaxia.addToContext`
  - [ ] `roo-cline.newTask` → `galaxia.newTask`
  - [ ] `roo-cline.terminalAddToContext` → `galaxia.terminalAddToContext`
  - [ ] `roo-cline.terminalFixCommand` → `galaxia.terminalFixCommand`
  - [ ] `roo-cline.terminalExplainCommand` → `galaxia.terminalExplainCommand`
  - [ ] `roo-cline.setCustomStoragePath` → `galaxia.setCustomStoragePath`
  - [ ] `roo-cline.importSettings` → `galaxia.importSettings`
  - [ ] `roo-cline.focusInput` → `galaxia.focusInput`
  - [ ] `roo-cline.acceptInput` → `galaxia.acceptInput`
  - [ ] `roo-cline.toggleAutoApprove` → `galaxia.toggleAutoApprove`

- [ ] All `"roo-cline.*"` configuration property names → `"galaxia.*"`
  - [ ] `roo-cline.allowedCommands` → `galaxia.allowedCommands`
  - [ ] `roo-cline.deniedCommands` → `galaxia.deniedCommands`
  - [ ] `roo-cline.commandExecutionTimeout` → `galaxia.commandExecutionTimeout`
  - [ ] `roo-cline.commandTimeoutAllowlist` → `galaxia.commandTimeoutAllowlist`
  - [ ] `roo-cline.preventCompletionWithOpenTodos` → `galaxia.preventCompletionWithOpenTodos`
  - [ ] `roo-cline.vsCodeLmModelSelector` → `galaxia.vsCodeLmModelSelector`
  - [ ] `roo-cline.customStoragePath` → `galaxia.customStoragePath`
  - [ ] `roo-cline.enableCodeActions` → `galaxia.enableCodeActions`
  - [ ] `roo-cline.autoImportSettingsPath` → `galaxia.autoImportSettingsPath`
  - [ ] `roo-cline.maximumIndexedFilesForFileSearch` → `galaxia.maximumIndexedFilesForFileSearch`
  - [ ] `roo-cline.useAgentRules` → `galaxia.useAgentRules`
  - [ ] `roo-cline.apiRequestTimeout` → `galaxia.apiRequestTimeout`
  - [ ] `roo-cline.newTaskRequireTodos` → `galaxia.newTaskRequireTodos`
  - [ ] `roo-cline.codeIndex.embeddingBatchSize` → `galaxia.codeIndex.embeddingBatchSize`

- [ ] All `"roo-cline.*"` view IDs → `"galaxia.*"`
  - [ ] `roo-cline-ActivityBar` → `galaxia-ActivityBar`
  - [ ] `roo-cline.SidebarProvider` → `galaxia.SidebarProvider`
  - [ ] `roo-cline.TabPanelProvider` → `galaxia.TabPanelProvider`
  - [ ] `roo-cline.contextMenu` → `galaxia.contextMenu`
  - [ ] `roo-cline.terminalMenu` → `galaxia.terminalMenu`

- [ ] All `"roo-cline.*"` when clauses → `"galaxia.*"`

### Code Constants & Variables
- [ ] `src/api/providers/constants.ts`
  - [ ] Update `HTTP-Referer` header: `"https://github.com/RooVetGit/Roo-Cline"` → `https://github.com/Trigent-Software-Pvt-Ltd/GalaxiaAI`

- [ ] `webview-ui/vite.config.ts`
  - [ ] `PKG_OUTPUT_CHANNEL: "Roo-Code"` → `"Galaxia"`
  - [ ] `PKG_OUTPUT_CHANNEL: "Roo-Code-Nightly"` → `"Galaxia-Nightly"` (if applicable)

- [ ] `src/core/webview/ClineProvider.ts`
  - [ ] Update CSP (Content Security Policy) references to roocode.com domains

- [ ] `packages/cloud/src/config.ts`
  - [ ] `PRODUCTION_CLERK_BASE_URL` → Update domain
  - [ ] `PRODUCTION_ROO_CODE_API_URL` → `PRODUCTION_GALAXIA_API_URL` and update domain

- [ ] `webview-ui/src/components/cloud/CloudView.tsx`
  - [ ] `PRODUCTION_ROO_CODE_API_URL` → `PRODUCTION_GALAXIA_API_URL`
  - [ ] Update placeholder: `vscode://RooVeterinaryInc.roo-cline/...` → `vscode://TrigentSoftwareInc.galaxia/...`

- [ ] `src/core/webview/webviewMessageHandler.ts`
  - [ ] Update `ROO_CODE_PROVIDER_URL` → `GALAXIA_PROVIDER_URL`
  - [ ] Update default URLs

- [ ] `src/api/providers/roo.ts`
  - [ ] Update `ROO_CODE_PROVIDER_URL` → `GALAXIA_PROVIDER_URL`
  - [ ] Update default base URL

- [ ] `packages/telemetry/src/PostHogTelemetryClient.ts`
  - [ ] Update PostHog host URL or remove if not using

---

## 📝 3. Branding Text & UI Strings

### README Files
- [ ] `README.md`
  - [ ] Replace all "Roo Code" references with "Galaxia"
  - [ ] Remove social media badges (Discord, Reddit, Twitter, YouTube)
  - [ ] Remove VS Code Marketplace badge
  - [ ] Update installation instructions
  - [ ] Update repository URLs
  - [ ] Update documentation links
  - [ ] Update copyright and license information

- [ ] `locales/*/README.md` (17 language files)
  - [ ] `locales/ca/README.md`
  - [ ] `locales/de/README.md`
  - [ ] `locales/es/README.md`
  - [ ] `locales/fr/README.md`
  - [ ] `locales/hi/README.md`
  - [ ] `locales/id/README.md`
  - [ ] `locales/it/README.md`
  - [ ] `locales/ja/README.md`
  - [ ] `locales/ko/README.md`
  - [ ] `locales/nl/README.md`
  - [ ] `locales/pl/README.md`
  - [ ] `locales/pt-BR/README.md`
  - [ ] `locales/ru/README.md`
  - [ ] `locales/tr/README.md`
  - [ ] `locales/vi/README.md`
  - [ ] `locales/zh-CN/README.md`
  - [ ] `locales/zh-TW/README.md`

### Internationalization Files (i18n)
- [ ] `src/i18n/locales/*/*.json` (90+ files)
  - [ ] Search and replace "Roo Code" → "Galaxia"
  - [ ] Search and replace "RooCode" → "Galaxia"
  - [ ] Search and replace "roocode" → "galaxia"
  - [ ] Update welcome messages
  - [ ] Update settings descriptions
  - [ ] Update error messages
  - [ ] Update help text

- [ ] `webview-ui/src/i18n/locales/*/*.json`
  - [ ] Update all locale files with same replacements

**Key files to check:**
- [ ] `src/i18n/locales/en/common.json`
- [ ] `src/i18n/locales/en/settings.json`
- [ ] `src/i18n/locales/en/chat.json`
- [ ] `src/i18n/locales/en/cloud.json`
- [ ] `src/i18n/locales/en/welcome.json`
- [ ] Repeat for all other languages

### Webview UI Components
- [ ] `webview-ui/src/components/settings/About.tsx`
  - [ ] Update support email: `support@roocode.com` → `anand_p@trigent.com`
  - [ ] Update GitHub links
  - [ ] Update privacy policy links

- [ ] `webview-ui/src/components/welcome/WelcomeView.tsx`
  - [ ] Update welcome message
  - [ ] Update branding references

- [ ] `webview-ui/src/components/welcome/WelcomeViewProvider.tsx`
  - [ ] Update provider signup links

- [ ] `webview-ui/src/components/chat/Announcement.tsx`
  - [ ] Remove or update careers link

- [ ] `webview-ui/src/components/marketplace/IssueFooter.tsx`
  - [ ] Update GitHub issue links

- [ ] `webview-ui/src/components/ErrorBoundary.tsx`
  - [ ] Update GitHub issues link

- [ ] `webview-ui/src/utils/docLinks.ts`
  - [ ] Update documentation base URL

---

## 🌐 4. URLs & External References

### Domain References (220+ instances)
- [ ] `https://roocode.com` → `https://trigent.com/`
- [ ] `https://docs.roocode.com` → remove
- [ ] `https://app.roocode.com` → remove
- [ ] `https://api.roocode.com` → remove
- [ ] `https://clerk.roocode.com` → remove
- [ ] `https://ph.roocode.com` → remove
- [ ] `https://careers.roocode.com` → remove
- [ ] `https://staging.roocode.com` → remove
- [ ] `https://dev.roocode.com` → remove

### GitHub References
- [ ] `https://github.com/RooCodeInc/Roo-Code` → remove
- [ ] `https://github.com/RooVetGit/Roo-Cline` → remove
- [ ] Update all GitHub issue links → remove
- [ ] Update all GitHub PR links → remove
- [ ] Update all GitHub discussion links → remove

### Social Media & Community Links
- [ ] Remove Discord links (`discord.gg/roocode`) → remove
- [ ] Remove Reddit links (`reddit.com/r/RooCode`) → remove
- [ ] Remove Twitter/X links (`x.com/roocode`) → remove
- [ ] Remove YouTube links (`youtube.com/@roocodeyt`) → remove
- [ ] Remove VS Code Marketplace badges → remove

### Email Addresses
- [ ] `support@roocode.com` → `anand_p@trigent.com`

**Files to update:**
- [ ] `webview-ui/src/components/settings/About.tsx`
- [ ] `src/i18n/locales/*/settings.json`
- [ ] `src/i18n/locales/*/common.json`
- [ ] `packages/evals/src/cli/utils.ts`
- [ ] `src/services/checkpoints/__tests__/ShadowCheckpointService.spec.ts`
- [ ] `locales/*/CODE_OF_CONDUCT.md`

---

## 🎨 5. Visual Assets & Icons

### Icons
- [ ] `src/assets/icons/icon.svg` - replaced
- [ ] `src/assets/icons/icon.png` - replaced
- [ ] `src/assets/icons/icon-nightly.png` - replaced
- [ ] `src/assets/icons/panel_light.png` - replaced
- [ ] `src/assets/icons/panel_dark.png` - replaced

### Images
- [ ] `src/assets/images/roo-logo.svg` → replaced with `galaxia-logo.svg`
- [ ] `src/assets/images/roo.png` → replaced with `galaxia.png`

### Web App Assets
- [ ] `apps/web-roo-code/public/Roo-Code-Logo-Horiz-white.svg` → replaced with `Galaxia-Logo-Horiz-white.svg`
- [ ] `apps/web-roo-code/public/Roo-Code-Logo-Horiz-blk.svg` → replaced with `Galaxia-Logo-Horiz-blk.svg`
- [ ] `apps/web-roo-code/public/RooCode-Badge-white.svg` → replaced with `Galaxia-Badge-white.svg`
- [ ] `apps/web-roo-code/public/RooCode-Badge-blk.svg` → replaced with `Galaxia-Badge-blk.svg`

### Favicons
- [ ] `apps/web-roo-code/public/favicon.ico` - replaced
- [ ] `apps/web-roo-code/public/favicon-16x16.png` - replaced
- [ ] `apps/web-roo-code/public/favicon-32x32.png` - replaced
- [ ] `apps/web-roo-code/public/apple-touch-icon.png` - replaced
- [ ] `apps/web-roo-code/public/android-chrome-192x192.png` - replaced
- [ ] `apps/web-roo-code/public/android-chrome-512x512.png` - replaced

### Release Images
- [ ] `releases/*.png` - Update or remove release announcement images
- [ ] Consider removing old release images or updating template

### Code References to Logo Files
- [ ] `apps/web-roo-code/src/lib/hooks/use-logo-src.ts`
  - [ ] Update logo file paths

---

## 📚 6. Documentation & Legal

### Documentation Files
- [x] `CONTRIBUTING.md`
  - [x] **REMOVED** - Not needed for internal tool

- [x] `CODE_OF_CONDUCT.md`
  - [x] **REMOVED** - Not needed for internal tool

- [ ] `SECURITY.md`
  - [ ] Update security contact email
  - [ ] Update project name

- [ ] `PRIVACY.md`
  - [ ] Update privacy policy references
  - [ ] Update company name

- [ ] `CHANGELOG.md`
  - [ ] Update header/branding
  - [ ] Update project name in entries

### License
- [ ] `LICENSE`
  - [ ] Update copyright: `Copyright 2025 Roo Code, Inc.` → `Copyright 2025 Trigent Software Inc.`

### Package Documentation
- [ ] `packages/types/npm/README.md`
  - [ ] Update extension name references: `RooVeterinaryInc.roo-cline` → `TrigentSoftwareInc.galaxia`
  - [ ] Update extension dependencies examples

- [ ] `packages/types/npm/package.metadata.json`
  - [ ] Update repository URL
  - [ ] Update homepage URL
  - [ ] Update bugs URL

### Locale Documentation
- [x] `locales/*/CODE_OF_CONDUCT.md` (all languages) - **REMOVED**
- [x] `locales/*/CONTRIBUTING.md` (all languages) - **REMOVED**

---

## ⚙️ 7. Configuration & Build Files

### Build Configuration
- [ ] `webview-ui/vite.config.ts`
  - [ ] Update `PKG_OUTPUT_CHANNEL` environment variable
  - [ ] Check for any other branding references

- [ ] `src/esbuild.mjs`
  - [ ] Check for any branding references

- [ ] `turbo.json`
  - [ ] Check for package name references

- [ ] `tsconfig.json` files
  - [ ] Check for any references (usually none, but verify)

### Environment Variables
- [ ] Search for `ROO_CODE_*` environment variables
  - [ ] `ROO_CODE_PROVIDER_URL` → `GALAXIA_PROVIDER_URL`
  - [ ] Update all references in code

### Test Configuration
- [ ] `src/vitest.config.ts`
- [ ] `webview-ui/vitest.config.ts`
- [ ] Check for any test-specific branding

---

## 🧪 8. Test Files

### Test Mocks & References
- [ ] `src/**/__tests__/**/*.spec.ts`
  - [ ] Update `"roo-cline"` in mocks → `"galaxia"`
  - [ ] Update `"RooVeterinaryInc"` publisher → `"TrigentSoftwareInc"`
  - [ ] Update roocode.com URLs
  - [ ] Update test descriptions

- [ ] `webview-ui/src/**/__tests__/**/*.spec.tsx`
  - [ ] Update all branding references in tests

- [ ] `packages/**/__tests__/**/*.spec.ts`
  - [ ] Update all branding references

**Key test files to check:**
- [ ] `src/services/search/__tests__/file-search.spec.ts`
- [ ] `src/services/mdm/__tests__/MdmService.spec.ts`
- [ ] `src/core/tools/__tests__/newTaskTool.spec.ts`
- [ ] `src/core/webview/__tests__/ClineProvider.spec.ts`
- [ ] `src/api/providers/__tests__/*.spec.ts`
- [ ] `packages/cloud/src/__tests__/WebAuthService.spec.ts`
- [ ] `packages/cloud/src/__tests__/CloudShareService.test.ts`
- [ ] `webview-ui/src/components/settings/__tests__/About.spec.tsx`
- [ ] `webview-ui/src/components/cloud/__tests__/CloudView.spec.tsx`

---

## 🔧 9. Scripts & Automation

### Build & Install Scripts
- [ ] `scripts/install-vsix.js`
  - [ ] Check for hardcoded extension names

- [ ] `packages/evals/scripts/setup.sh`
  - [ ] Update extension installation: `RooVeterinaryInc.roo-cline` → `TrigentSoftwareInc.galaxia`
  - [ ] Update repository references

### CI/CD Configuration (if applicable)
- [ ] `.github/workflows/*.yml` (if exists)
  - [ ] Update any branding references
  - [ ] Update extension IDs

- [ ] Other CI/CD config files
  - [ ] Check for any branding references

---

## 🌍 10. Web Applications (if using)

### Web Roo Code App
- [ ] `apps/web-roo-code/src/**/*.tsx`
  - [ ] Update all "Roo Code" references → "Galaxia"
  - [ ] Update SEO metadata
  - [ ] Update OpenGraph tags
  - [ ] Update structured data

- [ ] `apps/web-roo-code/src/app/layout.tsx`
  - [ ] Update title template: `"%s | Roo Code"` → `"%s | Galaxia"`
  - [ ] Update OG title and description

- [ ] `apps/web-roo-code/src/lib/seo.ts` (if exists)
  - [ ] Update all SEO metadata

- [ ] `apps/web-roo-code/src/lib/structured-data.ts`
  - [ ] Update structured data with Galaxia branding

### Web Evals App
- [ ] `apps/web-evals/src/**/*`
  - [ ] Update branding if using this app

---

## 📦 11. Packaging & Distribution

### VSIX Build Configuration
- [ ] Verify `src/package.json` publisher and name are correct
- [ ] Build VSIX: `pnpm vsix`
- [ ] Verify output: `bin/galaxia-<version>.vsix`
- [ ] Test installation: `code --install-extension bin/galaxia-<version>.vsix`

### Distribution Preparation
- [ ] Create installation instructions document
- [ ] Create PowerShell install script (for Windows users)
- [ ] Create Bash install script (for Linux/Mac users)
- [ ] Prepare ZIP file with VSIX + instructions

### Distribution Checklist
- [ ] Upload VSIX to Google Drive (or internal server)
- [ ] Create shareable link
- [ ] Document download URL
- [ ] Prepare email/announcement with installation steps
- [ ] Test installation on clean VS Code instance

---

## ✅ Final Verification

### Build & Test
- [ ] Run `pnpm install` to ensure all dependencies resolve
- [ ] Run `pnpm build` to verify build succeeds
- [ ] Run `pnpm test` to verify tests pass
- [ ] Run `pnpm vsix` to create extension package
- [ ] Install VSIX in clean VS Code instance
- [ ] Verify extension loads correctly
- [ ] Verify all UI shows "Galaxia" branding
- [ ] Verify no "Roo Code" or "roocode" references visible
- [ ] Test basic functionality (chat, settings, etc.)

### Search & Verify
- [ ] Search codebase for "roo-code" (case-insensitive)
- [ ] Search codebase for "roocode" (case-insensitive)
- [ ] Search codebase for "Roo Code" (case-insensitive)
- [ ] Search codebase for "RooCode" (case-insensitive)
- [ ] Search codebase for "RooVeterinaryInc"
- [ ] Search codebase for "RooCodeInc"
- [ ] Verify all found instances are intentional (e.g., in comments about history)

### Manual UI Check
- [ ] Extension name in VS Code sidebar
- [ ] Extension name in VS Code Extensions view
- [ ] Welcome screen text
- [ ] Settings page text
- [ ] About page text
- [ ] Error messages
- [ ] Help text and tooltips
- [ ] Command palette entries

---

## 📝 Notes

### Custom Modes & Model Packaging
- [ ] Document your custom modes
- [ ] Document your model packaging approach
- [ ] Update any mode-specific branding

### Internal Distribution
- [ ] Document internal distribution process
- [ ] Create internal documentation for developers
- [ ] Set up support channel for installation issues

---

## 🎯 Priority Order

**High Priority (Must Do First):**
1. Package names and publisher
2. Extension ID (`roo-cline` → `galaxia`)
3. All `@roo-code/*` package imports - replaced with `@galaxia/*`
4. Command and configuration IDs
5. URLs and domain references
6. Visual assets (icons, logos)

**Medium Priority:**
7. i18n files and UI strings
8. Documentation files
9. Test files
10. Build configuration

**Low Priority (Can Do Later):**
11. Web applications (if not using)
12. Release images
13. Historical references in comments

---

**Last Updated:** [Date]
**Status:** [ ] Not Started | [ ] In Progress | [ ] Completed

