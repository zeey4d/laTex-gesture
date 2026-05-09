---
name: IEEE-Compliant LaTeX Formatting
description: Guidelines and best practices for writing, formatting, and compiling IEEE-compliant Final Year Project (FYP) papers in LaTeX, based on departmental Project_Guidelines.pdf.
---

# IEEE-Compliant LaTeX Formatting

This skill provides the authoritative formatting rules, document structure, and LaTeX best practices for producing an IEEE-compliant Final Year Project (FYP) report. All rules are derived from the departmental `Project_Guidelines.pdf`.

## 1. Document Class & Core Setup

Always use the `report` document class for FYP papers (it provides `\chapter`).

```latex
\documentclass[12pt,a4paper]{report}
```

### 1.1 Required Packages

| Package | Purpose |
|---|---|
| `inputenc` (utf8) | Unicode character support |
| `fontenc` (T1) | Proper font encoding |
| `times` | Times New Roman (mandatory per guidelines) |
| `geometry` | Margin control (binding margin rule) |
| `setspace` | Double spacing |
| `titlesec` | Chapter/section title formatting |
| `booktabs`, `longtable`, `tabularx`, `array` | IEEE-standard tables |
| `hyperref` | Clickable cross-references and URLs |
| `amsmath` | Mathematical typesetting |
| `graphicx` | Figures and images |
| `tocbibind` | Include LoF/LoT in TOC |
| `caption` | IEEE-style captions |
| `url` | URL formatting in references |
| `fancyhdr` | Page headers/footers |

### 1.2 Margins (The "Golden Rule" — Binding Margin)

The left margin MUST be 1.5 inches for hardcover case binding. All other margins are 1.0 inch.

```latex
\usepackage[
  left=1.5in,    % Binding side — CRITICAL
  top=1.0in,
  bottom=1.0in,
  right=1.0in
]{geometry}
```

### 1.3 Font Rules

- **Font:** Times New Roman (use `\usepackage{times}`)
- **Body text:** 12pt
- **Title page title:** 20–24pt, Bold, Centered
- **Title page names/university:** 14–16pt, Bold, Centered
- **Everything on the cover:** Bold and centered

### 1.4 Spacing

- **Body text:** Double spacing (`\doublespacing` from `setspace`)
- **Block quotes, footnotes, long tables:** May use single spacing
- **References:** Single spacing within each entry, double spacing between entries

## 2. Document Structure (Mandatory Order)

The FYP paper is divided into **three parts**. Follow this exact order:

### Part 1: Front Matter (Preliminary Pages)
Numbered with **Roman numerals** (i, ii, iii...). Use `\pagenumbering{roman}`.

| # | Component | Status | Est. Length |
|---|-----------|--------|-------------|
| 1 | Cover / Title Page | **Mandatory** | 1 page |
| 2 | Declaration of Originality | **Mandatory** | 1 page |
| 3 | Approval / Certification Page | **Mandatory** | 1 page |
| 4 | Dedication | Optional | < 1 page |
| 5 | Acknowledgements | Optional | 0.5–1 page |
| 6 | Abstract | **Mandatory** | 150–250 words (max 1 page) |
| 7 | Table of Contents | **Mandatory** | 2–3 pages (auto-generated) |
| 8 | List of Figures | **Mandatory** (if figures exist) | 1 page |
| 9 | List of Tables | **Mandatory** (if tables exist) | 1 page |
| 10 | List of Abbreviations | **Mandatory** (if acronyms used) | 1–2 pages |
| 11 | Glossary | Optional | 1–2 pages |
| 12 | List of Symbols | Optional | 1 page |

### Part 2: Main Body (The Chapters)
Switch to **Arabic numerals** (1, 2, 3...). Use `\pagenumbering{arabic}`.

| Chapter | Title | Status | Est. Length | Focus |
|---------|-------|--------|-------------|-------|
| 1 | Introduction | **Mandatory** | 5–8 pages (~1,500–2,000 words) | Background, Problem Statement, Objectives, Questions/Hypotheses, Scope, Significance |
| 2 | Literature Review | **Mandatory** | 10–15 pages (~3,000–4,500 words) | Theoretical Framework, Review of Past Research, Research Gap. Deep dive into IEEE Xplore papers. |
| 3 | Methodology | **Mandatory** | 8–12 pages (~2,500–3,500 words) | Research Design, Data Collection, Tools/Materials, Procedures. Detailed enough to replicate. |
| 4 | Results / Findings | **Mandatory** | 10–20 pages (many charts/tables) | Pure data presentation. IEEE-standard formatting for all graphs and tables. |
| 5 | Discussion | **Mandatory** | 5–10 pages (~1,500–3,000 words) | Interpretation, Comparison with Chapter 2 literature. Critical analysis of why the numbers look the way they do. |
| 6 | Conclusion & Recommendations | **Mandatory** | 3–5 pages (~800–1,200 words) | Summary of Findings, Limitations, Future Work. No new data. |

### Part 3: Back Matter (Postliminary Pages)

| Component | Status | Est. Length |
|-----------|--------|-------------|
| References / Bibliography | **Mandatory** | 3–6 pages (min. 20–30 sources) |
| Appendices | Optional | As needed (code, raw data, surveys) |
| Index | Optional | 1–2 pages |

