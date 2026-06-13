---
name: sbl-design-system
description: "Use for any UI, UX, or feature design ask in the Sbl.so product. Encodes the production design system - DM Sans typography, brand colors, exact code snippets for every shipped component, page templates, the AI Slop detection list, the 10-dimension quality rubric, accessibility floor, motion floor, voice rules, and anti-patterns. Designs MUST start with a structured design brief and 2 to 5 forcing questions before any UI work. Tech-grounded - build only what is in the request or known to exist in code, propose additions as Y/N questions and wait for input, never render the global shell unless explicitly asked. Components match the exact production code patterns. No invention without justification."
---

# Sbl.so Design System Skill

This skill produces production-grade UI for Sbl.so. It does three jobs better than a generic design assistant: it forces clarity before drawing, it prevents AI Slop, and it scores output against a real rubric. Sbl.so customers are 25 to 55 year-old founders, sales managers, SDRs, marketers, agency owners, and consultants. Time-pressured, judge in 5 seconds.

---

# IRON LAWS (the floor)

These are non-negotiable. Violation means restart, not warning.

**Iron Law 1: No design without a brief.** Every output starts with the structured brief in Part 1. No exceptions, even for small asks.

**Iron Law 2: Confusion Protocol.** When uncertain about ANY material design decision, stop and ask. Never guess on architecture, behavior, placement, or scope. Guessing is the failure mode.

**Iron Law 3: Tech-grounded only.** Build only what is in the request or known to exist in code. If behavior would need backend logic that has not been confirmed, pause and ask.

**Iron Law 4: No invented components.** Every component in the output must come from Part 4 or be explicitly justified as new in the brief.

**Iron Law 5: No shell chrome unless asked.** The dashboard shell already exists. Render only what is asked.

**Iron Law 6: 80% rubric or rework.** Every design is scored against the 10-dimension rubric in Part 8. Below 80% average, rework. Three iterations max.

---

# PART 1: Design brief and forcing questions (run FIRST)

Do not jump to design. Generate a structured brief, surface the unknowns, ask 2 to 5 forcing questions, stop.

## Step 1: Pick the mode

Match the request to one of these modes. The mode shapes everything downstream.

```
NEW FEATURE  - greenfield work, no existing pattern to copy
EXTEND       - add to an existing feature (new tab, new view, new action)
POLISH       - improve an existing surface (rework copy, tighten layout, fix hierarchy)
TRIAGE       - fix specific design issues called out by the user
PORT         - move an existing pattern to a new context (e.g. mobile-ize a desktop screen)
```

State the mode in the brief. Different modes have different priorities (see Part 8 rubric weights).

## Step 2: Write the brief

Output this structure before any UI:

```
DESIGN BRIEF
Mode:           [NEW FEATURE / EXTEND / POLISH / TRIAGE / PORT]
What:           [one sentence of what is being built]
Why:            [the user's actual goal, not the literal ask]
Where:          [placement in dashboard, or "not yet decided"]
Primary user:   [which archetype from Part 8 matters most here]

In scope:
- [item]
- [item]

Out of scope:
- [item]
- [item]
- Shell chrome (sidebar, top bar, breadcrumb) unless explicitly asked

Tech-confirmed:
- [behavior known to work in code]
- [or "not provided, asking below"]

Tech-uncertain (needs answer before design):
- [what we do not know]

Edge cases to address:
- [item]
- [item]

Success state:
- [what the world looks like one minute after a user uses this]
```

If any field cannot be filled from the request, that becomes a forcing question.

## Step 3: Ask 2 to 5 forcing questions

Not clarifying questions. Forcing questions. The difference:

```
Clarifying  - "What color do you want?"
Forcing     - "Are users supposed to know which campaign their lead came from?
               If yes, that changes the card from one column to two."
```

A forcing question reveals a downstream consequence. It makes the user actually decide something material. Ask the smallest number that fully unblocks design - usually 2 to 4. Cap at 5.

Generate questions by analyzing what is genuinely unresolved in the brief. Do not pull from a list. Each question must:
1. Have at least two valid answers that lead to different designs
2. Be unanswerable from the existing request
3. Surface a downstream consequence the user may not have considered

## Step 4: Stop

After the brief and forcing questions, STOP. Wait for answers. Only proceed once the brief is fully filled in or the user says "use your judgment."

---

# PART 2: Tech-grounded pre-flight (after brief is confirmed)

Once the brief is locked, output this concisely before designing:

- **Components reused** (named from Part 4)
- **Page template applied** (named from Part 5, or "custom layout because [reason]")
- **Proposed additions** (numbered Y/N list of UX improvements you would recommend, awaiting input. STOP if any.)
- **States covered** (default, loading, empty, error, success, plus any Sbl-specific from Part 11)
- **Confirmation flows** (any irreversible actions and how they are confirmed, per Part 12)

---

# PART 3: Design tokens (production, authoritative)

Pulled from the live dashboard. Use exact values.

## 3.1 Typography

**Primary font:** DM Sans (100% of UI)
**Monospace:** ui-monospace, Menlo, Consolas (API keys, code only)

