const fs = require('fs');
const vm = require('vm');
const path = require('path');
const root = path.resolve(__dirname);
const appFile = path.join(root, 'walnut-prodigy-app.js');
const text = fs.readFileSync(appFile, 'utf8');
function extractObjectBlock(source, marker) {
  const startIndex = source.indexOf(marker);
  if (startIndex === -1) {
    throw new Error(`Could not find marker: ${marker}`);
  }

  const objectStart = source.indexOf('{', startIndex + marker.length);
  if (objectStart === -1) {
    throw new Error(`Could not find opening brace after marker: ${marker}`);
  }

  let depth = 0;
  let inString = false;
  let stringChar = '';
  let escaped = false;
  for (let i = objectStart; i < source.length; i += 1) {
    const ch = source[i];
    if (escaped) {
      escaped = false;
      continue;
    }
    if (ch === '\\') {
      escaped = true;
      continue;
    }
    if (inString) {
      if (ch === stringChar) {
        inString = false;
        stringChar = '';
      }
      continue;
    }
    if (ch === '"' || ch === "'" || ch === '`') {
      inString = true;
      stringChar = ch;
      continue;
    }
    if (ch === '{') {
      depth += 1;
      continue;
    }
    if (ch === '}') {
      depth -= 1;
      if (depth === 0) {
        return source.slice(objectStart, i + 1).trim();
      }
    }
  }
  throw new Error(`Unable to match braces for marker: ${marker}`);
}

const sectionsText = extractObjectBlock(text, 'const sections = ');
const buddyText = extractObjectBlock(text, 'const buddyLines = ');
const sandbox = {}; 
vm.createContext(sandbox);
const script = `const sections = ${sectionsText};\nconst buddyLines = ${buddyText};`;
try {
  vm.runInContext(script, sandbox);
} catch (err) {
  throw new Error('Failed to execute JS data object: ' + err.message);
}
const data = { sections: sandbox.sections, buddyLines: sandbox.buddyLines };
fs.writeFileSync(path.join(root, 'walnut-prodigy-data.json'), JSON.stringify(data, null, 2), 'utf8');
console.log('walnut-prodigy-data.json created');
