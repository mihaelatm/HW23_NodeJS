// task 1

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

//  task 2

async function processStrings(strings: string[]): Promise<string[]> {
  const promises = strings.map(
    (str) =>
      new Promise<string>((resolve) => {
        setTimeout(() => resolve(str.toUpperCase()), 1000);
      })
  );
  return await Promise.all(promises);
}

async function testProcessStrings() {
  const strings = ["hello", "typescript", "nodejs"];
  const result = await processStrings(strings);
  console.log(result);
}

testProcessStrings();

// task 3

function delay(ms: number): Promise<string> {
  return new Promise((resolve) =>
    setTimeout(() => resolve(`Completed after ${ms} ms`), ms)
  );
}

async function handleErrorInPromises() {
  const promise1 = delay(1000);
  const promise2 = delay(2000);
  const promise3 = new Promise<string>((_, reject) =>
    setTimeout(() => reject("Error in Promise 3"), 1500)
  );

  try {
    const results = await Promise.all([promise1, promise2, promise3]);
    console.log(results);
  } catch (error) {
    console.error(`Caught error: ${error}`);
  }
}

handleErrorInPromises();

// task 4

async function dynamicDelay(numbers: number[]) {
  const promises = numbers.map(
    (num) =>
      new Promise<string>((resolve) =>
        setTimeout(() => resolve(`Resolved after ${num} ms`), num)
      )
  );
  const results = await Promise.all(promises);
  console.log(results);
}

dynamicDelay([1000, 2000, 1500]);