| Role | Tailwind | Size | Weight | Color |
|---|---|---|---|---|
| Page title (top bar) | `text-lg font-semibold` | 18px | 600 | `#04103B` |
| Section title / H2 | `text-base font-medium` | 16px | 500 | `#04103B` |
| Body / default | `text-sm font-normal` | 14px | 400 | `#6B7280` |
| Table header | `text-sm font-medium` | 14px | 500 | `#6B7280` |
| Table cell | `text-sm` | 14px | 400-500 | `#1F2937` / `#4B5563` |
| Stat value (large) | `text-2xl font-semibold` | 24px | 600 | `#04103B` |
| Label / semibold | `text-sm font-semibold` | 14px | 600 | `#1F2937` |
| Caption / helper | `text-xs` | 12px | 400-500 | `#9CA3AF` |
| Sidebar section label | `text-[10px] font-semibold uppercase` | 10px | 600 | `#9CA3AF` |

## 3.2 Colors

### Primary
| Token | Hex | Usage |
|---|---|---|
| Brand Blue (custom-blue-900) | `#3657D5` | Primary buttons, active tabs, active nav, focus borders | -> use PRIMARY COLOR BUTTON only for the main CTA.

| Blue hover | `#4A68D9` | Button hover |
| Hover-light | `#FAFBFF` | Outline button hover bg |
| Dark Navy | `#04103B` | Page titles, headings, stat values |

### Neutrals
| Token | Hex | Usage |
|---|---|---|
| Text dark | `#1F2937` | Card titles, sidebar text default, primary content |
| Gray 600 | `#4B5563` | Inactive tab text, secondary text |
| Gray 500 | `#6B7280` | Body default, table headers, placeholders |
| Gray 400 | `#9CA3AF` | Captions, muted text, breadcrumb |
| Gray 100 hover | `custom-gray-100` | Sidebar hover, button hover |
| Sidebar border | `#ebeefb` | Sidebar perimeter |
| Card border | `#F1F1F1` | Cards, table row dividers |
| Surface gray | `#F9FAFB` | Breadcrumb bg, table header bg |
| White | `#FFFFFF` | Cards, secondary buttons, sidebar |

### Semantic / status
| Status | Background | Text | Where |
|---|---|---|---|
| Success / Successful / Connected | `#D2F3D6` | `#2E6E28` | KB row status, channel connected |
| Warning / Resumes | `#FFF1CF` | `#AD8516` | Campaign card "Resumes in 39h" |
| Created (info blue) | `#D8DFFA` | `#3657D5` | Campaign card "Created" |
| Ended (neutral) | `#E0E0E09C` | `#787878` | Campaign card "Ended" |
| Paused / Disconnected (error) | `custom-red-400` | `#FFFFFF` | Campaign card "Paused" |
| NEW feature flag | `#f6f8ff` | `#3657d5` | Sidebar nav "NEW" tag |

## 3.3 Spacing, radius, breakpoints

**Spacing (4px grid):** 1=4 / 2=8 / 3=12 / 4=16 / 5=20 / 6=24 / 8=32

**Radius:** `rounded-md` (6px) for inputs and large primary buttons / `rounded-[8px]` for primary buttons / `rounded-lg` (8px) for outline buttons and sidebar items / `rounded-[12px]` for cards / `rounded-[13px]` for status badge pills / `rounded-full` for avatars and FAB.

**Icons:** Lucide, 1.5 stroke. 16-20px in UI, 24px hero.

**Breakpoints:** mobile <640 / tablet 640+ / laptop 1024+ / desktop 1280+. On mobile: sidebar collapses to bottom nav, tables to card lists, modals to bottom sheets, primary CTAs full-width, touch targets ≥44x44px.

---

# PART 4: Component code reference (USE THESE EXACT PATTERNS)

Production code shipping today. Copy verbatim. For React, convert `class=` to `className=`.

## 4.1 Sidebar / Left navigation

```html
<div class="z-50 h-screen flex-shrink-0 flex-col overflow-hidden overflow-y-auto
            border border-[#ebeefb] bg-white py-4 pl-2 pr-2 transition-all
            duration-300 hidden md:flex">
  <span class="text-[10px] font-semibold uppercase text-[#9CA3AF] px-3 py-1">OUTREACH</span>

  <a href="/campaigns" class="relative z-[100] flex w-full cursor-pointer items-center
     justify-between gap-2 rounded-lg px-3 py-2 transition
     hover:bg-custom-gray-100 text-[#1F2937] bg-white">Campaigns</a>

  <a href="/chat" class="relative z-[100] flex w-full cursor-pointer items-center
     justify-between gap-2 rounded-lg px-3 py-2 transition
     hover:bg-custom-gray-100 text-[#1F2937]">Chats</a>
</div>
```

## 4.2 Top header bar

```html
<div class="flex h-[60px] w-full items-center justify-between bg-white px-5 py-2.5">
  <h1 class="text-lg font-semibold text-[#04103B]">Campaigns</h1>
  <div class="flex items-center gap-3">
    <button class="p-0 rounded-md transition-colors hover:bg-gray-100"><!-- Bell --></button>
    <button class="flex items-center gap-2">
      <span>Dr Suraj B</span>
      <div class="flex h-8 w-8 flex-shrink-0 items-center justify-center
                  rounded-full bg-gray-300 text-sm font-semibold text-white">DB</div>
    </button>
  </div>
</div>
```

