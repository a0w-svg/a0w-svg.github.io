# a0w-svg (a0aRd) — GitHub Pages Portfolio (`a0w-svg.github.io`)

Interactive portfolio website built from the public repositories of **[@a0w-svg](https://github.com/a0w-svg)**:

- **[AzamiOS](https://github.com/a0w-svg/AzamiOS)** — 64-bit `x86_64` operating system with Linux syscall ABI compatibility, custom POSIX `libc`, VirtIO/xHCI/e1000 drivers, and the `azwm` compositing window manager.
- **[USOS Checker (`usoschecker-public`)](https://github.com/a0w-svg/usoschecker-public)** — Cross-platform USOS & Platon companion app for Vistula University students (Android 12+, Windows x64, Linux) in Kotlin.
- **[JakOS](https://github.com/a0w-svg/JakOS)** — 32-bit `x86` operating system and `Rose-lk` kernel in C & Assembly.
- **[Hana_brainfuck](https://github.com/a0w-svg/Hana_brainfuck)** — C++ Brainfuck interpreter with interactive browser execution of `brainfuck_programs/AzamiOS.bf` and `hello.bf`.
- **Complete 11-Repository Index** — Includes `yatka`, `Snake`, `Wei_Matrix_calc`, `Banking_System_Project`, `KnightCTFWriteups`, `password-generator`, and `alsq`, with live GitHub API synchronization.

## Features

- **Interactive `AzamiOS` Shell Simulator**: Run `uname -a`, `cat /proc/cpuinfo`, `ls -la /`, `pkg list`, `make linux-test`, and `lsmod` directly in the browser.
- **Interactive `USOS Checker` Preview Stage**: Switch between **Desktop**, **Android**, and **API Setup** views in both **Dark (OLED)** and **Light** themes using real app screenshots.
- **Interactive `Hana_brainfuck` Memory-Tape Sandbox**: Executes `AzamiOS.bf` and `hello.bf` on an 8-cell visual tape.
- **Bilingual (`EN` / `PL`) & Theme Toggle (`OLED Dark` / `Light`)**: Full keyboard navigation and `prefers-reduced-motion` support.
- **Zero Build Step**: Pure static HTML/CSS/JS with `.nojekyll` ready for instant GitHub Pages deployment.

## Preview Locally

Open `index.html` directly in your browser, or serve the directory over HTTP:

```powershell
python -m http.server 8080
# Then open http://localhost:8080
```

## Publish to GitHub Pages (`a0w-svg.github.io`)

When you are ready to publish:

```powershell
git init
git add .
git commit -m "Initial portfolio website for a0w-svg"
git branch -M main
gh repo create a0w-svg/a0w-svg.github.io --public --source=. --remote=origin --push
```

