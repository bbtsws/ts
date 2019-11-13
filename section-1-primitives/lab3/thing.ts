
export interface Thing1 {
  stringField: string;
  numberField: number;
  optionalField?: boolean;
}

class Thing2 {
  static createThing2(num: number, str: string, priv: Thing1 = null) {
    return new Thing2(num, str, priv);
  }

  public num: number;
  public str: string;
  private priv: Thing1;

  public constructor(num: number, str: string, priv: Thing1) {
    this.num = num;
    this.str = str;
    this.priv = priv;
  }

  getPriv(): Thing1 {
    return this.priv;
  }
}

export default Thing2;
