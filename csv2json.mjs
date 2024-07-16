import { parse } from 'csv/sync'
import { readFileSync, writeFileSync } from 'fs'

const csv = readFileSync('videos.csv')

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
      tag
        .replace('T', 'Tech')
        .replace('P', 'Political')
        .replace('A', 'Ads')
        .replace('M', 'Miscellaneous')
        .replace('E', 'Explainers')
    )

  return n;
});

writeFileSync('./pages/video/videos.json', JSON.stringify(fin))