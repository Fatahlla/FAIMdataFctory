export function DataProcessDatasetView(raw) {
  let res;

  let snap = { ...raw };

  let keys = Object.keys(snap?.data);
  let data = [];
  let distributions = {};

  let n = Object.keys(snap?.data?.[keys[0]])?.length;

  for (let i = 0; i < n; i++) {
    let obj = {};
    for (let key of keys) {
      obj[key] = snap?.data?.[key]?.[i];
    }
    data.push(obj);
  }

  for (let key of keys) {
    let aod = [];
    let names = Object.keys(snap?.distribution?.[key]);
    let values = Object.values(snap?.distribution?.[key]);
    for (let i = 0; i < names.length; i++) {
      aod.push({ name: names[i], value: values[i] });
    }
    distributions[key] = aod;
  }

  res = { ...snap, keys, data, distributions };
  //   res = raw;

  return res;
}
