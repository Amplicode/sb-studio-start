export const age = 123224;

export const toCase = () => {
  return age;
}

export class User {
  id: number | undefined;
  private name: string = 'test';

  greet() {
    return `Hello, ${this.name}`;
  }
}

function process(data: string) {
  const trimmed = data.trim();
  const upper = trimmed.toUpperCase();
  return upper;
}