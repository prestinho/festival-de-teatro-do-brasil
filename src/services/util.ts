export const isValidLink = (link: string | undefined): boolean => {
  var regexQuery =
    /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;
  var url = new RegExp(regexQuery, "g");

  if (link && url.test(link)) {
    return true;
  }
  return false;
};

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function waitFor(fn: any, timeout = 500): Promise<void> {
  const step = 10;
  let timeSpent = 0;
  let timedOut = false;

  while (true) {
    try {
      await sleep(step);
      timeSpent += step;
      fn();
      break;
    } catch {}
    if (timeSpent >= timeout) {
      timedOut = true;
      break;
    }
  }

  // if (timedOut) {
  //   new Error("timeout");
  // }
}