## 4.3 Breadcrumb bar

```html
<div class="flex w-full items-center gap-[2px] border-b border-solid
            border-[#F9FAFB] bg-[#F9FAFB] px-5 py-1">
  <span class="text-sm text-[#9CA3AF]">/ All Campaigns</span>
</div>
```

## 4.4 Primary button (compact, h-34)

```html
<button class="inline-flex items-center justify-center whitespace-nowrap rounded-[8px]
               cursor-pointer relative !outline-none bg-custom-blue-900 text-white
               text-sm font-normal leading-normal shadow-none border-none transition-all
               font-dm-sans h-[34px] px-4 py-2
               disabled:cursor-not-allowed disabled:bg-disable-btn">+ New Campaign</button>
```

## 4.5 Primary button (large, h-11)

```html
<button class="justify-center whitespace-nowrap cursor-pointer relative !outline-none
               text-sm font-normal leading-normal shadow-none border-none transition-all
               font-dm-sans flex h-11 items-center gap-2
               rounded-md bg-[#3657D5] px-3 py-2.5 text-white
               opacity-100 hover:bg-[#4A68D9]/90">+ New Campaign</button>
```

## 4.6 Secondary / outline button

```html
<button class="inline-flex items-center justify-center whitespace-nowrap cursor-pointer
               relative !outline-none font-satoshi h-[34px] px-4 py-2
               w-full gap-2.5 rounded-lg border-[1px] border-[#3657D5] bg-white
               pb-2.5 pl-14 pr-14 pt-2.5 text-sm font-semibold text-[#3657D5]
               opacity-100 transition-colors hover:bg-[#FAFBFF]">View Campaign →</button>
```

## 4.7 Ghost / text nav button

```html
<button class="relative z-[100] flex w-full cursor-pointer items-center
               justify-between gap-2 rounded-lg px-3 py-2 text-left
               transition hover:bg-custom-gray-100 text-[#1F2937]">Talk to the Founder</button>
```

## 4.8 Icon-only round button (filter)

```html
<div class="bg-custom-blue-900 flex flex-shrink-0 cursor-pointer items-center
            justify-center rounded-full p-[11px]"><!-- Filter SVG --></div>
```

## 4.9 Icon-only ghost button

```html
<button class="p-0 rounded-md transition-colors hover:bg-gray-100"><!-- ··· or bell --></button>
```

## 4.10 Standard text input

```html
<input type="text" placeholder="Full Name"
  class="flex rounded-[6px] border px-3 py-2 text-[15px]
         placeholder:text-custom-gray-300 outline-none
         disabled:cursor-not-allowed border-custom-gray-200 bg-white
         focus:border-custom-blue-900 h-12 w-80 flex-1 pl-3 pr-3" />
```

## 4.11 Search bar

```html
<div class="flex w-full items-center gap-4 rounded-sm bg-white px-2">
  <div class="flex flex-1 items-center">
    <div class="flex min-w-0 flex-1 items-center gap-2">
      <!-- Search icon -->
      <input type="text" placeholder="Search a campaign by names"
        class="text-custom-gray-900 h-5 min-w-0 flex-1 border-none bg-transparent p-0
               text-sm font-normal leading-5 placeholder:text-[#9CA3AF]
               focus:outline-none focus:ring-0" />
    </div>
  </div>
</div>
```

## 4.12 Phone input with country flag

```html
<div class="flex items-center gap-2">
  <button class="inline-flex items-center justify-center whitespace-nowrap font-normal
                 cursor-pointer relative !outline-none border rounded-[7px]
                 text-custom-blue-1100 text-sm leading-normal">🇮🇳 +91</button>
  <input type="text" placeholder="XXXXX XXXXX"
    class="flex h-[42px] rounded-[6px] border px-3 py-2 text-[15px]
           placeholder:text-custom-gray-300 outline-none
           border-custom-gray-200 bg-white
           focus:border-custom-blue-900 w-full pl-3 pr-3" />
</div>
```

## 4.13 Textarea (AI prompt)

```html
<textarea placeholder="Describe about your target audience..."
  class="w-full bg-transparent border border-gray-200 rounded-lg p-4
         text-sm resize-none focus:outline-none focus:border-custom-blue-900
         min-h-[120px]"></textarea>
```

## 4.14 Tabs (underline)

```html
<nav class="flex border-b border-gray-200 gap-6">
  <a href="#" class="font-dm-sans relative -mb-px border-b-2 border-[#3657D5]
                     pb-3 pt-1 text-sm transition-colors
                     font-semibold text-[#3657D5]">All Campaigns</a>
  <a href="#" class="font-dm-sans relative -mb-px border-b-2 border-transparent
                     pb-3 pt-1 text-sm transition-colors
                     font-medium text-[#6B7280] hover:text-[#374151]">Recommended</a>
</nav>
```

## 4.15 Campaign card (grid)

