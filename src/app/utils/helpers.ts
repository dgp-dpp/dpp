export function assign(obj: any, prop: any, value: any) {
  obj[prop] = value;
}

export function isSSR() {
  return typeof window === 'undefined';
}