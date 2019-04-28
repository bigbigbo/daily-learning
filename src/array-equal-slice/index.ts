export default function arrayEqualSlice<T>(arr: T[], len : number): T[] {
  const result = [];
  
  while(arr.length > 0) {
    result.push(arr.splice(0, len));
  }
  
  return result;
}