```html
<div class="relative flex w-[324px] max-w-[324px] cursor-pointer flex-col
            gap-[10px] rounded-[12px] border border-[#F1F1F1] bg-white p-4">
  <div class="h-[119px] w-full bg-[#FEFAEC] rounded-t-[4px] relative">
    <span class="absolute left-[14px] top-[14px] flex h-[24px] items-center gap-1
                 rounded-[13px] px-[15px] py-[4px] text-sm
                 bg-[#FFF1CF] text-[#AD8516]">Resumes in 39h</span>
  </div>
  <div class="mx-auto flex w-[292px] flex-col gap-[22px] rounded-[12px]">
    <div class="flex justify-between items-start">
      <h3 class="text-[#1F2937] font-medium text-sm">Campaign Title</h3>
      <button class="p-0 rounded-md transition-colors hover:bg-gray-100">···</button>
    </div>
    <div class="flex flex-wrap gap-2 text-sm text-[#4B5563]">
      <span>Queued: <strong>600</strong></span>
      <span>Sent: <strong>636</strong></span>
      <span>Accepted: <strong>84</strong></span>
      <span>Replied: <strong>27</strong></span>
    </div>
    <button class="w-full gap-2.5 rounded-lg border-[1px] border-[#3657D5] bg-white
                   pb-2.5 pl-14 pr-14 pt-2.5 text-sm font-semibold text-[#3657D5]
                   transition-colors hover:bg-[#FAFBFF]">View Campaign →</button>
  </div>
</div>
```

## 4.16 Stat / metric card

```html
<div class="flex flex-col gap-2 rounded-[12px] border border-[#F1F1F1] bg-white p-5">
  <div class="flex items-center justify-between">
    <span class="text-sm text-[#6B7280]">Connections Sent</span>
    <div class="flex h-10 w-10 items-center justify-center rounded-full bg-purple-50">
      <!-- Icon --></div>
  </div>
  <p class="text-2xl font-semibold text-[#04103B]">—</p>
</div>
```

## 4.17 Status badges

Base (large): `rounded-[13px] px-[15px] py-[4px] text-sm flex h-[24px] items-center gap-1`
Base (small): `rounded-[8px] px-2 py-[2px] text-sm`

| State | Background | Text |
|---|---|---|
| Resumes (warning) | `#FFF1CF` | `#AD8516` |
| Paused (error) | `bg-custom-red-400` | white |
| Ended (neutral) | `#E0E0E09C` | `#787878` |
| Created (info) | `#D8DFFA` | `#3657D5` |
| Successful / Connected | `#D2F3D6` | `#2E6E28` |
| Disconnected | `custom-red` | white |

## 4.18 Data table

```html
<div class="w-full overflow-x-auto">
  <table class="w-full text-sm">
    <thead>
      <tr class="bg-[#F9FAFB] border-b border-[#F1F1F1]">
        <th class="px-4 py-3 text-left font-medium text-[#6B7280]">
          <input type="checkbox" /></th>
        <th class="px-4 py-3 text-left font-medium text-[#6B7280]">Source</th>
        <th class="px-4 py-3 text-left font-medium text-[#6B7280]">Type</th>
        <th class="px-4 py-3 text-left font-medium text-[#6B7280]">Date Added ↓</th>
        <th class="px-4 py-3 text-left font-medium text-[#6B7280]">Status</th>
      </tr>
    </thead>
    <tbody>
      <tr class="border-b border-[#F1F1F1] hover:bg-[#F9FAFB] transition-colors">
        <td class="px-4 py-3"><input type="checkbox" /></td>
        <td class="px-4 py-3">
          <p class="font-medium text-[#1F2937]">FAQs.txt</p>
          <p class="text-xs text-[#6B7280]">Frequently Asked Questions</p>
        </td>
        <td class="px-4 py-3 text-[#4B5563]">Text</td>
        <td class="px-4 py-3 text-[#4B5563]">Dec 2, 2025</td>
        <td class="px-4 py-3">
          <div class="flex max-w-max items-center justify-center rounded-[8px]
                      bg-[#D2F3D6] px-2 py-[2px] text-sm text-[#2E6E28]">Successful</div>
        </td>
      </tr>
    </tbody>
  </table>
</div>
```

## 4.19 Avatar

```html
<div class="flex h-8 w-8 flex-shrink-0 items-center justify-center
            rounded-full bg-gray-300 text-sm font-semibold text-white">DB</div>
```

## 4.20 Toggle / view switcher

```html
<div class="flex items-center gap-1 rounded-md border border-gray-200 bg-white p-1">
  <button class="flex items-center gap-1 text-[#3657D5]"><!-- Grid --> Grid</button>
  <button class="flex items-center gap-1 text-[#4B5563]"><!-- List --></button>
</div>
```

## 4.21 Empty state

```html
<div class="flex flex-col items-center justify-center gap-4 py-20 text-center">
  <div class="text-gray-300"><svg class="h-16 w-16"><!-- icon --></svg></div>
  <p class="text-lg font-medium text-[#6B7280]">Select a user to view their chats</p>
</div>
```

## 4.22 Coming-soon overlay

