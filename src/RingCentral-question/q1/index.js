export default function sortExtensionsByName(extensions) {
  return extensions.sort((a, b) => {
    const aSortValue = a.firstName + a.lastName + a.ext;
    const bSortValue = b.firstName + b.lastName + b.ext;

    return aSortValue === bSortValue ? 0 : aSortValue > bSortValue ? 1 : -1;
  });
}
