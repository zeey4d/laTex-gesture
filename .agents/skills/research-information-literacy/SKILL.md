---
name: Research & Information Literacy Skills
description: Best practices and guidelines for conducting academic research, evaluating sources, synthesizing literature, formulating research methodology, and managing citations for a Final Year Project or academic paper.
---

# Research & Information Literacy Skills

Mastering research and information literacy is essential before writing any academic paper, especially a Final Year Project (FYP). These skills ensure that your work is built upon a credible, relevant, and well-synthesized foundation, structured logically using proven research methodologies.

## 1. Database Navigation and Advanced Search
Effectively querying academic databases saves time and yields highly relevant results.
- **Key Databases:** Utilize authoritative databases appropriate for your field, such as Google Scholar, IEEE Xplore, PubMed, Scopus, ACM Digital Library, and JSTOR.
- **Boolean Operators:** Use `AND`, `OR`, and `NOT` to narrow or broaden your search parameters.
  - *Example:* `"Machine Learning" AND ("Recommendation System" OR "Collaborative Filtering") NOT "Survey"`
- **Filters:** Restrict searches by publication year (usually the last 5 years is preferred for fast-moving fields like tech), document type (peer-reviewed journal articles, conferences), and citation count.

## 2. Source Evaluation & Literature Synthesis
Do not waste time reading every paper start-to-finish. Learn to triage literature efficiently.
- **The Skimming Strategy:** Read Title/Keywords $\rightarrow$ Abstract $\rightarrow$ Conclusion.
- **Credibility Check:** Ensure peer-review, verify venue reputation, and check author affiliations/citation metrics.
- **Literature Synthesis:** Group papers by methodology, findings, or viewpoints. Find the gap (contradictions, limitations) to justify your project's existence. Connect studies using transitional phrases.

## 3. Research Methodology Fundamentals (Based on C.R. Kothari)
When structuring the core of your FYP, adhere to established methodological frameworks to ensure validity and reliability. 

### A. Research Problem Formulation & Design
Before collecting data, clearly define what you are solving and how you will approach it.
- **Problem Definition:** Isolate the core issue. State unambiguous research objectives.
- **Research Design:** Determine if your study is:
  - *Exploratory:* Formulating a problem for more precise investigation.
  - *Descriptive/Diagnostic:* Describing characteristics of a specific individual, group, or situation.
  - *Hypothesis-Testing (Experimental):* Testing causal relationships between variables.

### B. Data Collection and Measurement
- **Primary vs. Secondary Data:** Determine if you need to generate new data (surveys, live system telemetry) or utilize existing datasets (e.g., Kaggle, RecSys datasets).
- **Measurement & Scaling:** Ensure that the metrics used to evaluate your system (e.g., Latency in ms, Click-Through Rate) are clearly defined, valid, and reliable.

### C. Data Processing, Analysis & Hypothesis Testing
- **Processing:** Clean, code, and tabulate the raw data.
- **Analysis:** Calculate relevant statistical measures (e.g., Mean Squared Error, Precision/Recall).
- **Hypothesis Testing:** Utilize appropriate tests (Parametric tests like ANOVA or t-tests; Non-parametric tests like Chi-square) to mathematically validate if your proposed architecture or algorithm represents a statistically significant improvement over the baseline.

## 4. Citation Management
Do not format references manually—it is incredibly prone to human error and wastes valuable time.
- **Use Reference Managers:** Adopt tools like **Mendeley**, **Zotero**, or **EndNote**.
- **Automate Workflows:** Use browser extensions to save metadata. Use LaTeX/BibTeX plugins (or Word integrations) to auto-generate in-text citations and your final bibliography in the required format (e.g., IEEE).
- **Verify Metadata:** Always double-check imported metadata (Author names, Title, Year) before finalizing.

## 5. Local Literature Repository (resors structure)
In this workspace, we maintain raw text versions of academic literature to facilitate quick research synthesis and AI context ingestion.
- **Path:** All key academic literature and references are stored under the `resors/refransess/` directory.
- **File Format:** Resources are converted from PDF into raw `.md` (Markdown) text files using extraction scripts.
- **Repository Contents:** This folder holds the extracted text for significant papers and comprehensive books, including *Research Methodology - Methods and Techniques (C.R. Kothari)* (`Research_Methodology_Extracted.md`).

When conducting reviews or answering project-specific inquiries, consult these local `.md` files directly. Other reference directories inside `resors` include `algotthems/` and `teck_stak/`.