```html
<div class="fixed inset-0 flex items-center justify-center bg-white/60 backdrop-blur-sm z-50">
  <div class="flex flex-col items-center gap-3 rounded-[16px] bg-white p-10 shadow-lg text-center">
    <h2 class="text-2xl font-semibold text-[#1F2937]">Coming soon</h2>
    <p class="text-sm text-[#6B7280]">CRM will be available here soon.</p>
  </div>
</div>
```

## 4.23 Help / support FAB

```html
<div class="fixed bottom-6 right-6 z-50">
  <button class="flex h-12 w-12 items-center justify-center rounded-full
                 bg-[#1F2937] text-white text-xl shadow-lg hover:bg-[#374151]">?</button>
</div>
```

## 4.24 Dropdown menu (click-open, anchored to trigger)

```html
<div class="relative inline-block">
  <button class="inline-flex items-center gap-2 rounded-[8px] border border-[#F1F1F1]
                 bg-white px-3 py-2 text-sm text-[#1F2937] hover:bg-[#F9FAFB]">
    Status: All
    <svg class="h-4 w-4 text-[#6B7280]"><!-- chevron-down --></svg>
  </button>
  <div class="absolute right-0 mt-2 w-56 rounded-[8px] border border-[#F1F1F1]
              bg-white py-2 shadow-lg z-10">
    <button class="flex w-full items-center px-4 py-2 text-sm text-[#1F2937]
                   hover:bg-[#F9FAFB]">All campaigns</button>
    <button class="flex w-full items-center px-4 py-2 text-sm text-[#1F2937]
                   hover:bg-[#F9FAFB]">Running only</button>
    <div class="my-1 border-t border-[#F1F1F1]"></div>
    <button class="flex w-full items-center px-4 py-2 text-sm text-[#CF3027]
                   hover:bg-[#FFEEEE]">Clear filters</button>
  </div>
</div>
```

## 4.25 Tooltip (hover, light)

```html
<span class="relative inline-block group">
  <button class="text-[#6B7280] hover:text-[#1F2937]"><!-- info icon --></button>
  <span class="invisible group-hover:visible absolute bottom-full left-1/2 -translate-x-1/2 mb-2
               whitespace-nowrap rounded-md bg-[#1F2937] px-2 py-1 text-xs text-white">
    AI-generated message preview
  </span>
</span>
```

## 4.26 Toggle switch

```html
<label class="relative inline-flex cursor-pointer items-center">
  <input type="checkbox" class="peer sr-only" />
  <div class="h-5 w-9 rounded-full bg-gray-300 peer-checked:bg-[#3657D5]
              after:absolute after:top-0.5 after:left-0.5
              after:h-4 after:w-4 after:rounded-full after:bg-white after:transition
              peer-checked:after:translate-x-4"></div>
</label>
```

## 4.27 Pagination

```html
<div class="flex items-center justify-between border-t border-[#F1F1F1] pt-4">
  <p class="text-sm text-[#6B7280]">Showing <strong>1-25</strong> of <strong>199</strong></p>
  <div class="flex items-center gap-1">
    <button class="rounded-md p-2 text-[#6B7280] hover:bg-[#F9FAFB] disabled:opacity-40"
            disabled><!-- chevron-left --></button>
    <button class="rounded-md px-3 py-1 text-sm font-medium bg-[#3657D5] text-white">1</button>
    <button class="rounded-md px-3 py-1 text-sm text-[#1F2937] hover:bg-[#F9FAFB]">2</button>
    <button class="rounded-md px-3 py-1 text-sm text-[#1F2937] hover:bg-[#F9FAFB]">3</button>
    <span class="px-2 text-sm text-[#6B7280]">…</span>
    <button class="rounded-md p-2 text-[#6B7280] hover:bg-[#F9FAFB]"><!-- chevron-right --></button>
  </div>
</div>
```

## 4.28 Stepper / wizard nav

```html
<div class="flex items-center gap-2">
  <div class="flex items-center gap-2">
    <div class="flex h-6 w-6 items-center justify-center rounded-full bg-[#3657D5] text-xs text-white">1</div>
    <span class="text-sm font-medium text-[#1F2937]">Choose channel</span>
  </div>
  <div class="h-px w-8 bg-[#F1F1F1]"></div>
  <div class="flex items-center gap-2">
    <div class="flex h-6 w-6 items-center justify-center rounded-full border border-[#F1F1F1] bg-white text-xs text-[#6B7280]">2</div>
    <span class="text-sm text-[#6B7280]">Add leads</span>
  </div>
  <div class="h-px w-8 bg-[#F1F1F1]"></div>
  <div class="flex items-center gap-2">
    <div class="flex h-6 w-6 items-center justify-center rounded-full border border-[#F1F1F1] bg-white text-xs text-[#6B7280]">3</div>
    <span class="text-sm text-[#6B7280]">Launch</span>
  </div>
</div>
```

## 4.29 Toast (inline)

