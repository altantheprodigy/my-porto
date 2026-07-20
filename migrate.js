const fs = require('fs');
const path = require('path');

const replacements = [
  { search: /text-white/g, replace: "text-zinc-900" },
  { search: /bg-hitam-utama/g, replace: "bg-white" },
  { search: /bg-white\/5/g, replace: "bg-zinc-50" },
  { search: /border-white\/10/g, replace: "border-zinc-200" },
  { search: /border-white\/5/g, replace: "border-zinc-100" },
  { search: /text-zinc-400/g, replace: "text-zinc-500" },
  { search: /text-zinc-300/g, replace: "text-zinc-600" },
  { search: /text-zinc-200/g, replace: "text-zinc-700" },
  { search: /bg-black\/50/g, replace: "bg-zinc-100" },
  { search: /bg-black\/40/g, replace: "bg-white/50" },
  { search: /bg-black\/80/g, replace: "bg-white/90" },
  { search: /brand-green/g, replace: "brand-blue" },
  { search: /bg-\[\#0a1120\]/g, replace: "bg-zinc-100" },
  { search: /from-\[\#0a1120\]/g, replace: "from-zinc-100" },
  { search: /to-\[\#0a1120\]/g, replace: "to-zinc-100" },
  { search: /bg-\[\#121c2d\]/g, replace: "bg-white" },
  { search: /amber-500/g, replace: "brand-blue" },
  { search: /amber-400/g, replace: "brand-blue" },
  { search: /bg-bg-card/g, replace: "bg-white" },
];

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(function(file) {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) { 
      results = results.concat(walk(file));
    } else { 
      if (file.endsWith('.tsx')) {
        results.push(file);
      }
    }
  });
  return results;
}

const files = [...walk('app'), ...walk('components')];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  replacements.forEach(r => {
    content = content.replace(r.search, r.replace);
  });
  
  // Specific fixes for navbar sticky background:
  content = content.replace(/bg-hitam-utama\/70/g, 'bg-white/80');
  
  fs.writeFileSync(file, content);
  console.log(`Processed ${file}`);
});
