const subjects = [
  'request',
  'zombie',
  'phantom',
  'nightmare',
].map(name => ({ name, fn: require('./' + name) }));

async function runOnce() {
  const result = {};
  for (let i = 0; i < subjects.length; i++) {
    const { name, fn } = subjects[i];
    const start = new Date();
    await fn();
    const end = new Date();
    result[name] = end - start;
  }
  return result;
}

async function runNTimes(n) {
  const total = {}
  for (let i = 1; i <= n; i++) {
    const result = await runOnce();
    console.log('Run', i, result);
    for (const key in result) {
      total[key] = (total[key] || 0) + result[key];
    }
  }
  const average = {}
  for (const key in total) {
    average[key] = parseInt(total[key] / n, 10)
  }
  return average;
}

runNTimes(5).then(result => console.log('Average:', result));