```html
<div class="fixed top-6 right-6 z-50 flex w-96 items-start gap-3 rounded-[12px]
            border-l-4 border-[#16A34A] bg-white p-4 shadow-lg">
  <svg class="h-5 w-5 flex-shrink-0 text-[#16A34A]"><!-- check-circle --></svg>
  <div class="flex-1">
    <p class="text-sm font-medium text-[#1F2937]">Campaign launched</p>
    <p class="text-xs text-[#6B7280]">199 leads will start receiving messages.</p>
  </div>
  <button class="text-[#9CA3AF] hover:text-[#6B7280]">×</button>
</div>
```

## 4.30 Skeleton loader

```html
<div class="rounded-[12px] border border-[#F1F1F1] bg-white p-5">
  <div class="h-4 w-32 animate-pulse rounded bg-gray-200"></div>
  <div class="mt-3 h-8 w-20 animate-pulse rounded bg-gray-200"></div>
</div>
```

## 4.31 Inline alert banner

```html
<div class="flex items-start gap-3 rounded-t-[4px] bg-[#FFEEEE] p-4">
  <svg class="h-5 w-5 flex-shrink-0 text-[#B1140F] mt-0.5"><!-- alert --></svg>
  <p class="flex-1 text-sm text-[#B1140F]">
    Some LinkedIn accounts are disconnected. Replies may not send.
  </p>
  <button class="text-sm font-medium text-[#B1140F] underline">Connect channels</button>
</div>
```

## 4.32 Bar / line chart container

Use Recharts. Container pattern:

```jsx
<div className="rounded-[12px] border border-[#F1F1F1] bg-white p-5">
  <div className="mb-4 flex items-center justify-between">
    <h3 className="text-base font-medium text-[#04103B]">Replies over time</h3>
    <button className="text-sm text-[#6B7280] hover:text-[#1F2937]">Last 7 days ↓</button>
  </div>
  <ResponsiveContainer width="100%" height={240}>
    <LineChart data={data}>
      <CartesianGrid strokeDasharray="3 3" stroke="#F1F1F1" />
      <XAxis dataKey="date" stroke="#9CA3AF" fontSize={12} />
      <YAxis stroke="#9CA3AF" fontSize={12} />
      <Tooltip contentStyle={{ borderRadius: 8, border: '1px solid #F1F1F1' }} />
      <Line type="monotone" dataKey="replies" stroke="#3657D5" strokeWidth={2} dot={false} />
    </LineChart>
  </ResponsiveContainer>
</div>
```

Chart colors: primary `#3657D5`, success `#16A34A`, warning `#AD8516`, error `#CF3027`. Never rainbow palettes.

---

# PART 5: Page templates (page-level patterns)

When a request fits one of these, use the template. Do not invent layouts.

## 5.1 List-with-toolbar (Campaigns, Contacts, Knowledge Base)

```
[Tab strip if multiple lists]
[Toolbar: search left | filters middle | view toggle | primary CTA right]
[Grid or table]
[Pagination at bottom OR infinite scroll]
[Empty state replaces grid when zero items]
```

## 5.2 Detail-with-tabs (Campaign detail, Contact detail)

```
[Optional alert banner top]
[Header row: back link → entity name → status pill → action menu]
[KPI strip: 4-5 stat cards in a row]
[Tab strip: Overview | Activity | Settings | etc.]
[Tab content area]
```

## 5.3 Settings page (Settings, Profile)

```
[Sub-nav tab strip]
[Section heading + description]
[Form sections grouped by topic, divided by border-top]
[Save button: sticky bottom-right or inline at section bottom]
```

## 5.4 Wizard / multi-step flow (New campaign, Onboarding)

```
[Stepper top, current step highlighted]
[Single focused content area, generous whitespace]
[Footer: Back (ghost, left) | Continue (primary, right)]
[Progress preserved if user exits and returns]
```

## 5.5 Split-pane / master-detail (Chats, Inbox)

```
[Left pane: 26% min-width 210px, list with search at top]
[Right pane: flex-1, detail of selected item]
[Empty right pane state when nothing selected]
[Mobile: collapses to two screens with back nav]
```

## 5.6 Dashboard / analytics overview

```
[Greeting row: hello + date + filter controls]
[KPI grid: 2x2 or 4-across stat cards]
[Full-width primary chart]
[Secondary insight cards below]
```

## 5.7 AI input / chat surface (ICP Leads quick mode)

```
[Greeting line + brain icon]
[Suggestion chips horizontal scroll]
[Large textarea with send button bottom-right]
[Footer: disclaimer + counter]
```

## 5.8 Empty workspace / first-run

```
[Centered card, max-width 480px]
[Outcome-led title, not "Welcome"]
[One-line body explaining what to do]
[Primary CTA verb + noun]
[Optional secondary "Watch 2-min video" ghost link]
```

If a request does not fit any of these eight, propose a custom layout in the brief and justify it.

---

# PART 6: Voice rules

1. **"Sbl.so"** never "SBL" or "Second Brain Labs"
2. **No em-dashes.** Use periods, commas, or restructure.
3. **Sentence case** for every label, button, heading.
4. **Outcome-led copy.** "See first replies in 24 hours" beats "AI messaging engine".
5. **No over-selling.** No "powerful", "game-changing", "revolutionary".
6. **Empty states teach.** Title is outcome. Body is one line of what to do. CTA is verb + noun.
7. **Confirmations only when irreversible.** Title asks plainly. Body shows impact in numbers.