## 3. LaTeX Implementation Rules

### 3.1 Front Matter Pages

Use `\chapter*{}` (unnumbered) for all front matter sections, and manually add them to the TOC:

```latex
\chapter*{DECLARATION}
\addcontentsline{toc}{chapter}{Declaration}
```

### 3.2 Page Numbering Transition

```latex
% Front matter — Roman numerals
\pagenumbering{roman}
% ... all front matter content ...

% Before Chapter 1 — switch to Arabic
\pagenumbering{arabic}
\chapter{INTRODUCTION}
```

### 3.3 Chapter Title Formatting

Chapter titles should be uppercase, bold, centered, and prefixed with "CHAPTER X":

```latex
\titleformat{\chapter}[display]
  {\normalfont\huge\bfseries\centering}
  {CHAPTER \thechapter}
  {0pt}
  {\Huge}
```

### 3.4 Tables (IEEE Standard)

- Every table MUST have a caption placed **above** the table
- Use `\caption{}` before the tabular environment
- Use `booktabs` rules (`\toprule`, `\midrule`, `\bottomrule`) for clean IEEE-style lines
- Reference every table in the text: `Table~\ref{tab:label}`

```latex
\begin{table}[htbp]
\centering
\caption{Description of the table}
\label{tab:example}
\begin{tabularx}{\textwidth}{|l|X|X|}
\hline
\textbf{Column 1} & \textbf{Column 2} & \textbf{Column 3} \\
\hline
Data & Data & Data \\
\hline
\end{tabularx}
\end{table}
```

### 3.5 Figures (IEEE Standard)

- Every figure MUST have a caption placed **below** the figure
- Reference every figure in the text: `Figure~\ref{fig:label}`

```latex
\begin{figure}[htbp]
\centering
\includegraphics[width=0.8\textwidth]{filename}
\caption{Description of the figure}
\label{fig:example}
\end{figure}
```

### 3.6 References (IEEE Format)

Use IEEE citation style — numbered references in square brackets `[1]`. In LaTeX, use `thebibliography` or BibTeX with `IEEEtran.bst`:

```latex
\bibliographystyle{IEEEtran}
\bibliography{references}
```

Or manually with `thebibliography`:

```latex
\begin{thebibliography}{99}
\bibitem{key} Author, "Title," \textit{Journal}, vol. X, no. Y, pp. Z, Year.
\end{thebibliography}
```

IEEE reference format rules:
- **Books:** Author(s), *Title*, Edition. City: Publisher, Year.
- **Journal articles:** Author(s), "Title," *Journal*, vol., no., pp., Month Year.
- **Conference papers:** Author(s), "Title," in *Proc. Conference Name*, City, Year, pp.
- **Websites:** Author/Org, "Title." URL (accessed: Month Day, Year).

### 3.7 Equations

Number all significant equations and reference them in text:

```latex
\begin{equation}
\label{eq:example}
E = mc^2
\end{equation}
As shown in Equation~\eqref{eq:example}...
```

## 4. Compilation Instructions

### 4.1 MiKTeX on Windows

If `pdflatex` is not in PATH, use the full path:

```powershell
& "C:\Users\<user>\AppData\Local\Programs\MiKTeX\miktex\bin\x64\pdflatex.exe" -interaction=nonstopmode main.tex
```

### 4.2 Always compile TWICE for cross-references

```powershell
pdflatex main.tex
pdflatex main.tex
```

The first pass generates `.aux` files; the second pass resolves all `\ref`, `\cite`, TOC, LoF, and LoT entries.

### 4.3 If using BibTeX, compile FOUR times

```powershell
pdflatex main.tex
bibtex main
pdflatex main.tex
pdflatex main.tex
```

## 5. Case Binding Cover Specifications

For the final printed/bound version:

| Element | Standard |
|---------|----------|
| Cover Background | Navy Blue or Black (Engineering/IT uses Navy Blue) |
| Cover Text | Gold or Silver foil-stamped |
| Cover Font | Times New Roman, Bold, Centered |
| Title Size | 20–24pt |
| Names/University | 14–16pt |
| Binding Type | Casebound Hardcover with French Groove |

## 6. Quality Checklist

Before final submission, verify:

- [ ] Left margin is 1.5 inches (binding margin)
- [ ] Font is Times New Roman 12pt throughout body
- [ ] Double spacing in body text
- [ ] Front matter uses Roman numeral page numbers
- [ ] Main body uses Arabic numeral page numbers
- [ ] All 6 mandatory chapters are present
- [ ] All tables have captions above and are referenced in text
- [ ] All figures have captions below and are referenced in text
- [ ] Minimum 20–30 references in IEEE format
- [ ] Abstract is 150–250 words
- [ ] TOC, List of Figures, and List of Tables are auto-generated
- [ ] No new data introduced in Chapter 6 (Conclusion)
- [ ] PDF compiles without errors (warnings are acceptable)

## 7. Template

A ready-to-use IEEE-compliant FYP LaTeX template is available at:
`templates/main.tex` — Main document with preamble and front matter
`templates/chapters.tex` — All 6 chapters skeleton

> **Important:** When generating or editing LaTeX for this project, ALWAYS follow the margin, font, structure, and formatting rules defined in this skill. The `Project_Guidelines.pdf` is the single source of truth.
