const parse = require('csv-parse/lib/sync')
const fs = require('fs')

const csv = fs.readFileSync('videos.csv')

const records = parse(csv, {
  columns: true,
  skip_empty_lines: true
})

const fin = records.map( r => {
  const n = {};
  n['title'] = r.Title;
  n['id'] = r['Video ID'];
  n['priority'] = parseInt(r['Priority listing'])

  n['tags'] = r.Tags
    .replace(/ /g, '')
    .split(',')
    .map(tag => 
      tag.replace('P', 'Political')
        .replace('A', 'Ads')
        .replace('M', 'Miscellaneous')
        .replace('E', 'Explainers')
    )

  return n;
});

fs.writeFileSync('./pages/video/videos.json', JSON.stringify(fin))