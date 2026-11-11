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
      cta_projects: "See projects",
      cta_github: "GitHub profile ↗",
      status_loading: "Checking GitHub…",
      status_live: "Live from GitHub · last push {date}",
      status_offline: "GitHub unavailable · showing saved data",
      home_projects_eyebrow: "Selected work",
      home_projects_title: "Projects",
      about_eyebrow: "About",
      about_title: "Systems and application developer from Poland",
      about_lead: "I write operating systems from bare metal in C and Assembly, and cross-platform apps in Kotlin. I have been publishing my work on GitHub since 2017 — from small Python tools to a 64-bit OS.",
      contact_eyebrow: "Contact",
      contact_title: "Get in touch",
      contact_lead: "The best way to reach me is GitHub. For questions about a specific project, open an issue in its repository.",
      contact_gh_title: "GitHub profile",
      contact_gh_desc: "All public repositories, releases and activity.",
      contact_azami_title: "AzamiOS — issues",
      contact_azami_desc: "Bug reports and questions about the kernel, drivers and userspace.",
      contact_usos_title: "USOS Checker — issues",
      contact_usos_desc: "Bug reports and feature ideas for the Android and desktop app.",
      title_home: "a0w-svg (a0aRd) — Systems &amp; Software Engineering",
      telemetry_total: "~11.72 MB total",
      footer_prototype: "USOS Prototype",
      azami_title: "AzamiOS — 64-Bit x86_64 Operating System",
      azami_predecessor: "Predecessor: JakOS (x86-32)",
      tab_kernel: "Kernel &amp; Linux ABI",
      tab_drivers: "Drivers &amp; Net",
      tab_libc: "Custom libc &amp; Ports",
      tab_gui: "azwm GUI &amp; VFS",
      k_h: "Preemptive x86_64 Kernel &amp; Unmodified Linux Binaries",
      k_p: "Implements the System V AMD64 Linux <code>syscall</code> ABI so static binaries compiled by an ordinary Linux toolchain execute directly without shims or source patches.",
      k_1: "<strong>Memory &amp; Paging:</strong> Physical Memory Manager (PMM), slab <code>kmalloc</code>, 4-level PML4 paging with <code>mmap</code>/<code>munmap</code> and POPCNT bitmap acceleration.",
      k_2: "<strong>Scheduling &amp; Signals:</strong> Preemptive per-CPU run queues, ELF64 loader, POSIX threads, job control (<code>SIGSTOP</code>/<code>SIGTSTP</code>/<code>SIGCONT</code>, <code>wait4</code>).",
      k_3: "<strong>Debugging &amp; PMU:</strong> Full <code>ptrace(2)</code> (<code>TRACEME</code>, <code>ATTACH</code>, <code>SEIZE</code>, <code>int3</code>, single-step, COW-safe <code>PEEK</code>/<code>POKE</code>) + <code>perf_event_open(2)</code> hardware PMU counters.",
      k_4: "<strong> ~20 ns vDSO Timekeeping:</strong> KVM pvclock / VMware TSC clocksource with sub-tick one-shot TSC-deadline interrupts for 1 ms precision <code>nanosleep</code>.",
      k_5: "<strong>CPU Security &amp; Extensions:</strong> SMEP, SMAP, UMIP, PKU, NX, FSGSBASE, PCID, XSAVE/XSAVEC, RDRAND/RDSEED, SSE4.2 CRC-32C dentry hashing, and exception-fixup boot probing.",
      d_h: "Hardware Abstraction Layer (HAL), Storage, USB 3.x &amp; Network Stack",
      d_p: "Modular PCI bus enumeration with MSI/INTx routing, I/O APIC + LAPIC SMP interrupts, and paravirtual + physical device drivers.",
      d_1: "<strong>Networking Cards:</strong> Intel <code>e1000</code> / <code>e100</code>, Realtek <code>RTL8139</code> / <code>RTL8169</code> (Gigabit), AMD PCNet, VMware <code>VMXNET3</code>, and <code>VirtIO-Net</code>.",
      d_2: "<strong>TCP/IP Stack:</strong> Full Ethernet, ARP, IPv4, ICMPv4, UDP, TCP, BSD sockets, <code>dhcpcd</code>, <code>ntpd</code>, <code>httpd</code>, <code>curl</code>, and <code>nslookup</code>.",
      d_3: "<strong>USB &amp; Input:</strong> <code>xHCI</code> (USB 3.x) with BIOS handoff, Intel PCH port routing, hot-plug, USB HID keyboards/mice/tablets, PS/2, and <code>virtio-input</code>.",
      d_4: "<strong>Audio &amp; Video:</strong> Intel HDA, AC'97, ES1370, MPU-401 MIDI, PC Speaker; VirtIO GPU, BGA Display, and Framebuffer DRM.",
      d_5: "<strong>Storage:</strong> ATA IDE, Floppy DMA/FDC, VirtIO Block, and VirtIO 9P host filesystem sharing.",
      l_h: "Freestanding POSIX C Library (<code>userland/libc/</code>) &amp; Ported Packages",
      l_p: "Zero kernel leakage into userspace, licensed under BSD-3-Clause alongside a rich software ports tree installable via <code>pkg</code>.",
      l_1: "<strong>Core POSIX &amp; Linux APIs:</strong> <code>stdio.h</code>, <code>stdlib.h</code>, <code>pthread.h</code>, <code>sys/epoll.h</code>, <code>linux/futex.h</code> (including <code>futex2</code>), <code>sys/statx.h</code>, <code>sys/sendfile.h</code>, <code>spawn.h</code>, <code>mqueue.h</code>, <code>regex.h</code>, <code>ftw.h</code>.",
      l_2: "<strong>System Shell &amp; Toolchain:</strong> GNU Bash 5.2 as <code>/bin/sh</code> (plus native <code>azami-sh</code>), TinyCC (<code>tcc</code>) &amp; GNU Make on-device compiler toolchain.",
      l_3: "<strong>Ported Ecosystem:</strong> <code>musl 1.2.5</code> + <code>BusyBox 1.36.1</code> (401 applets), Lua, MicroPython, SQLite, <code>jq</code>, <code>gawk</code>, <code>curl</code>, <code>nano</code>, <code>less</code>, <code>tree</code>.",
      g_h: "Azami Window Manager (<code>azwm</code>), X11 Support &amp; Virtual Filesystem",
      g_p: "Complete desktop environment over a double-buffered alpha-blending software compositor and Unix FHS root tree.",
      g_1: "<strong>Desktop Apps:</strong> <code>azwm</code> window manager, <code>terminal</code>, <code>texteditor</code>, <code>filemanager</code>, <code>sysmon</code>, <code>calculator</code>, <code>paint</code>, and games (<code>minesweeper</code>, <code>2048</code>, <code>snake</code>).",
      g_2: "<strong>X11 Client Protocol:</strong> Runs classic X11 clients including <code>xclock</code>, <code>xcalc</code>, <code>xeyes</code>, and <code>xcursor</code>.",
      g_3: "<strong>VFS &amp; Filesystems:</strong> <code>ext2</code>, <code>FAT32</code>, <code>ProcFS</code>, <code>SysFS</code>, <code>DevFS</code>, <code>Devpts</code>, <code>PipeFS</code>, and <code>TarFS</code> initrd with POSIX ACLs (<code>getfacl</code>/<code>setfacl</code>).",
      usos_title: "USOS Checker — Android &amp; Desktop Client",
      usos_repo_btn: "GitHub Repo",
      usos_platform_desktop: "Desktop",
      usos_platform_setup: "API Setup",
      bf_eyebrow: "Interactive Code Lab · a0w-svg/Hana_brainfuck",
      bf_source_btn: "View C++ Source (a0w-svg/Hana_brainfuck)",
      bf_load_azami: "Load brainfuck_programs/AzamiOS.bf",
      bf_load_hello: "Load brainfuck_programs/hello.bf",
      bf_reset: "Reset Tape",
      bf_source_label: "SOURCE: brainfuck_programs/AzamiOS.bf",
      bf_tape_label: "MEMORY TAPE (CELLS #0 – #7)",
      bf_stdout_label: "STDOUT OUTPUT",
      sort_updated: "Sort: Recently Updated",
      sort_size: "Sort: Codebase Size",
      sort_name: "Sort: Alphabetical",
      modal_tree_label: "REPOSITORY TREE &amp; SUBSYSTEMS",
      modal_open: "Open on GitHub",
      tl1_title: "Python Automation &amp; First x86 Kernel",
      tl1_desc: "Built <code>alsq</code> Discord bot and <code>password-generator</code> in Python, then began low-level OS development with <strong>JakOS</strong> (Rose-lk 32-bit x86 kernel in C &amp; Assembly).",
      tl2_title: "C++, C# WPF, CTF Writeups &amp; AzamiOS Genesis",
      tl2_desc: "Created <strong>Banking_System_Project</strong>, <strong>Wei_Matrix_calc</strong> (C# WPF), <strong>KnightCTFWriteups</strong> (2022), <strong>Snake</strong> (C++), and started the <strong>AzamiOS</strong> &amp; <strong>Hana_brainfuck</strong> repositories.",
      tl3_title: "Embedded SDL Games &amp; Language Interpreters",
      tl3_desc: "Explored retro handheld game architecture with <strong>yatka</strong> (C &amp; SDL 1.2) and refined <strong>Hana_brainfuck</strong> with custom Brainfuck programs (<code>AzamiOS.bf</code>).",
      tl4_title: "64-Bit AzamiOS &amp; USOS Checker v1.10.0",
      tl4_desc: "Expanded <strong>AzamiOS</strong> into an 8.4+ MB 64-bit x86_64 OS running unmodified Linux binaries &amp; <code>azwm</code> GUI, and shipped 24 releases of <strong>USOS Checker</strong> for Android, Windows &amp; Linux.",
      ph_search: "Search repos, C, Kotlin, x86...",
      usos_download: "Download latest",
      usos_theme_dark: "Dark (OLED)",
      usos_theme_light: "Light",
      usos_step1: "Step 1: Auto Key",
      usos_step2: "Step 2: Key Guide",
      bf_stats: "{ops} ops executed · pointer at cell #{ptr}",
      bf_reset_stats: "Tape reset (0 ops)",
      bf_empty: "(empty stdout)",
      hero_location: "Poland · On GitHub since Jan 2017",
      hero_heading: 'Building from <span class="gradient-text">x86_64 Kernel Space</span> to Cross-Platform Native Apps.',
      hero_lead: 'Systems and application developer crafting operating systems from bare metal in C &amp; Assembly (<strong>AzamiOS</strong>, <strong>JakOS</strong>) and multi-platform Kotlin software for Android, Windows, and Linux (<strong>USOS Checker</strong>).',
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
      cta_projects: "Zobacz projekty",
      cta_github: "Profil na GitHubie ↗",
      status_loading: "Sprawdzam GitHuba…",
      status_live: "Na żywo z GitHuba · ostatnia zmiana {date}",
      status_offline: "GitHub niedostępny · pokazuję zapisane dane",
      home_projects_eyebrow: "Wybrane prace",
      home_projects_title: "Projekty",
      about_eyebrow: "O mnie",
      about_title: "Programista systemów i aplikacji z Polski",
      about_lead: "Piszę systemy operacyjne od zera w C i asemblerze oraz wieloplatformowe aplikacje w Kotlinie. Publikuję swoje projekty na GitHubie od 2017 roku — od małych narzędzi w Pythonie po 64-bitowy system.",
      contact_eyebrow: "Kontakt",
      contact_title: "Skontaktuj się ze mną",
      contact_lead: "Najlepiej skontaktować się przez GitHuba. Pytania o konkretny projekt zgłoś jako issue w jego repozytorium.",
      contact_gh_title: "Profil na GitHubie",
      contact_gh_desc: "Wszystkie publiczne repozytoria, wydania i aktywność.",
      contact_azami_title: "AzamiOS — zgłoszenia",
      contact_azami_desc: "Błędy i pytania dotyczące jądra, sterowników i przestrzeni użytkownika.",
      contact_usos_title: "USOS Checker — zgłoszenia",
      contact_usos_desc: "Błędy i pomysły na nowe funkcje w aplikacji na Androida i komputer.",
      title_home: "a0w-svg (a0aRd) — systemy i oprogramowanie",
      telemetry_total: "łącznie ~11,72 MB",
      footer_prototype: "Prototyp USOS",
      azami_title: "AzamiOS — 64-bitowy system operacyjny x86_64",
      azami_predecessor: "Poprzednik: JakOS (x86-32)",
      tab_kernel: "Jądro i ABI Linuksa",
      tab_drivers: "Sterowniki i sieć",
      tab_libc: "Własna libc i porty",
      tab_gui: "GUI azwm i VFS",
      k_h: "Wywłaszczające jądro x86_64 i niezmodyfikowane binaria Linuksa",
      k_p: "Implementuje ABI wywołań <code>syscall</code> System V AMD64 Linuksa, dzięki czemu statyczne binaria skompilowane zwykłym linuksowym toolchainem działają bezpośrednio — bez nakładek i łatek w kodzie.",
      k_1: "<strong>Pamięć i stronicowanie:</strong> menedżer pamięci fizycznej (PMM), alokator slab <code>kmalloc</code>, 4-poziomowe stronicowanie PML4 z <code>mmap</code>/<code>munmap</code> i bitmapą przyspieszaną instrukcją POPCNT.",
      k_2: "<strong>Planowanie i sygnały:</strong> wywłaszczające kolejki zadań dla każdego procesora, loader ELF64, wątki POSIX, kontrola zadań (<code>SIGSTOP</code>/<code>SIGTSTP</code>/<code>SIGCONT</code>, <code>wait4</code>).",
      k_3: "<strong>Debugowanie i PMU:</strong> pełny <code>ptrace(2)</code> (<code>TRACEME</code>, <code>ATTACH</code>, <code>SEIZE</code>, <code>int3</code>, praca krokowa, bezpieczne dla COW <code>PEEK</code>/<code>POKE</code>) oraz sprzętowe liczniki PMU przez <code>perf_event_open(2)</code>.",
      k_4: "<strong>Pomiar czasu vDSO w ~20 ns:</strong> źródło zegara KVM pvclock / VMware TSC i jednorazowe przerwania TSC-deadline krótsze niż tick, dające <code>nanosleep</code> z dokładnością 1 ms.",
      k_5: "<strong>Bezpieczeństwo i rozszerzenia procesora:</strong> SMEP, SMAP, UMIP, PKU, NX, FSGSBASE, PCID, XSAVE/XSAVEC, RDRAND/RDSEED, haszowanie wpisów katalogów CRC-32C z SSE4.2 oraz bezpieczne wykrywanie funkcji procesora przy starcie.",
      d_h: "Warstwa abstrakcji sprzętu (HAL), pamięć masowa, USB 3.x i stos sieciowy",
      d_p: "Modułowe wykrywanie urządzeń na magistrali PCI z routingiem MSI/INTx, przerwania SMP przez I/O APIC i LAPIC oraz sterowniki urządzeń parawirtualnych i fizycznych.",
      d_1: "<strong>Karty sieciowe:</strong> Intel <code>e1000</code> / <code>e100</code>, Realtek <code>RTL8139</code> / <code>RTL8169</code> (Gigabit), AMD PCNet, VMware <code>VMXNET3</code> i <code>VirtIO-Net</code>.",
      d_2: "<strong>Stos TCP/IP:</strong> pełny Ethernet, ARP, IPv4, ICMPv4, UDP, TCP, gniazda BSD, <code>dhcpcd</code>, <code>ntpd</code>, <code>httpd</code>, <code>curl</code> i <code>nslookup</code>.",
      d_3: "<strong>USB i urządzenia wejścia:</strong> <code>xHCI</code> (USB 3.x) z przejęciem kontroli od BIOS-u, routing portów Intel PCH, podłączanie na gorąco, klawiatury, myszy i tablety USB HID, PS/2 oraz <code>virtio-input</code>.",
      d_4: "<strong>Dźwięk i obraz:</strong> Intel HDA, AC'97, ES1370, MPU-401 MIDI, PC Speaker; VirtIO GPU, BGA Display i Framebuffer DRM.",
      d_5: "<strong>Pamięć masowa:</strong> ATA IDE, stacja dyskietek DMA/FDC, VirtIO Block i współdzielenie plików z hostem przez VirtIO 9P.",
      l_h: "Samodzielna biblioteka C zgodna z POSIX (<code>userland/libc/</code>) i przeportowane pakiety",
      l_p: "Kod jądra nie przenika do przestrzeni użytkownika. Biblioteka ma licencję BSD-3-Clause, a obok niej jest bogate drzewo portów instalowanych przez <code>pkg</code>.",
      l_1: "<strong>Podstawowe API POSIX i Linuksa:</strong> <code>stdio.h</code>, <code>stdlib.h</code>, <code>pthread.h</code>, <code>sys/epoll.h</code>, <code>linux/futex.h</code> (w tym <code>futex2</code>), <code>sys/statx.h</code>, <code>sys/sendfile.h</code>, <code>spawn.h</code>, <code>mqueue.h</code>, <code>regex.h</code>, <code>ftw.h</code>.",
      l_2: "<strong>Powłoka i narzędzia:</strong> GNU Bash 5.2 jako <code>/bin/sh</code> (oraz natywna <code>azami-sh</code>), kompilator TinyCC (<code>tcc</code>) i GNU Make działające bezpośrednio w systemie.",
      l_3: "<strong>Przeportowane oprogramowanie:</strong> <code>musl 1.2.5</code> + <code>BusyBox 1.36.1</code> (401 apletów), Lua, MicroPython, SQLite, <code>jq</code>, <code>gawk</code>, <code>curl</code>, <code>nano</code>, <code>less</code>, <code>tree</code>.",
      g_h: "Menedżer okien Azami (<code>azwm</code>), obsługa X11 i wirtualny system plików",
      g_p: "Pełne środowisko graficzne oparte na programowym kompozytorze z podwójnym buforowaniem i przezroczystością oraz na drzewie katalogów Unix FHS.",
      g_1: "<strong>Aplikacje:</strong> menedżer okien <code>azwm</code>, <code>terminal</code>, <code>texteditor</code>, <code>filemanager</code>, <code>sysmon</code>, <code>calculator</code>, <code>paint</code> oraz gry (<code>minesweeper</code>, <code>2048</code>, <code>snake</code>).",
      g_2: "<strong>Protokół klienta X11:</strong> uruchamia klasyczne programy X11, m.in. <code>xclock</code>, <code>xcalc</code>, <code>xeyes</code> i <code>xcursor</code>.",
      g_3: "<strong>VFS i systemy plików:</strong> <code>ext2</code>, <code>FAT32</code>, <code>ProcFS</code>, <code>SysFS</code>, <code>DevFS</code>, <code>Devpts</code>, <code>PipeFS</code> i initrd <code>TarFS</code> z listami ACL POSIX (<code>getfacl</code>/<code>setfacl</code>).",
      usos_title: "USOS Checker — aplikacja na Androida i komputer",
      usos_repo_btn: "Repozytorium na GitHubie",
      usos_platform_desktop: "Komputer",
      usos_platform_setup: "Konfiguracja API",
      bf_eyebrow: "Interaktywne laboratorium · a0w-svg/Hana_brainfuck",
      bf_source_btn: "Kod źródłowy C++ (a0w-svg/Hana_brainfuck)",
      bf_load_azami: "Wczytaj brainfuck_programs/AzamiOS.bf",
      bf_load_hello: "Wczytaj brainfuck_programs/hello.bf",
      bf_reset: "Wyczyść taśmę",
      bf_source_label: "KOD: brainfuck_programs/AzamiOS.bf",
      bf_tape_label: "TAŚMA PAMIĘCI (KOMÓRKI #0 – #7)",
      bf_stdout_label: "WYJŚCIE (STDOUT)",
      sort_updated: "Sortuj: ostatnio zmienione",
      sort_size: "Sortuj: rozmiar kodu",
      sort_name: "Sortuj: alfabetycznie",
      modal_tree_label: "DRZEWO REPOZYTORIUM I PODSYSTEMY",
      modal_open: "Otwórz na GitHubie",
      tl1_title: "Automatyzacja w Pythonie i pierwsze jądro x86",
      tl1_desc: "Napisałem w Pythonie bota Discord <code>alsq</code> i <code>password-generator</code>, a potem zacząłem tworzyć system operacyjny <strong>JakOS</strong> (32-bitowe jądro x86 Rose-lk w C i asemblerze).",
      tl2_title: "C++, C# WPF, rozwiązania CTF i początki AzamiOS",
      tl2_desc: "Powstały <strong>Banking_System_Project</strong>, <strong>Wei_Matrix_calc</strong> (C# WPF), <strong>KnightCTFWriteups</strong> (2022) i <strong>Snake</strong> (C++), a także repozytoria <strong>AzamiOS</strong> i <strong>Hana_brainfuck</strong>.",
      tl3_title: "Gry w SDL na konsole przenośne i interpretery języków",
      tl3_desc: "Poznawałem budowę gier na retro konsole przenośne w projekcie <strong>yatka</strong> (C i SDL 1.2) i rozwijałem <strong>Hana_brainfuck</strong> o własne programy w Brainfucku (<code>AzamiOS.bf</code>).",
      tl4_title: "64-bitowy AzamiOS i USOS Checker v1.10.0",
      tl4_desc: "Rozbudowałem <strong>AzamiOS</strong> do ponad 8,4 MB kodu — 64-bitowego systemu x86_64, który uruchamia niezmodyfikowane binaria Linuksa i ma GUI <code>azwm</code> — oraz wydałem 24 wersje <strong>USOS Checker</strong> na Androida, Windows i Linuksa.",
      ph_search: "Szukaj: nazwa, C, Kotlin, x86...",
      usos_download: "Pobierz najnowszą",
      usos_theme_dark: "Ciemny (OLED)",
      usos_theme_light: "Jasny",
      usos_step1: "Krok 1: automatyczny klucz",
      usos_step2: "Krok 2: instrukcja klucza",
      bf_stats: "{ops} operacji · wskaźnik na komórce #{ptr}",
      bf_reset_stats: "Taśma wyczyszczona (0 operacji)",
      bf_empty: "(brak wyjścia)",
      hero_location: "Polska · Na GitHubie od stycznia 2017",
      hero_heading: 'Od <span class="gradient-text">jądra systemu x86_64</span> po wieloplatformowe aplikacje natywne.',
      hero_lead: 'Tworzę niskopoziomowe systemy operacyjne w C i asemblerze (<strong>AzamiOS</strong>, <strong>JakOS</strong>) oraz wieloplatformowe aplikacje w Kotlinie na Androida, Windows i Linuksa (<strong>USOS Checker</strong>).',
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

  // --------------------------------------------------------------------------
  // 3. Language: follows the browser's language unless the visitor picked one
  //    in the footer. One dark theme only — no theme switch.
  // --------------------------------------------------------------------------
  function readStoredLang() {
    try {
      return localStorage.getItem("a0w_lang");
    } catch (_) {
      return null;
    }
  }

  function detectLang() {
    // The first language in the visitor's list that this site supports wins
    const prefs = navigator.languages || [navigator.language || "en"];
    for (const l of prefs) {
      const base = String(l).toLowerCase().split("-")[0];
      if (I18N[base]) return base;
    }
    return "en";
  }

  let currentLang = I18N[readStoredLang()] ? readStoredLang() : detectLang();
  let currentFilter = "all";
  let currentSearch = "";
  let currentSort = "updated";

  const htmlEl = document.documentElement;
  const langButtons = document.querySelectorAll("[data-lang]");

  // GitHub status in the hero: "loading" until the API answers, then "live" or "offline"
  const liveStatusEl = document.getElementById("live-status");
  const liveStatusText = document.getElementById("live-status-text");
  let liveState = { state: "loading", lastPush: null };

  function renderLiveStatus() {
    if (!liveStatusEl || !liveStatusText) return;
    liveStatusEl.setAttribute("data-state", liveState.state);
    if (liveState.state === "live") {
      const date = new Date(liveState.lastPush).toLocaleDateString(currentLang === "pl" ? "pl-PL" : "en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric"
      });
      liveStatusText.textContent = t("status_live", { date });
    } else {
      liveStatusText.textContent = t(liveState.state === "offline" ? "status_offline" : "status_loading");
    }
  }

  function applyLanguage(lang) {
    currentLang = lang;
    htmlEl.setAttribute("lang", lang);
    langButtons.forEach((b) => b.setAttribute("aria-pressed", String(b.getAttribute("data-lang") === lang)));

    const dict = I18N[lang] || I18N.en;
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (dict[key]) {
        el.innerHTML = dict[key];
      }
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      const key = el.getAttribute("data-i18n-placeholder");
      if (dict[key]) el.placeholder = dict[key];
    });
    renderRepositories();
    updateUsosPreview();
    renderLiveStatus();
    if (bfCodeEl) executeBrainfuck(bfCodeEl.value);
  }

  // Look up a translated string, filling {placeholders} from vars
  function t(key, vars = {}) {
    const dict = I18N[currentLang] || I18N.en;
    const text = dict[key] || I18N.en[key] || key;
    return text.replace(/\{(\w+)\}/g, (_, name) => vars[name] ?? "");
  }

  langButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const lang = btn.getAttribute("data-lang");
      try {
        localStorage.setItem("a0w_lang", lang);
      } catch (_) {
        // Storage blocked: the choice just lasts for this visit
      }
      applyLanguage(lang);
    });
  });

  // --------------------------------------------------------------------------
  // 3b. Projects segmented control — one project visible at a time
  // --------------------------------------------------------------------------
  const projectTabs = [...document.querySelectorAll(".project-tab")];

  function selectProject(tab, moveFocus = false) {
    projectTabs.forEach((other) => {
      const selected = other === tab;
      other.setAttribute("aria-selected", String(selected));
      other.tabIndex = selected ? 0 : -1;
      document.getElementById(other.getAttribute("aria-controls")).hidden = !selected;
    });
    if (moveFocus) tab.focus();
  }

  projectTabs.forEach((tab, i) => {
    tab.addEventListener("click", () => selectProject(tab));
    tab.addEventListener("keydown", (e) => {
      const step = { ArrowRight: 1, ArrowLeft: -1 }[e.key];
      if (!step) return;
      e.preventDefault();
      selectProject(projectTabs[(i + step + projectTabs.length) % projectTabs.length], true);
    });
  });

  // --------------------------------------------------------------------------
  // 4. AzamiOS Subsystem Tabs
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
      alt: {
        en: "USOS Checker Desktop in dark theme showing demo data",
        pl: "USOS Checker na komputerze w ciemnym motywie z danymi demo"
      },
      caption: {
        en: "Desktop (Windows / Linux) — Dark Theme · Today view with live schedule & recent changes",
        pl: "Komputer (Windows / Linux) — ciemny motyw · widok Dzisiaj z bieżącym planem i ostatnimi zmianami"
      }
    },
    "desktop-light": {
      src: "assets/screenshots/desktop-light.png",
      alt: {
        en: "USOS Checker Desktop in light theme showing demo data",
        pl: "USOS Checker na komputerze w jasnym motywie z danymi demo"
      },
      caption: {
        en: "Desktop (Windows / Linux) — Light Theme · Neutral cards & cyan accent",
        pl: "Komputer (Windows / Linux) — jasny motyw · neutralne karty i turkusowy akcent"
      }
    },
    "android-dark": {
      src: "assets/screenshots/android-dark.png",
      alt: {
        en: "USOS Checker Android in OLED dark theme",
        pl: "USOS Checker na Androidzie w ciemnym motywie OLED"
      },
      caption: {
        en: "Android 12+ — OLED Dark Theme · Today view, class countdown & bottom navigation",
        pl: "Android 12+ — ciemny motyw OLED · widok Dzisiaj, odliczanie do zajęć i dolna nawigacja"
      }
    },
    "android-light": {
      src: "assets/screenshots/android-light.png",
      alt: {
        en: "USOS Checker Android in light theme",
        pl: "USOS Checker na Androidzie w jasnym motywie"
      },
      caption: {
        en: "Android 12+ — Light Theme · Adaptive Material interface",
        pl: "Android 12+ — jasny motyw · adaptacyjny interfejs Material"
      }
    },
    "onboarding-dark": {
      src: "assets/screenshots/welcome.png",
      alt: {
        en: "USOS Checker first-run API setup screen",
        pl: "Ekran konfiguracji API przy pierwszym uruchomieniu USOS Checker"
      },
      caption: {
        en: "First-Run Onboarding — Automatic personal USOSapps API key provisioning",
        pl: "Pierwsze uruchomienie — automatyczne utworzenie osobistego klucza API w USOSapps"
      }
    },
    "onboarding-light": {
      src: "assets/screenshots/welcome-keys.png",
      alt: {
        en: "USOS Checker manual Consumer Key and Secret guide",
        pl: "Instrukcja ręcznego wpisania Consumer Key i Consumer Secret w USOS Checker"
      },
      caption: {
        en: "API Key Guide — Instructions for Consumer Key & Consumer Secret stored in Android Keystore",
        pl: "Instrukcja klucza API — jak wpisać Consumer Key i Consumer Secret przechowywane w Android Keystore"
      }
    }
  };

  function updateUsosPreview() {
    if (!usosImg || !usosCaption || !usosThemeGroup) return;
    const key = `${usosPlatform}-${usosTheme}`;
    const item = USOS_SCREENS[key] || USOS_SCREENS["desktop-dark"];
    usosImg.src = item.src;
    usosImg.alt = item.alt[currentLang] || item.alt.en;
    usosCaption.textContent = item.caption[currentLang] || item.caption.en;

    const themeBtns = usosThemeGroup.querySelectorAll(".seg-btn");
    if (usosPlatform === "onboarding") {
      themeBtns[0].textContent = t("usos_step1");
      themeBtns[1].textContent = t("usos_step2");
    } else {
      themeBtns[0].textContent = t("usos_theme_dark");
      themeBtns[1].textContent = t("usos_theme_light");
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
        <div class="cell-idx">#${i}</div>
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
    bfStdoutEl.textContent = out || t("bf_empty");
    bfStatsEl.textContent = t("bf_stats", { ops, ptr });
  }

  // Interpreter only exists on projects.html
  if (bfCodeEl && bfTapeEl && bfStdoutEl && bfStatsEl) {
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
      bfStatsEl.textContent = t("bf_reset_stats");
    });
  }

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

  // Repository explorer and modal only exist on repositories.html
  if (modal && modalCloseBtn) {
    modalCloseBtn.addEventListener("click", closeRepoModal);
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeRepoModal();
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && !modal.hasAttribute("hidden")) {
        closeRepoModal();
      }
    });
  }

  // Polish versions of each repository's highlight bullets
  const HIGHLIGHTS_PL = {
    AzamiOS: [
      "x86_64 Long Mode (PML4) · bootloader Limine BIOS/UEFI",
      "Uruchamia niezmodyfikowane statyczne binaria Linuksa ELF64 (musl + BusyBox + Bash 5.2)",
      "Ponad 40 nagłówków POSIX libc · ptrace(2), perf_event_open(2), vDSO TSC ~20 ns",
      "VirtIO, Intel e1000, RTL8139/8169, xHCI USB 3.x, Intel HDA, azwm + X11"
    ],
    "usoschecker-public": [
      "Android 12+ (APK), Windows (MSI/ZIP) i Linux (DEB) — 24 opublikowane wydania",
      "Panel Dzisiaj, wykrywanie kolizji w planie i eksport kalendarza .ics",
      "Synchronizacja zadań, ocen i wiadomości z Platona + historia zmian przed/po",
      "Bezpieczeństwo bez wspólnego sekretu (Android Keystore) · języki PL / EN / UK"
    ],
    JakOS: [
      "32-bitowy tryb chroniony: GDT, IDT, ISR oraz kontrolery PIT, RTC i DMA",
      "Własny sterownik ekranu VGA, klawiatura PS/2, PC speaker i port szeregowy",
      "Stronicowanie, sterta kmalloc, VFS + initrd, sterownik dysku ATA i powłoka jądra"
    ],
    Hana_brainfuck: [
      "Obiektowy rdzeń interpretera w C++ (Hana.cpp / Hana.h)",
      "Zawiera brainfuck_programs/AzamiOS.bf, który wypisuje „AzamiOS”",
      "Licencja Apache-2.0, projekt dla Visual Studio"
    ],
    yatka: [
      "Tryby Marathon, Sprint (40 linii) i Ultra (3 minuty)",
      "7 generatorów losowania: naiwny, NES Nintendo, 7-bag, 8-bag, 14-bag, TGM98, TGM3",
      "Własne skórki i muzyka tracker/MOD/MP3/OGG na SDL 1.2"
    ],
    Snake: [
      "Modułowa architektura C++: Game, World, Window, Snake, SnakeFood, TextBox",
      "Własne wykrywanie kolizji na siatce i wynik wyświetlany czcionką TrueType"
    ],
    Wei_Matrix_calc: [
      "Interaktywny interfejs XAML do wpisywania macierzy oddzielanych spacjami",
      "Działania na macierzach w C# (.NET WPF)"
    ],
    Banking_System_Project: [
      "Zakładanie kont, wpłaty, wypłaty i sprawdzanie salda",
      "Zapis rekordów binarnie przez fstream w C++"
    ],
    KnightCTFWriteups: [
      "Zadania: FileD, Follow (extract_text.py), Hows_the_Shark, The_Lost_Flag",
      "Analiza pakietów sieciowych, steganografia i automatyczne wydobywanie flag"
    ],
    "password-generator": [
      "Bez zewnętrznych zależności · licencja MIT",
      "Losowanie znaków z wybranej puli"
    ],
    alsq: [
      "Obsługa komend Discorda oparta na zdarzeniach, w Pythonie",
      "Powstał w październiku 2019"
    ]
  };

  function renderRepositories() {
    if (!repoGrid) return;
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

      const highlights = (currentLang === "pl" && HIGHLIGHTS_PL[repo.name]) || repo.highlights;
      const highlightsHtml = highlights
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

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      currentSearch = e.target.value;
      renderRepositories();
    });
  }

  if (sortSelect) {
    sortSelect.addEventListener("change", (e) => {
      currentSort = e.target.value;
      renderRepositories();
    });
  }

  // Initial render
  applyLanguage(currentLang);

  // --------------------------------------------------------------------------
  // 8. Live GitHub API Hydration (Updates Stars, Pushes & Releases Live)
  // --------------------------------------------------------------------------
  async function syncWithGitHubApi() {
    try {
      const res = await fetch("https://api.github.com/users/a0w-svg/repos?per_page=100");
      if (!res.ok) throw new Error(`GitHub API ${res.status}`);
      const liveRepos = await res.json();

      // Most recent push across all public repos drives the hero status
      const lastPush = liveRepos.map((r) => r.pushed_at).filter(Boolean).sort().pop();
      liveState = lastPush ? { state: "live", lastPush } : { state: "offline", lastPush: null };
      renderLiveStatus();

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
      }

      // Check latest release of usoschecker-public
      const relRes = await fetch("https://api.github.com/repos/a0w-svg/usoschecker-public/releases/latest");
      if (relRes.ok) {
        const rel = await relRes.json();
        if (rel && rel.tag_name) {
          const usos = PUBLIC_REPOS.find((r) => r.name === "usoschecker-public");
          if (usos) usos.releaseTag = rel.tag_name;
          const btnText = document.getElementById("usos-release-btn-text");
          if (btnText) btnText.textContent = rel.tag_name;
          renderRepositories();
        }
      }
    } catch (_) {
      // Offline or rate-limited: the built-in repository data stays, and the
      // status says so instead of pretending to be live.
      if (liveState.state !== "live") {
        liveState = { state: "offline", lastPush: null };
        renderLiveStatus();
      }
    }
  }

  syncWithGitHubApi();
})();

