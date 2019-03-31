export default function sortExtensionsByExtType(extensions) {
  const extTypeEnum = {
    DigitalUser: 0,
    VitrualUser: 1,
    FaxUser: 2,
    AO: 3,
    Dept: 4
  };
  return extensions.sort(
    (a, b) => extTypeEnum[a.extType] - extTypeEnum[b.extType]
  );
}
