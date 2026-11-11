/* ==========================================================================
   a0w-svg (a0aRd) — Interactive Portfolio Engine (app.js)
   - Preloaded telemetry for all 11 public repositories + live GitHub API sync
   - AzamiOS x86_64 interactive shell inspector
   - USOS Checker platform & theme screenshot switcher
   - Hana_brainfuck live memory-tape interpreter (AzamiOS.bf & hello.bf)
   - Bilingual EN / PL localization & OLED Dark / Light theme toggle
   ========================================================================== */

(function () {
  "use strict";

  // --------------------------------------------------------------------------
  // 1. Complete Public Repositories Dataset (a0w-svg)
  // --------------------------------------------------------------------------
  const PUBLIC_REPOS = [
    {
      name: "AzamiOS",
      url: "https://github.com/a0w-svg/AzamiOS",
      category: "systems",
      language: "C",
      langColor: "#38bdf8",
      license: "GPL-2.0 / BSD-3",
      fork: false,
      stars: 1,
      sizeBytes: 9132284,
      sizeLabel: "9.13 MB (8.45 MB C)",
      createdAt: "2021-08-05",
      updatedAt: "2026-10-12",
      desc: {
        en: "64-bit x86_64 Operating System featuring a Unix FHS hierarchy, unmodified Linux x86_64 syscall ABI, custom POSIX libc, VirtIO/xHCI/e1000 drivers, and the azwm compositing desktop.",
        pl: "64-bitowy system operacyjny x86_64 z hierarchią FHS, kompatybilnością z ABI wywołań systemowych Linuksa, własną biblioteką POSIX libc, sterownikami VirtIO/xHCI/e1000 oraz środowiskiem graficznym azwm."
      },
      highlights: [
        "x86_64 Long Mode (PML4) · Limine BIOS/UEFI bootloader",
        "Runs unmodified static Linux ELF64 binaries (musl + BusyBox + Bash 5.2)",
        "40+ POSIX libc headers · ptrace(2), perf_event_open(2), ~20ns TSC vDSO",
        "VirtIO, Intel e1000, RTL8139/8169, xHCI USB 3.x, Intel HDA, azwm + X11"
      ],
      tree: `AzamiOS/
├── arch/x86_64/       # PML4 paging, SMP, syscall ABI, ptrace, PMU, vDSO
├── kernel/            # Preemptive scheduler, ELF64 loader, signals, futex
├── drivers/           # VirtIO, e1000, RTL8169, xHCI USB 3.x, HDA/AC97, DRM
├── fs/                # VFS: ext2, FAT32, ProcFS, SysFS, DevFS, TarFS initrd
├── hal/               # PCI enumeration, MSI/INTx, I/O APIC + LAPIC
├── userland/
│   ├── libc/          # Custom freestanding POSIX C library (BSD-3-Clause)
│   ├── bin/ & sbin/   # Core POSIX utilities + dhcpcd, httpd, ntpd, ping
│   └── gui/           # azwm compositor, terminal, filemanager, X11 clients
└── tools/linux/       # musl 1.2.5, BusyBox 1.36.1, Bash 5.2, TinyCC, ports`
    },
    {
      name: "usoschecker-public",
      url: "https://github.com/a0w-svg/usoschecker-public",
      homepage: "https://usoscheckerdesign.vercel.app/",
      releaseUrl: "https://github.com/a0w-svg/usoschecker-public/releases/latest",
      releaseTag: "v1.10.0",
      category: "apps",
      language: "Kotlin",
      langColor: "#a855f7",
      license: "MIT",
      fork: false,
      stars: 0,
      sizeBytes: 2400803,
      sizeLabel: "2.40 MB (2.29 MB Kotlin)",
      createdAt: "2026-10-17",
      updatedAt: "2026-11-10",
      desc: {
        en: "Unofficial USOS & Platon client for Vistula University on Android 12+, Windows x64, and Linux — timetable, grades, diff-based change history, GPA calculator, and notifications.",
        pl: "Nieoficjalny klient USOS i Platon dla studentów Vistuli na Androida 12+, Windows x64 oraz Linuksa — plan zajęć, oceny, historia zmian (przed/po), kalkulator GPA i powiadomienia."
      },
      highlights: [
        "Android 12+ APK, Windows MSI/ZIP & Linux DEB (24 published releases)",
        "Today dashboard, Schedule conflict detector & .ics calendar export",
        "Platon LMS assignment/grade/message sync + before/after Changes tracker",
        "Zero-shared-secret Android Keystore security · PL / EN / UK locales"
      ],
      tree: `usoschecker-public/
├── core/              # Pure Kotlin domain logic, GPA & ScheduleConflictDetector
├── shared/            # Multiplatform shared state, USOS & Platon sync engine
├── app/               # Native Android 12+ client (Keystore, OLED dark theme)
├── desktopApp/        # Windows x64 (MSI/ZIP) & Linux (DEB) desktop application
├── docs/screenshots/  # Desktop & Android light/dark screenshots
└── tools/             # Release gate & isolated QA verification scripts`
    },
    {
      name: "JakOS",
      url: "https://github.com/a0w-svg/JakOS",
      category: "systems",
      language: "C",
      langColor: "#38bdf8",
      license: "MIT",
      fork: false,
      stars: 0,
      sizeBytes: 111614,
      sizeLabel: "111.6 KB (C & x86 ASM)",
      createdAt: "2020-03-08",
      updatedAt: "2021-08-18",
      desc: {
        en: "32-bit x86 operating system and Rose-lk kernel written in C and x86 Assembly using GRUB Legacy El-Torito bootloader.",
        pl: "32-bitowy system operacyjny x86 i jądro Rose-lk napisane w C oraz asemblerze x86 z wykorzystaniem bootloadera GRUB Legacy."
      },
      highlights: [
        "32-bit Protected Mode GDT, IDT, ISR, PIT, RTC & DMA controllers",
        "Custom VGA screen driver, PS/2 keyboard, PC speaker & serial port",
        "Paging, kmalloc heap, VFS + initrd, ATA disk driver & kernel shell"
      ],
      tree: `JakOS/
├── boot/              # Multiboot header & 32-bit x86 entry (boot.s)
├── kernel/
│   ├── cpu/           # GDT, IDT, ISR, DMA, PIT, RTC
│   ├── mm/            # Paging & kmalloc memory management
│   ├── fs/            # VFS & initrd ramdisk
│   └── shell/         # Interactive kernel shell & calculator
├── drivers/           # ATA disk, ACPI, VGA screen, keyboard, serial, speaker
└── libc/              # Freestanding stdio, string, mem, draw primitives`
    },
    {
      name: "Hana_brainfuck",
      url: "https://github.com/a0w-svg/Hana_brainfuck",
      category: "systems",
      language: "C++",
      langColor: "#f34b7d",
      license: "Apache-2.0",
      fork: false,
      stars: 0,
      sizeBytes: 3613,
      sizeLabel: "3.6 KB (C++ & Brainfuck)",
      createdAt: "2021-08-25",
      updatedAt: "2025-12-20",
      desc: {
        en: "Clean C++ Brainfuck language interpreter bundled with custom Brainfuck programs including AzamiOS.bf and hello.bf.",
        pl: "Interpreter języka Brainfuck napisany w C++ wraz z programami demonstracyjnymi AzamiOS.bf oraz hello.bf."
      },
      highlights: [
        "Object-oriented C++ interpreter core (Hana.cpp / Hana.h)",
        "Includes brainfuck_programs/AzamiOS.bf printing 'AzamiOS'",
        "Apache-2.0 licensed with Visual Studio solution"
      ],
      tree: `Hana_brainfuck/
├── Hana_brainfuck/
│   ├── Hana.h                 # Interpreter class definition
│   ├── Hana.cpp               # Tape execution & bracket matching
│   └── Hana_brainfuck.cpp     # CLI entry point
└── brainfuck_programs/
    ├── AzamiOS.bf             # Prints "AzamiOS" via loop-initialized cells
    └── hello.bf               # Prints "Hello World!"`
    },
    {
      name: "yatka",
      url: "https://github.com/a0w-svg/yatka",
      category: "games",
      language: "C",
      langColor: "#38bdf8",
      license: "GPL-2.0",
      fork: true,
      stars: 0,
      sizeBytes: 121574,
      sizeLabel: "121.6 KB (C & SDL 1.2)",
      createdAt: "2023-02-12",
      updatedAt: "2023-02-08",
      desc: {
        en: "Yet Another Tetris Klone In Action — lightweight C & SDL 1.2 implementation with Super Rotation System (SRS) and 7 randomizers for handheld consoles.",
        pl: "Yet Another Tetris Klone In Action — lekka implementacja w C i SDL 1.2 z systemem SRS oraz 7 generatorami klocków na konsole przenośne."
      },
      highlights: [
        "Marathon, Sprint (40 lines) & Ultra (3-min) modes",
        "7 randomizers: naive, NES Nintendo, 7-bag, 8-bag, 14-bag, TGM98, TGM3",
        "Custom skins & tracker/MOD/MP3/OGG music support on SDL 1.2"
      ],
      tree: `yatka/
├── Makefile           # Multi-target SDL 1.2 build configuration
├── src/               # SRS rotation rules, 7 randomizers, frame limiter
└── skins/             # Custom visual themes (Elektronika60, Gamboi, Dotkom)`
    },
    {
      name: "Snake",
      url: "https://github.com/a0w-svg/Snake",
      category: "games",
      language: "C++",
      langColor: "#f34b7d",
      license: "Source Available",
      fork: false,
      stars: 0,
      sizeBytes: 15105,
      sizeLabel: "15.1 KB (C++)",
      createdAt: "2022-12-06",
      updatedAt: "2022-12-06",
      desc: {
        en: "Object-oriented 2D Snake game written in C++ featuring custom window management, collision world, food spawner, and HUD text rendering.",
        pl: "Obiektowa gra Snake 2D napisana w C++ z własną obsługą okna, świata kolizji, generatorem jedzenia oraz renderowaniem tekstu HUD."
      },
      highlights: [
        "Modular C++ architecture: Game, World, Window, Snake, SnakeFood, TextBox",
        "Custom grid collision detection & score overlay with TrueType font"
      ],
      tree: `Snake/
└── Snake/
    ├── main.cpp
    ├── Game.cpp / Game.h
    ├── Window.cpp / Window.h
    ├── World.cpp / World.h
    ├── Snake.cpp / SnakeRect.cpp / SnakeFood.cpp
    └── TextBox.cpp / Arial.ttf`
    },
    {
      name: "Wei_Matrix_calc",
      url: "https://github.com/a0w-svg/Wei_Matrix_calc",
      category: "apps",
      language: "C#",
      langColor: "#22c55e",
      license: "MIT",
      fork: false,
      stars: 0,
      sizeBytes: 5662,
      sizeLabel: "5.7 KB (C# WPF)",
      createdAt: "2022-02-01",
      updatedAt: "2022-02-01",
      desc: {
        en: "Desktop matrix calculator application written in C# using Windows Presentation Foundation (WPF).",
        pl: "Desktopowy kalkulator macierzy napisany w języku C# z wykorzystaniem technologii WPF (Windows Presentation Foundation)."
      },
      highlights: [
        "Interactive XAML desktop interface for space-delimited matrix input",
        "Matrix arithmetic operations in C# (.NET WPF)"
      ],
      tree: `Wei_Matrix_calc/
├── Matrix_calc.sln
└── Matrix_calc/
    ├── App.xaml / App.xaml.cs
    ├── MainWindow.xaml        # WPF desktop layout
    └── MainWindow.xaml.cs     # Matrix parsing & computation logic`
    },
    {
      name: "Banking_System_Project",
      url: "https://github.com/a0w-svg/Banking_System_Project",
      category: "apps",
      language: "C++",
      langColor: "#f34b7d",
      license: "MIT",
      fork: false,
      stars: 0,
      sizeBytes: 4867,
      sizeLabel: "4.9 KB (C++)",
      createdAt: "2021-11-14",
      updatedAt: "2021-11-14",
      desc: {
        en: "File-backed banking account management system in C++ storing binary/flat-file customer records without external database dependencies.",
        pl: "System obsługi kont bankowych w C++ przechowujący rekordy bezpośrednio w plikach bez zewnętrznej bazy danych."
      },
      highlights: [
        "Account creation, deposits, withdrawals, and balance inquiries",
        "Direct C++ fstream binary record persistence"
      ],
      tree: `Banking_System_Project/
├── README.md
├── LICENSE (MIT)
└── main.cpp           # Account record CRUD & file persistence`
    },
    {
      name: "KnightCTFWriteups",
      url: "https://github.com/a0w-svg/KnightCTFWriteups",
      category: "security",
      language: "Python",
      langColor: "#eab308",
      license: "Writeups",
      fork: false,
      stars: 0,
      sizeBytes: 208,
      sizeLabel: "CTF Writeups + Python",
      createdAt: "2022-01-22",
      updatedAt: "2022-01-23",
      desc: {
        en: "Cybersecurity writeups, forensics analysis, and Python extraction scripts for KnightCTF 2022 challenges.",
        pl: "Rozwiązania zadań bezpieczeństwa (writeupy), analiza kryminalistyczna i skrypty w Pythonie dla turnieju KnightCTF 2022."
      },
      highlights: [
        "Challenges covered: FileD, Follow (extract_text.py), Hows_the_Shark, The_Lost_Flag",
        "Network packet inspection, steganography & automated flag extraction"
      ],
      tree: `KnightCTFWriteups/
├── FileD/             # FileD.md + flag proof
├── Follow/            # Follow.md + extract_text.py solver
├── Hows_the_Shark/    # Wireshark packet capture analysis
└── The_Lost_Flag/     # Steganography / image forensics writeup`
    },
    {
      name: "password-generator",
      url: "https://github.com/a0w-svg/password-generator",
      category: "security",
      language: "Python",
      langColor: "#eab308",
      license: "MIT",
      fork: false,
      stars: 0,
      sizeBytes: 813,
      sizeLabel: "813 B (Python)",
      createdAt: "2020-12-28",
      updatedAt: "2021-08-10",
      desc: {
        en: "Lightweight Python CLI utility for generating randomized passwords with configurable character sets.",
        pl: "Narzędzie w Pythonie do generowania losowych haseł o wybranej długości i zestawie znaków."
      },
      highlights: [
        "Zero external dependencies · MIT licensed",
        "Randomized character pool generation"
      ],
      tree: `password-generator/
├── LICENSE (MIT)
├── README.md
└── main.py            # Password generator script`
    },
    {
      name: "alsq",
      url: "https://github.com/a0w-svg/alsq",
      category: "security",
      language: "Python",
      langColor: "#eab308",
      license: "Source Available",
      fork: false,
      stars: 0,
      sizeBytes: 9077,
      sizeLabel: "9.1 KB (Python)",
      createdAt: "2019-10-15",
      updatedAt: "2021-08-10",
      desc: {
        en: "Asynchronous Discord bot written in Python (alsq) — earliest public repository on the a0w-svg profile.",
        pl: "Asynchroniczny bot na platformę Discord napisany w Pythonie — najstarsze publiczne repozytorium na profilu a0w-svg."
      },
      highlights: [
        "Event-driven Discord command handlers in Python",
        "Created in October 2019"
      ],
      tree: `alsq/
├── README.md
└── bot.py             # Discord event handlers & commands`
    }
  ];

  // --------------------------------------------------------------------------
  // 2. Bilingual Localization Dictionary (EN / PL)
  // --------------------------------------------------------------------------
  const I18N = {
    en: {
      skip_to_content: "Skip to main content",
      nav_repos: "Repositories (11)",
      nav_timeline: "Timeline",
      hero_status: "GitHub API Telemetry Active · Latest Release: USOS Checker v1.10.0",
      hero_location: "Poland · On GitHub since Jan 2017",
      hero_heading: 'Building from <span class="gradient-text">x86_64 Kernel Space</span> to Cross-Platform Native Apps.',
      hero_lead: 'Systems and application developer crafting operating systems from bare metal in C &amp; Assembly (<strong>AzamiOS</strong>, <strong>JakOS</strong>) and multi-platform Kotlin software for Android, Windows, and Linux (<strong>USOS Checker</strong>).',
      cta_explore_os: "Explore AzamiOS Kernel",
      cta_explore_usos: "USOS Checker v1.10.0",
      metric_public_repos: "Public Repositories",
      metric_code_volume: "Public Source Volume",
      metric_releases: "Published Releases",
      metric_syscalls: "Linux x86_64 Syscalls",
      telemetry_title: "Public Codebase Distribution (Bytes)",
      azami_eyebrow: "Flagship Systems Engineering · a0w-svg/AzamiOS",
      azami_subtitle: 'A 64-bit Long Mode operating system built from scratch featuring a Unix FHS hierarchy, unmodified Linux x86_64 ELF binary execution, a custom POSIX freestanding C library, hardware drivers, and the Azami Window Manager (<code>azwm</code>).',
      azami_arch_heading: "Kernel, Syscall ABI & Userspace Architecture",
      usos_eyebrow: "Cross-Platform Kotlin App · a0w-svg/usoschecker-public",
      usos_subtitle: 'Unofficial USOS &amp; Platon companion for Vistula University students. Native Android 12+ and Desktop (Windows MSI/ZIP &amp; Linux DEB) built with Kotlin across <code>:core</code>, <code>:shared</code>, <code>:app</code>, and <code>:desktopApp</code>.',
      usos_prototype_btn: "Interactive UI Prototype",
      usos_card_heading: "Your university day in one place — with local-first privacy.",
      usos_card_desc: "Connects directly to Vistula’s USOS API using per-user keys stored in Android Keystore (no shared Consumer Secret in releases, and your university password never enters the app).",
      usos_f1_title: "Today & Timetable",
      usos_f1_desc: "Live class countdown, day/week/agenda views, schedule conflict detector, room & lecturer lookup, and <code>.ics</code> export.",
      usos_f2_title: "Grades, GPA & Diff History",
      usos_f2_desc: "Semester grade breakdowns, interactive GPA calculator, and a before/after <strong>Changes</strong> feed tracking added or modified entries.",
      usos_f3_title: "Platon LMS Sync",
      usos_f3_desc: "Synchronizes assignments, deadlines, course progress, and messages from <code>platon.vistula.edu.pl</code> with background notifications.",
      usos_f4_title: "Zero-Shared-Secret Security",
      usos_f4_desc: "Automatic personal API key provisioning with USOSapps, hardware-backed Android Keystore encryption, and isolated Demo mode.",
      bf_title: "Hana_brainfuck — Live Tape Interpreter",
      bf_subtitle: 'Test-drive the actual Brainfuck programs from <code>a0w-svg/Hana_brainfuck/brainfuck_programs/</code> directly in your browser—including <code>AzamiOS.bf</code> and <code>hello.bf</code>.',
      bf_run: "Run Program",
      repos_eyebrow: "Open-Source Index · github.com/a0w-svg",
      repos_title: "All Public Repositories (11)",
      repos_subtitle: "Filter by domain, search by language or keyword, or inspect the repository structure and architecture notes.",
      filter_all: "All (11)",
      filter_systems: "OS & Systems (3)",
      filter_apps: "Apps & Desktop (3)",
      filter_games: "Games & C/C++ (2)",
      filter_security: "CTF & Python (3)",
      timeline_eyebrow: "Chronological Progression",
      timeline_title: "Engineering Evolution (2019 – 2026)",
      inspect_btn: "Inspect Tree",
      source_btn: "GitHub"
    },
    pl: {
      skip_to_content: "Przejdź do głównej treści",
      nav_repos: "Repozytoria (11)",
      nav_timeline: "Oś czasu",
      hero_status: "Telemetria GitHub API aktywna · Najnowsze wydanie: USOS Checker v1.10.0",
      hero_location: "Polska · Na GitHubie od stycznia 2017",
      hero_heading: 'Od <span class="gradient-text">jądra systemu x86_64</span> po wieloplatformowe aplikacje natywne.',
      hero_lead: 'Tworzę niskopoziomowe systemy operacyjne w C i asemblerze (<strong>AzamiOS</strong>, <strong>JakOS</strong>) oraz wieloplatformowe aplikacje w Kotlinie na Androida, Windows i Linuksa (<strong>USOS Checker</strong>).',
      cta_explore_os: "Poznaj jądro AzamiOS",
      cta_explore_usos: "USOS Checker v1.10.0",
      metric_public_repos: "Publiczne repozytoria",
      metric_code_volume: "Rozmiar kodu źródłowego",
      metric_releases: "Opublikowane wydania",
      metric_syscalls: "Syscalle Linuksa x86_64",
      telemetry_title: "Rozkład języków w publicznych repozytoriach",
      azami_eyebrow: "Flagowy projekt systemowy · a0w-svg/AzamiOS",
      azami_subtitle: '64-bitowy system operacyjny x86_64 napisany od podstaw: hierarchia FHS, uruchamianie niezmodyfikowanych binariów Linuksa ELF64, własna biblioteka POSIX libc, sterowniki sprzętowe i środowisko graficzne <code>azwm</code>.',
      azami_arch_heading: "Architektura jądra, ABI wywołań systemowych i przestrzeni użytkownika",
      usos_eyebrow: "Wieloplatformowa aplikacja Kotlin · a0w-svg/usoschecker-public",
      usos_subtitle: 'Nieoficjalny klient USOS i Platon dla studentów Uczelni Vistula. Natywna aplikacja na Androida 12+ oraz Desktop (Windows MSI/ZIP i Linux DEB) zbudowana w oparciu o moduły <code>:core</code>, <code>:shared</code>, <code>:app</code> i <code>:desktopApp</code>.',
      usos_prototype_btn: "Interaktywny prototyp UI",
      usos_card_heading: "Twój dzień na uczelni w jednym miejscu — z lokalną prywatnością.",
      usos_card_desc: "Łączy się bezpośrednio z USOS za pomocą osobistego klucza API szyfrowanego w Android Keystore (wydania nie zawierają wspólnego Consumer Secret, a hasło uczelniane nigdy nie trafia do aplikacji).",
      usos_f1_title: "Dzisiaj i Plan zajęć",
      usos_f1_desc: "Odliczanie do zajęć, widoki dnia/tygodnia/agendy, wykrywanie kolizji w planie, wyszukiwarka sal i eksport <code>.ics</code>.",
      usos_f2_title: "Oceny, GPA i Historia zmian",
      usos_f2_desc: "Podsumowania semestrów, kalkulator średniej GPA oraz ekran <strong>Zmiany</strong> z wartościami przed i po aktualizacji.",
      usos_f3_title: "Integracja z Platonem",
      usos_f3_desc: "Synchronizacja zadań, terminów, postępu kursów i wiadomości z <code>platon.vistula.edu.pl</code> z powiadomieniami w tle.",
      usos_f4_title: "Bezpieczeństwo bez wspólnego sekretu",
      usos_f4_desc: "Automatyczna rejestracja własnego klucza w USOSapps, szyfrowany magazyn Android Keystore i odizolowany tryb Demo.",
      bf_title: "Hana_brainfuck — Interaktywny interpreter w przeglądarce",
      bf_subtitle: 'Uruchom oryginalne programy z repozytorium <code>a0w-svg/Hana_brainfuck/brainfuck_programs/</code> bezpośrednio na taśmie pamięci — w tym <code>AzamiOS.bf</code> oraz <code>hello.bf</code>.',
      bf_run: "Uruchom program",
      repos_eyebrow: "Indeks Open-Source · github.com/a0w-svg",
      repos_title: "Wszystkie publiczne repozytoria (11)",
      repos_subtitle: "Filtruj według kategorii, wyszukuj po języku lub sprawdź drzewo plików i architekturę każdego projektu.",
      filter_all: "Wszystkie (11)",
      filter_systems: "Systemy i OS (3)",
      filter_apps: "Aplikacje (3)",
      filter_games: "Gry C/C++ (2)",
      filter_security: "CTF i Python (3)",
      timeline_eyebrow: "Rozwój projektów",
      timeline_title: "Ewolucja inżynierska (2019 – 2026)",
      inspect_btn: "Struktura",
      source_btn: "GitHub"
    }
  };

  let currentLang = localStorage.getItem("a0w_lang") || "en";
  let currentFilter = "all";
  let currentSearch = "";
  let currentSort = "updated";

  // --------------------------------------------------------------------------
  // 3. Theme & Language Management
  // --------------------------------------------------------------------------
  const htmlEl = document.documentElement;
  const themeBtn = document.getElementById("theme-toggle");
  const iconSun = document.getElementById("icon-sun");
  const iconMoon = document.getElementById("icon-moon");
  const langBtn = document.getElementById("lang-toggle");
  const langLabel = document.getElementById("lang-label");

  function applyTheme(theme) {
    htmlEl.setAttribute("data-theme", theme);
    localStorage.setItem("a0w_theme", theme);
    if (theme === "light") {
      iconSun.setAttribute("hidden", "");
      iconMoon.removeAttribute("hidden");
    } else {
      iconMoon.setAttribute("hidden", "");
      iconSun.removeAttribute("hidden");
    }
  }

  const savedTheme = localStorage.getItem("a0w_theme") || "dark";
  applyTheme(savedTheme);

  themeBtn.addEventListener("click", () => {
    const next = htmlEl.getAttribute("data-theme") === "dark" ? "light" : "dark";
    applyTheme(next);
  });

  function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem("a0w_lang", lang);
    htmlEl.setAttribute("lang", lang);
    langLabel.textContent = lang.toUpperCase();

    const dict = I18N[lang] || I18N.en;
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (dict[key]) {
        el.innerHTML = dict[key];
      }
    });
    renderRepositories();
  }

  langBtn.addEventListener("click", () => {
    applyLanguage(currentLang === "en" ? "pl" : "en");
  });

  // --------------------------------------------------------------------------
  // 4. AzamiOS Subsystem Tabs & Interactive Shell Simulator
  // --------------------------------------------------------------------------
  const tabButtons = document.querySelectorAll(".tab-btn");
  const tabPanels = document.querySelectorAll(".subsystem-panel");

  tabButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const targetId = btn.getAttribute("aria-controls");
      tabButtons.forEach((b) => b.setAttribute("aria-selected", String(b === btn)));
      tabPanels.forEach((panel) => {
        if (panel.id === targetId) {
          panel.removeAttribute("hidden");
        } else {
          panel.setAttribute("hidden", "");
        }
      });
    });
  });

  const terminalOutput = document.getElementById("azami-terminal-output");
  const terminalForm = document.getElementById("azami-terminal-form");
  const terminalInput = document.getElementById("azami-cmd-input");

  const AZAMI_COMMANDS = {
    "uname -a": `AzamiOS azamios 64-bit x86_64 Long-Mode #1 SMP PREEMPT_DYNAMIC Limine-UEFI/BIOS x86_64 AzamiOS/Linux-ABI`,
    "cat /proc/cpuinfo": `processor       : 0
vendor_id       : AuthenticAMD / GenuineIntel (x86_64)
model name      : AzamiOS 64-Bit Long Mode Virtual CPU
flags           : fpu vme de pse tsc msr pae mce cx8 apic sep mtrr pge mca cmov pat pse36 clflush mmx fxsr sse sse2 syscall nx rdtscp lm constant_tsc rep_good nopl xtopology nonstop_tsc cpuid pni pclmulqdq ssse3 cx16 sse4_1 sse4_2 x2apic popcnt tsc_deadline_timer aes xsave avx rdrand hypervisor lahf_lm abm 3dnowprefetch fsgsbase tsc_adjust bmi1 avx2 smep bmi2 erms invpcid rdseed adx smap clflushopt xsaveopt xsavec xsaves umip pku waitpkg
azami_hwaccel   : smep smap umip pku nx fsgsbase pcid xsavec sse42_crc32c popcnt_pmm tsc_vdso
azami_pmu       : architectural_pmu (perf_event_open enabled)`,
    "ls -f /": `bin/   dev/   etc/   home/  mnt/   proc/  sbin/  sys/   tmp/   usr/   var/`,
    "ls -la /": `drwxr-xr-x  12 root root  4096 Oct 12 18:15 .
drwxr-xr-x   2 root root  4096 Oct 12 18:15 bin      (sh -> bash 5.2, ls, cat, grep, awk, sed, tar, find...)
drwxr-xr-x   2 root root  4096 Oct 12 18:15 sbin     (init, dhcpcd, ifconfig, ping, reboot, shutdown)
drwxr-xr-x   5 root root  4096 Oct 12 18:15 usr      (bin/azwm, TinyCC, BusyBox 401 applets, X11, libc)
drwxr-xr-x   3 root root  4096 Oct 12 18:15 etc      (passwd, group, fstab, profile, os-release)
drwxr-xr-x   2 root root     0 Oct 12 18:15 dev      (hda, sda, vda, fd0, tty, null, random)
dr-xr-xr-x   2 root root     0 Oct 12 18:15 proc     (cpuinfo, cmdline, meminfo, self/)
dr-xr-xr-x   2 root root     0 Oct 12 18:15 sys      (kernel hardware & driver attributes)
drwxr-xr-x   3 root root  4096 Oct 12 18:15 home     (home/azami/)`,
    "pkg list": `Installed & Ported Packages (tools/linux/ports):
  [core]      bash-5.2          GNU Bash system shell (/bin/sh)
  [core]      busybox-1.36.1    401 static applets linked against musl 1.2.5
  [devel]     tcc + gmake       On-device Tiny C Compiler & GNU Make toolchain
  [lang]      lua / micropython Scripting runtimes
  [data]      sqlite3 / jq      Embedded SQL database & JSON processor
  [net]       curl / httpd / nc HTTP/HTTPS client, web server & netcat
  [editor]    nano / less / tree Console editors & file inspection
  [gui]       azwm + x11-apps   Azami Window Manager, terminal, sysmon, xclock, xeyes`,
    "make linux-test": `[vm] Booting headless QEMU with Linux-ABI conformance probe as PID 1...
[abi] Checking x86_64 syscall entry, ELF64 auxv, TLS (FSGSBASE), mmap/munmap... PASS
[abi] Checking epoll_create1/epoll_ctl/epoll_wait, pipe2, dup3, openat2...      PASS
[abi] Checking signals (rt_sigaction, SIGSTOP/SIGCONT, wait4 WUNTRACED)...     PASS
[abi] Checking futex / futex2, ptrace(TRACEME/PEEK/POKE), clock_gettime vDSO... PASS
Result: 82 / 82 Linux x86_64 ABI checks passed (0 failures).`,
    "lsmod": `Loaded Kernel Drivers (HAL / PCI / VirtIO):
  storage   : ata_ide, floppy_dma, virtio_blk, virtio_9p
  network   : e1000, e100, rtl8139, rtl8169_gbe, pcnet, vmxnet3, virtio_net
  usb_input : xhci_hcd (USB 3.x), usb_hid (kbd/mouse/tablet), ps2, virtio_input
  display   : virtio_gpu, bga_display, fb_drm
  audio     : intel_hda, ac97, es1370, mpu401_midi, pcspkr
  fs        : ext2, fat32, procfs, sysfs, devfs, devpts, pipefs, tarfs`,
    "help": `Available commands in this interactive AzamiOS preview:
  uname -a          Print kernel & architecture version
  cat /proc/cpuinfo Inspect probed CPUID extensions, hwaccel & PMU status
  ls -la /          Inspect Unix Filesystem Hierarchy Standard (FHS) root
  pkg list          List ported software packages (Bash 5.2, TinyCC, BusyBox, etc.)
  make linux-test   Run the 82-check musl Linux x86_64 syscall ABI probe
  lsmod             List storage, network, USB 3.x, audio & VFS kernel drivers
  clear             Clear terminal output`
  };

  function runTerminalCommand(rawCmd) {
    const cmd = rawCmd.trim();
    if (!cmd) return;
    if (cmd.toLowerCase() === "clear") {
      terminalOutput.innerHTML = "";
      return;
    }

    const key = cmd.toLowerCase();
    let response = AZAMI_COMMANDS[key];
    if (!response) {
      if (key === "ls -f /" || key === "ls /" || key === "ls") {
        response = AZAMI_COMMANDS["ls -la /"];
      } else if (key === "whoami") {
        response = "root (uid=0, gid=0) on AzamiOS x86_64";
      } else {
        response = `bash: ${cmd}: command not recognized in preview. Type 'help' to see available commands.`;
      }
    }

    const entry = document.createElement("div");
    const echo = document.createElement("div");
    echo.className = "cmd-echo";
    echo.textContent = `root@azamios:~# ${cmd}`;

    const res = document.createElement("span");
    res.className = "cmd-res";
    res.textContent = response;

    entry.appendChild(echo);
    entry.appendChild(res);
    terminalOutput.appendChild(entry);
    terminalOutput.scrollTop = terminalOutput.scrollHeight;
  }

  // Initial terminal welcome log
  runTerminalCommand("uname -a");
  runTerminalCommand("make linux-test");

  document.querySelectorAll(".preset-chip").forEach((chip) => {
    chip.addEventListener("click", () => {
      const cmd = chip.getAttribute("data-cmd");
      runTerminalCommand(cmd);
    });
  });

  terminalForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const val = terminalInput.value;
    terminalInput.value = "";
    runTerminalCommand(val);
  });

  // --------------------------------------------------------------------------
  // 5. USOS Checker Screenshot Stage Switcher
  // --------------------------------------------------------------------------
  let usosPlatform = "desktop";
  let usosTheme = "dark";

  const usosImg = document.getElementById("usos-preview-img");
  const usosCaption = document.getElementById("usos-preview-caption");
  const usosThemeGroup = document.getElementById("usos-theme-group");

  const USOS_SCREENS = {
    "desktop-dark": {
      src: "assets/screenshots/desktop-dark.png",
      alt: "USOS Checker Desktop in dark theme showing demo data",
      caption: "Desktop (Windows / Linux) — Dark Theme · Today view with live schedule & recent changes"
    },
    "desktop-light": {
      src: "assets/screenshots/desktop-light.png",
      alt: "USOS Checker Desktop in light theme showing demo data",
      caption: "Desktop (Windows / Linux) — Light Theme · Neutral cards & cyan accent"
    },
    "android-dark": {
      src: "assets/screenshots/android-dark.png",
      alt: "USOS Checker Android in OLED dark theme",
      caption: "Android 12+ — OLED Dark Theme · Today view, class countdown & bottom navigation"
    },
    "android-light": {
      src: "assets/screenshots/android-light.png",
      alt: "USOS Checker Android in light theme",
      caption: "Android 12+ — Light Theme · Adaptive Material interface"
    },
    "onboarding-dark": {
      src: "assets/screenshots/welcome.png",
      alt: "USOS Checker first-run API setup screen",
      caption: "First-Run Onboarding — Automatic personal USOSapps API key provisioning"
    },
    "onboarding-light": {
      src: "assets/screenshots/welcome-keys.png",
      alt: "USOS Checker manual Consumer Key and Secret guide",
      caption: "API Key Guide — Instructions for Consumer Key & Consumer Secret stored in Android Keystore"
    }
  };

  function updateUsosPreview() {
    const key = `${usosPlatform}-${usosTheme}`;
    const item = USOS_SCREENS[key] || USOS_SCREENS["desktop-dark"];
    usosImg.src = item.src;
    usosImg.alt = item.alt;
    usosCaption.textContent = item.caption;

    const themeBtns = usosThemeGroup.querySelectorAll(".seg-btn");
    if (usosPlatform === "onboarding") {
      themeBtns[0].textContent = "Step 1: Auto Key";
      themeBtns[1].textContent = "Step 2: Key Guide";
    } else {
      themeBtns[0].textContent = "Dark (OLED)";
      themeBtns[1].textContent = "Light";
    }
  }

  document.querySelectorAll("[data-usos-platform]").forEach((btn) => {
    btn.addEventListener("click", () => {
      usosPlatform = btn.getAttribute("data-usos-platform");
      document.querySelectorAll("[data-usos-platform]").forEach((b) => {
        b.setAttribute("aria-pressed", String(b === btn));
      });
      updateUsosPreview();
    });
  });

  document.querySelectorAll("[data-usos-theme]").forEach((btn) => {
    btn.addEventListener("click", () => {
      usosTheme = btn.getAttribute("data-usos-theme");
      document.querySelectorAll("[data-usos-theme]").forEach((b) => {
        b.setAttribute("aria-pressed", String(b === btn));
      });
      updateUsosPreview();
    });
  });

  // --------------------------------------------------------------------------
  // 6. Hana_brainfuck Live Tape Interpreter (AzamiOS.bf & hello.bf)
  // --------------------------------------------------------------------------
  const BF_PROGRAMS = {
    azami: `+++++ +++++ //initialize counter (cell #0) to 10
[
    > ++++++ // add 6 to cell #1 
    > +++++ +++++++ // add 12 to cell #2 
    > +++++ ++++ // add 9 to cell #3 
    > +++++ +++++ // add 10 to cell #4 
    > +++++ +++++ // add 10 to cell #5 
    > +++++ ++ // add 7 to cell #6 
    > +++++ +++ // add 8 to cell #7 
    <<<<<<<- // decrement counter (cell #0)
]

> +++++. // Print A (65)
> ++.  // print z (122)
> +++++++. // print a (97)
> +++++ ++++. // print m (109)
> +++++. // print i (105)
> +++++ ++++. // print O (79)
> +++. // print S (83)`,
    hello: `>++++++++[<+++++++++>-]<.>>+>+>++>[-]+<[>[->+<<++++>]<<]>.+++++++..+++.>>+++++++.<<<[[-]<[-]>]<+++++++++++++++.>>.+++.------.--------.>>+.>++++.`
  };

  const bfCodeEl = document.getElementById("bf-code");
  const bfTapeEl = document.getElementById("bf-tape");
  const bfStdoutEl = document.getElementById("bf-stdout");
  const bfStatsEl = document.getElementById("bf-stats");

  function renderTape(tape, ptr) {
    bfTapeEl.innerHTML = "";
    for (let i = 0; i < 8; i++) {
      const val = tape[i] || 0;
      const cell = document.createElement("div");
      cell.className = "tape-cell" + (i === ptr ? " active" : "");
      const printable = val >= 32 && val <= 126 ? `'${String.fromCharCode(val)}'` : "·";
      cell.innerHTML = `
        <div class="cell-idx">CELL #${i}</div>
        <div class="cell-val">${val}</div>
        <div class="cell-char">${printable}</div>
      `;
      bfTapeEl.appendChild(cell);
    }
  }

  function executeBrainfuck(source) {
    // Strip single-line comments so // comments in AzamiOS.bf don't interfere
    const clean = source.replace(/\/\/.*$/gm, "");
    const tape = new Uint8Array(256);
    let ptr = 0;
    let ip = 0;
    let ops = 0;
    let out = "";
    const maxOps = 100000;

    // Precompute bracket jumps
    const jumps = {};
    const stack = [];
    for (let i = 0; i < clean.length; i++) {
      if (clean[i] === "[") {
        stack.push(i);
      } else if (clean[i] === "]") {
        const open = stack.pop();
        if (open !== undefined) {
          jumps[open] = i;
          jumps[i] = open;
        }
      }
    }

    while (ip < clean.length && ops < maxOps) {
      const ch = clean[ip];
      switch (ch) {
        case ">":
          ptr = (ptr + 1) & 255;
          ops++;
          break;
        case "<":
          ptr = (ptr - 1) & 255;
          ops++;
          break;
        case "+":
          tape[ptr] = (tape[ptr] + 1) & 255;
          ops++;
          break;
        case "-":
          tape[ptr] = (tape[ptr] - 1) & 255;
          ops++;
          break;
        case ".":
          out += String.fromCharCode(tape[ptr]);
          ops++;
          break;
        case "[":
          if (tape[ptr] === 0 && jumps[ip] !== undefined) {
            ip = jumps[ip];
          }
          ops++;
          break;
        case "]":
          if (tape[ptr] !== 0 && jumps[ip] !== undefined) {
            ip = jumps[ip];
          }
          ops++;
          break;
      }
      ip++;
    }

    renderTape(tape, Math.min(ptr, 7));
    bfStdoutEl.textContent = out || "(empty stdout)";
    bfStatsEl.textContent = `${ops} ops executed · pointer at cell #${ptr}`;
  }

  bfCodeEl.value = BF_PROGRAMS.azami;
  executeBrainfuck(BF_PROGRAMS.azami);

  document.getElementById("bf-run-btn").addEventListener("click", () => {
    executeBrainfuck(bfCodeEl.value);
  });

  document.getElementById("bf-load-azami").addEventListener("click", () => {
    bfCodeEl.value = BF_PROGRAMS.azami;
    executeBrainfuck(BF_PROGRAMS.azami);
  });

  document.getElementById("bf-load-hello").addEventListener("click", () => {
    bfCodeEl.value = BF_PROGRAMS.hello;
    executeBrainfuck(BF_PROGRAMS.hello);
  });

  document.getElementById("bf-reset-btn").addEventListener("click", () => {
    renderTape(new Uint8Array(8), 0);
    bfStdoutEl.textContent = "";
    bfStatsEl.textContent = "Tape reset (0 ops)";
  });

  // --------------------------------------------------------------------------
  // 7. Repository Explorer Rendering, Filtering, Sorting & Modal
  // --------------------------------------------------------------------------
  const repoGrid = document.getElementById("repo-grid");
  const searchInput = document.getElementById("repo-search");
  const sortSelect = document.getElementById("repo-sort");
  const modal = document.getElementById("repo-modal");
  const modalTitle = document.getElementById("modal-repo-title");
  const modalLang = document.getElementById("modal-repo-lang");
  const modalDesc = document.getElementById("modal-repo-desc");
  const modalTree = document.getElementById("modal-repo-tree");
  const modalLink = document.getElementById("modal-repo-link");
  const modalCloseBtn = document.getElementById("modal-close-btn");

  function openRepoModal(repo) {
    modalTitle.textContent = repo.name;
    modalLang.textContent = `${repo.language} · ${repo.license} · ${repo.sizeLabel}`;
    modalDesc.textContent = repo.desc[currentLang] || repo.desc.en;
    modalTree.textContent = repo.tree;
    modalLink.href = repo.url;
    modal.removeAttribute("hidden");
    modalCloseBtn.focus();
  }

  function closeRepoModal() {
    modal.setAttribute("hidden", "");
  }

  modalCloseBtn.addEventListener("click", closeRepoModal);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeRepoModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modal.hasAttribute("hidden")) {
      closeRepoModal();
    }
  });

  function renderRepositories() {
    const dict = I18N[currentLang] || I18N.en;
    const q = currentSearch.trim().toLowerCase();

    const filtered = PUBLIC_REPOS.filter((r) => {
      if (currentFilter !== "all" && r.category !== currentFilter) return false;
      if (!q) return true;
      const haystack = `${r.name} ${r.language} ${r.license} ${r.desc.en} ${r.desc.pl} ${r.highlights.join(" ")}`.toLowerCase();
      return haystack.includes(q);
    });

    filtered.sort((a, b) => {
      if (currentSort === "size") return b.sizeBytes - a.sizeBytes;
      if (currentSort === "name") return a.name.localeCompare(b.name);
      return b.updatedAt.localeCompare(a.updatedAt);
    });

    repoGrid.innerHTML = "";

    filtered.forEach((repo) => {
      const card = document.createElement("article");
      card.className = "repo-card";

      const badgeText = repo.fork
        ? "Fork · GPL-2.0"
        : repo.releaseTag
        ? `Release ${repo.releaseTag}`
        : repo.license;

      const highlightsHtml = repo.highlights
        .map((h) => `<li>${h}</li>`)
        .join("");

      card.innerHTML = `
        <div>
          <div class="repo-card-header">
            <div class="repo-name-wrap">
              <a href="${repo.url}" target="_blank" rel="noopener noreferrer" class="repo-name">${repo.name}</a>
              <span class="repo-kind-badge">${badgeText}</span>
            </div>
            <span class="mono" style="font-size: 0.75rem; color: var(--text-muted);">${repo.updatedAt}</span>
          </div>

          <p class="repo-desc">${repo.desc[currentLang] || repo.desc.en}</p>

          <ul class="repo-highlights">
            ${highlightsHtml}
          </ul>
        </div>

        <div class="repo-footer">
          <div class="repo-meta-left">
            <span class="lang-pill">
              <span class="lang-dot" style="background: ${repo.langColor};"></span>
              <span>${repo.language}</span>
            </span>
            <span>${repo.sizeLabel}</span>
            ${repo.stars > 0 ? `<span>★ ${repo.stars}</span>` : ""}
          </div>

          <div class="repo-actions">
            <button type="button" class="repo-action-link" data-inspect-repo="${repo.name}">
              <span>${dict.inspect_btn}</span>
            </button>
            <a href="${repo.url}" target="_blank" rel="noopener noreferrer" class="repo-action-link">
              <span>${dict.source_btn} ↗</span>
            </a>
          </div>
        </div>
      `;

      const inspectBtn = card.querySelector("[data-inspect-repo]");
      inspectBtn.addEventListener("click", () => openRepoModal(repo));

      repoGrid.appendChild(card);
    });
  }

  document.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      currentFilter = btn.getAttribute("data-filter");
      document.querySelectorAll(".filter-btn").forEach((b) => {
        b.setAttribute("aria-pressed", String(b === btn));
      });
      renderRepositories();
    });
  });

  searchInput.addEventListener("input", (e) => {
    currentSearch = e.target.value;
    renderRepositories();
  });

  sortSelect.addEventListener("change", (e) => {
    currentSort = e.target.value;
    renderRepositories();
  });

  // Initial render
  applyLanguage(currentLang);

  // --------------------------------------------------------------------------
  // 8. Live GitHub API Hydration (Updates Stars, Pushes & Releases Live)
  // --------------------------------------------------------------------------
  async function syncWithGitHubApi() {
    try {
      const res = await fetch("https://api.github.com/users/a0w-svg/repos?per_page=100");
      if (!res.ok) return;
      const liveRepos = await res.json();

      let updatedCount = 0;
      liveRepos.forEach((live) => {
        const match = PUBLIC_REPOS.find((r) => r.name.toLowerCase() === live.name.toLowerCase());
        if (match) {
          match.stars = live.stargazers_count || match.stars;
          if (live.pushed_at) {
            match.updatedAt = live.pushed_at.slice(0, 10);
          }
          updatedCount++;
        }
      });

      if (updatedCount > 0) {
        renderRepositories();
        const footerStatus = document.getElementById("footer-api-status");
        if (footerStatus) {
          footerStatus.textContent = `Live GitHub API synced (${liveRepos.length} public repos verified)`;
        }
      }

      // Check latest release of usoschecker-public
      const relRes = await fetch("https://api.github.com/repos/a0w-svg/usoschecker-public/releases/latest");
      if (relRes.ok) {
        const rel = await relRes.json();
        if (rel && rel.tag_name) {
          const usos = PUBLIC_REPOS.find((r) => r.name === "usoschecker-public");
          if (usos) usos.releaseTag = rel.tag_name;
          const btnText = document.getElementById("usos-release-btn-text");
          if (btnText) btnText.textContent = `Download Latest (${rel.tag_name})`;
          renderRepositories();
        }
      }
    } catch (_) {
      // Offline or rate-limited: preloaded repository telemetry remains intact
    }
  }

  syncWithGitHubApi();
})();

