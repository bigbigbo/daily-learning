export default function getUnUsedKeys(allKeys, usedKeys) {
  if (!(Array.isArray(allKeys) && Array.isArray(usedKeys))) return [];

  return allKeys.filter(item => !usedKeys.includes(item));
}