---

# PART 7: AI Slop detection (run this check before delivery)

These are tells that scream "AI made this." If any appear, the design is restarted, not patched.

```
COPY SLOP
- "Welcome!" / "Welcome to your dashboard" / any exclamation in product UI
- Lorem ipsum, "Sample text", "User Name", "Email Address" as actual content
- "Click here" / "Get started" without context
- Generic "No data available" empty states
- Robot / sparkle / rocket emoji in serious surfaces
- "Don't worry" / "Just" / "Simply" / "Unfortunately"
- Marketing adjectives in product UI (powerful, seamless, intuitive)

VISUAL SLOP
- Generic gradient on non-AI surfaces
- Identical card heights when content varies (forces visual lying)
- Perfect alignment with no semantic reason
- Center-aligned everything
- Constant gap regardless of meaning
- Stock isometric illustrations / 3D character / gradient blob
- Glassmorphism / neumorphism / heavy soft shadows
- Multiple competing CTAs of equal weight
- Every section has the same elevation
- Gauge / dial visualizations for non-gauge data

DATA SLOP
- Suspiciously round numbers (exactly 100 leads, exactly 50% reply rate)
- Made-up names that pattern-match ("John Smith", "Jane Doe")
- All sample emails at "@example.com" domain
- Status distributions that look fake (5 of each status)
- Rainbow chart palettes
- Gauge dials and skeuomorphic meters

STRUCTURE SLOP
- Sidebar AND breadcrumb AND page title all repeating the same word
- Nested cards (card inside card inside card)
- Tooltips that block screen content
- "Back to top" buttons in dashboards
- Unused secondary tabs ("Coming soon" tabs are different - those are intentional)
```

If a delivery hits any of these, restart that section. Do not paper over.

---

# PART 8: Quality rubric (10 dimensions, scored 0-10 each)

This replaces persona-based scoring. Each dimension has a real reference for what 10 looks like, so the scoring is calibrated to actual quality, not theatrical simulation.

| # | Dimension | What 10/10 looks like |
|---|---|---|
| 1 | **Clarity** — stranger understands in 5s | Linear's command palette: cmd+K opens, you know exactly what to do |
| 2 | **Hierarchy** — most important thing dominates | Stripe's dashboard: revenue is hero, supporting stats fade back |
| 3 | **Density** — information density right for the task | GitHub's PR view: dense without cramped |
| 4 | **Action** — primary action obvious and singular | Vercel's deploy button: impossible to miss |
| 5 | **States** — loading, empty, error all designed | Linear's empty inbox: empty state IS the welcome |
| 6 | **Mobile** — works on 375px without compromise | Apple Mail: no "mobile version" tax |
| 7 | **Voice** — copy matches the brand | Mailchimp microcopy: confident, never cute |
| 8 | **Tech-fit** — buildable from confirmed code | Stripe API docs match dashboard exactly |
| 9 | **Repurpose** — uses existing components properly | New Notion feature looks like it always existed |
| 10 | **Edge cases** — real-world failure modes handled | Gmail offline mode: never makes you think about it |

## Scoring rules

- Score honestly. 8 is good. 9 is rare. 10 is reference-quality.
- Default mode weights all 10 equally.
- Mode-specific weights:
  - NEW FEATURE: bias toward Clarity, Action, States
  - EXTEND: bias toward Repurpose, Voice, Tech-fit
  - POLISH: bias toward Hierarchy, Density, Mobile
  - TRIAGE: weight only the dimensions called out
  - PORT: bias toward Mobile, Edge cases, Tech-fit

## Pass threshold

- ≥80% average → ship
- 70-79% → identify the 3 lowest, find shared root cause, fix, re-score
- <70% → significant rework, return to brief
- 3 iterations max before flagging for human review

## Output format

```
RUBRIC SCORE: 84/100

Per dimension:
  Clarity      9/10 — Title is outcome-focused, primary action visible
  Hierarchy    8/10 — KPIs vs chart well separated
  Density      7/10 — Could tighten the metadata row
  Action       9/10 — One clear primary
  States       8/10 — Loading + empty + error all covered
  Mobile       7/10 — Tested at 375px, KPI grid stacks cleanly
  Voice        9/10 — Sentence case, outcome-led, no over-selling
  Tech-fit    10/10 — Maps directly to confirmed endpoints
  Repurpose    9/10 — Reuses campaign card, KPI card, pagination
  Edge cases   8/10 — LinkedIn disconnected handled, daily limit handled

Lowest 3 (Density 7, Mobile 7, Edge cases 8) share a root cause:
the metadata row gets cramped on small screens AND when channel
counts grow past 4. Fix: collapse channel chips to "+3 more" beyond 2.
```

---

# PART 9: Accessibility floor (every design respects these)

Not optional. Every output must pass these checks.

