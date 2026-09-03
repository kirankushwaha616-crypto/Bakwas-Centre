const fs = require('fs');
let code = fs.readFileSync('src/certificateTemplates.js', 'utf8');

// Add photoUrl to function signature
code = code.replace(
  'export function renderCertificateHTML(degreeTitle, candidateName, customSigner, certId, certDate) {',
  'export function renderCertificateHTML(degreeTitle, candidateName, customSigner, certId, certDate, photoUrl) {\n  const photoHTML = photoUrl ? `\\n    <div class="absolute top-4 right-4 sm:top-8 sm:right-8 w-20 h-24 sm:w-24 sm:h-28 rounded border-4 shadow-md bg-white z-10 overflow-hidden opacity-95" style="border-color: inherit">\\n      <img src="${photoUrl}" alt="Candidate Photo" class="w-full h-full object-cover" />\\n    </div>\\n  ` : "";'
);

// Inject ${photoHTML} right after the root <div class="..."> for each template
code = code.replace(/(<div class="[^"]+"[^>]*>)/g, (match) => {
  if (match.includes('shadow-xl') || match.includes('shadow-2xl') || match.includes('shadow-lg')) {
    return match + '\n        ${photoHTML}';
  }
  return match;
});

fs.writeFileSync('src/certificateTemplates.js', code);
