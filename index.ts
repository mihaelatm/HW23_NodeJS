function delay(ms: number): Promise<string> {
  return new Promise((resolve) =>
    setTimeout(() => resolve(`Completed after ${ms} ms`), ms)
  );
}

async function processPromisesSequentially() {
  const result1 = await delay(1000);
  console.log(result1);

  const result2 = await delay(2000);
  console.log(result2);

  const result3 = await delay(1500);
  console.log(result3);
}

processPromisesSequentially();
