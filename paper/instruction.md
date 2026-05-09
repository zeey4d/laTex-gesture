# Compilation Instructions

Because MiKTeX is not currently in your system's PATH environment variable, running `pdflatex` directly will result in a "CommandNotFoundException". 

To successfully compile your LaTeX files from the terminal, you need to use the full, absolute path to the `pdflatex.exe` executable.

### How to Compile `first_draft.tex`

Run the following command in your PowerShell terminal (ensure your current directory is `paper\latex`):

```powershell
& "C:\Users\ahmed\AppData\Local\Programs\MiKTeX\miktex\bin\x64\pdflatex.exe" first_draft.tex
```

*(The `&` symbol is required in PowerShell to execute a command from a string containing spaces).*

### Complete Compilation (Cross-References & TOC)

LaTeX requires multiple passes to properly calculate page numbers, cross-references, and build the Table of Contents. You should run the command **twice** to ensure everything is up to date:

```powershell
& "C:\Users\ahmed\AppData\Local\Programs\MiKTeX\miktex\bin\x64\pdflatex.exe" first_draft.tex; & "C:\Users\ahmed\AppData\Local\Programs\MiKTeX\miktex\bin\x64\pdflatex.exe" first_draft.tex
```

