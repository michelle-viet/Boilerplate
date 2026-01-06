/*
STYLE GUIDE: TYPE SCALE & SECTION NAMING
---------------------------------------

Typeface System:
----------------
.heading-xl   // Extra large heading (e.g. hero titles)
.heading-lg   // Large heading (e.g. section titles)
.heading-md   // Medium heading (e.g. sub-sections)
.heading-sm   // Small heading (e.g. card titles)
.body-lg      // Large body text (e.g. intro, lead)
.body-md      // Standard body text (default for paragraphs)
.body-sm      // Small body text (e.g. captions, labels)

Usage Example (HTML):
---------------------
<h1 class="heading-xl">Main Title</h1>
<h2 class="heading-lg">Section Title</h2>
<h3 class="heading-md">Subsection</h3>
<p class="body-md">Paragraph text here.</p>
<span class="body-sm">Caption or label</span>

Section/Layout Classes:
----------------------
.cs-section   // Generic section wrapper
.cs-grid      // Responsive grid layout
.cs-card      // Card-style container

Usage Example (HTML):
---------------------
<section class="cs-section">
  <div class="cs-grid">
    <div class="cs-card">
      <h2 class="heading-md">Card Title</h2>
      <p class="body-md">Card content...</p>
    </div>
  </div>
</section>

Best Practices:
---------------
- Use only the new type scale classes for all headings and body text.
- Use .cs-section, .cs-grid, .cs-card for layout/section structure.
- Remove any old, redundant type or layout classes from HTML and CSS.
- Keep class usage semantic and minimal for maintainability.

For more, see style.css for implementation details.
