export default function arrayEqualSlice(arr: number[], len : number): number[] {
  const result = [];
  
  while(arr.length > 0) {
    result.push(arr.splice(0, len));
  }
  
  return result;
}