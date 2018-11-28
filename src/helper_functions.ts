export function generate_array(fn: Function, source_data: any[]): any[] {
  let output_array: any[] = [];
  return source_data.map(data => output_array.push(fn(data)));
}
