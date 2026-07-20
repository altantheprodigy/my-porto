const fs = require('fs');
let f = fs.readFileSync('app/page.tsx', 'utf8');
f = f.replace(/text-zinc-500 transition-colors duration-500 group-hover:text-\[([^\]]+)\]/g, 'text-[$1]');
fs.writeFileSync('app/page.tsx', f);
console.log("Done");
