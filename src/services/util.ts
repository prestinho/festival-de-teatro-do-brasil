export const isValidLink = (link: string | undefined): boolean => {
  var regexQuery =
    /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;
  var url = new RegExp(regexQuery, "g");

  if (link && url.test(link)) {
    return true;
  }
  return false;
};
