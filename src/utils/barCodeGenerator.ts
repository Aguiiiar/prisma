function bar_code(): string {
  let pin: string = "";
  let gen: string = "0123456789";
  for (let i = 0; i < 10; i++) {
    pin += gen.charAt(Math.floor(Math.random() * gen.length));
  }
  return pin;
}

export default bar_code;