```
COLOR
[ ] Body text contrast ≥4.5:1 against background
[ ] Large text (18px+) contrast ≥3:1
[ ] Focus indicator contrast ≥3:1 against adjacent colors
[ ] Status not communicated by color alone (always icon + text + color)

KEYBOARD
[ ] Every interactive element reachable via Tab
[ ] Focus order matches visual order
[ ] Modals trap focus, return focus to trigger on close
[ ] Esc closes modals, dropdowns, menus
[ ] Enter submits forms; Cmd/Ctrl+Enter for textareas

SCREEN READER
[ ] Buttons have accessible names (text or aria-label)
[ ] Icons that ARE buttons have aria-label
[ ] Icons that are decoration have aria-hidden="true"
[ ] Form inputs have associated labels (not placeholders alone)
[ ] Status changes announced via aria-live (toast: polite; error: assertive)

TARGETS
[ ] Touch targets ≥44x44px on mobile
[ ] Click targets ≥24x24px on desktop
[ ] No reliance on hover for critical info on touch devices
```

---

# PART 10: Motion floor (animation guidelines)

```
DURATIONS
[ ] Hover states: 150ms
[ ] Component transitions (open/close): 200-250ms
[ ] Page transitions: 300ms max
[ ] Skeleton pulse: 1500ms loop

EASING
[ ] Entrances: ease-out
[ ] Exits: ease-in
[ ] Both directions: ease-in-out (for things that toggle, not appear/disappear)

REDUCED MOTION
[ ] All non-essential animations respect prefers-reduced-motion
[ ] Replace transforms with opacity changes when reduced
[ ] Skeleton pulse continues (it's loading state, essential)

WHAT TO ANIMATE
- Modal open/close (fade + scale)
- Toast in/out (slide + fade)
- Dropdown / menu (fade only)
- Loading skeletons (pulse)
- Status changes (color transition only)

WHAT NOT TO ANIMATE
- Page navigation (instant)
- Tab switches (instant)
- Form field focus (instant border change)
- Stat counters (no count-up animations - feels gimmicky on dashboards)
```

---

# PART 11: Required state coverage

Cover or note absence: default, loading (skeleton), empty (first-time, post-action, filtered), error, success, disabled, hover, focus, permission-denied.

Sbl.so-specific: connected-but-not-launched, LinkedIn/WhatsApp disconnected (alert banner), daily limit reached, lead extraction in progress, AI thinking, coming-soon (overlay or diagonal badge).

---

# PART 12: Confirmation decision tree

```
Reversible in <30s with one click?
  YES → do it, show undo toast (5-10s window)
  NO  → Affects 10+ items?
         YES → confirm with count
         NO  → Costs money or credits?
                YES → confirm
                NO  → Sends comms to a third party?
                       YES → confirm
                       NO  → do it
```

Confirmation copy: title asks plainly ("Stop this campaign?"), body states impact in numbers ("199 leads will stop receiving messages."), buttons are "Cancel" (ghost, left) and the destructive action (right, error variant).

---

# PART 13: Anti-patterns (consolidated)

Restart, do not patch, if any of these appear:

- Component invented when one exists in Part 4
- Layout invented when a Part 5 template fits
- Design assumes backend behavior that was not confirmed
- Features added beyond the brief without proposing first
- Shell chrome rendered when not asked
- Token from Part 3 substituted with an off-palette value
- Any AI Slop tell from Part 7
- Em-dashes anywhere
- "SBL" or "Second Brain Labs" instead of "Sbl.so"
- Title Case in any product copy
- Dark mode (Sbl.so is light only)

---

# PART 14: Output protocol

Order of operations is fixed. Each step has its own STOP condition.

```
1. Mode + Design brief (Part 1)
   STOP for forcing-question answers

2. Tech-grounded pre-flight (Part 2)
   STOP if any proposed addition is unanswered

3. Design rationale (3-5 lines: core decision + one trade-off)

4. Stack confirmation if not given
   Default: React + Tailwind, single-file artifact, fully responsive,
            DM Sans, Lucide icons

5. The design
   - Render only in-scope content
   - No shell chrome unless asked
   - Components copied verbatim from Part 4 (class → className for React)
   - Layout matches a Part 5 template or is justified as custom

6. AI Slop self-check (Part 7)
   If anything from the slop list is present, restart that section

7. Rubric scoring (Part 8)
   - Score all 10 dimensions
   - Apply mode-specific weights
   - If <80%, identify shared root cause across lowest 3, fix, re-score
   - Cap at 3 iterations

8. Accessibility + Motion check (Parts 9, 10)
   Briefly confirm both floors are met

9. Design diary (3-5 lines)
   - Alternatives considered and rejected
   - What was tweaked after rubric scoring
   - Open questions for the user
   - Any design debt flagged
```

---

# Final notes

- This skill is the source of truth. If unclear, ask. The Confusion Protocol overrides everything.
- Iron Laws are non-negotiable. Other rules can flex with explicit user override.
- Update tokens and code snippets here first, then propagate to code.
- The 10-dimension rubric replaces the 100-persona panel because LLMs cannot reliably simulate 100 distinct people but CAN score against 10 calibrated dimensions.
- If the user overrides a rule for a specific design, respect it but flag the deviation in the design diary.