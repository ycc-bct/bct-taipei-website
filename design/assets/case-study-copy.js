// Case-study headings and Research labels. Add locale dictionaries here; artwork remains language-neutral.
const caseStudyMessages = {
  "en": {
    "research-1": [
      "A learning adventure.",
      "A challenge to engage."
    ],
    "research-2": [
      "Turn friction",
      "into discovery."
    ],
    "research-3": [
      "Designed for",
      "continued discovery."
    ],
    "design-1": [
      "Complex data.",
      "Clear interfaces."
    ],
    "design-2": [
      "Many components.",
      "One shared language."
    ],
    "design-3": [
      "From screens to",
      "real interactions."
    ],
    "weekday-1": [
      "Hybrid team.",
      "Not enough desks."
    ],
    "weekday-2": [
      "Book a desk",
      "before you arrive."
    ],
    "weekday-3": [
      "Everyone",
      "has a seat."
    ]
  }
};
const caseStudyLabels = {
  "en": {
    "research-1-pain-1": "Hard-to-read text",
    "research-1-pain-2": "Inconsistent UI",
    "research-1-pain-3": "Rigid screen layouts",
    "research-1-pain-4": "Low motivation to explore",
    "research-2-step-1": "UX Research",
    "research-2-step-2": "Deep Focus",
    "research-2-step-3": "UI Design System",
    "research-3-value-1": "+40%",
    "research-3-label-1": "Time spent in app",
    "research-3-value-2": "4.8",
    "research-3-label-2": "User CSAT score"
  }
};
window.setCaseStudyLocale = function(locale = document.documentElement.lang) {
  const key = Object.keys(caseStudyMessages).find(key => key.toLowerCase() === locale.toLowerCase()) || locale.split('-')[0].toLowerCase();
  const messages = caseStudyMessages[key] || caseStudyMessages.en;
  const labels = caseStudyLabels[key] || caseStudyLabels.en;
  document.querySelectorAll('[data-label-key]').forEach(label => {
    label.textContent = labels[label.dataset.labelKey] || caseStudyLabels.en[label.dataset.labelKey];
    label.lang = caseStudyLabels[key] ? key : 'en';
  });
  document.querySelectorAll('.case-heading[data-copy-key]').forEach(heading => {
    const lines = messages[heading.dataset.copyKey] || caseStudyMessages.en[heading.dataset.copyKey];
    heading.lang = caseStudyMessages[key] ? key : 'en';
    heading.querySelectorAll('span').forEach((span, index) => { span.textContent = lines[index] || ''; });
  });
};
window.setCaseStudyLocale();
new MutationObserver(() => window.setCaseStudyLocale()).observe(document.documentElement, {attributes:true, attributeFilter:['lang']});
