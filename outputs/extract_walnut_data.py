from pathlib import Path
import json
import ast

root = Path(__file__).resolve().parent
app_file = root / 'walnut-prodigy-app.js'
html_file = root / 'walnut-prodigy-style-prototype.html'

text = app_file.read_text(encoding='utf8')
sections_text = text.split('const sections = ', 1)[1].split('\n\n    const buddyLines =', 1)[0].strip()
buddy_text = text.split('const buddyLines = ', 1)[1].split('\n\n    let currentSection =', 1)[0].strip()
sections = ast.literal_eval(sections_text)
buddyLines = ast.literal_eval(buddy_text)

data = {'sections': sections, 'buddyLines': buddyLines}
(root / 'walnut-prodigy-data.json').write_text(json.dumps(data, indent=2), encoding='utf8')
print('created: ' + str(root / 'walnut-prodigy-data.json'))
