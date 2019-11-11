
export interface ContrivedObject {
  stringField: string;
  numberField: number;
  optionalField?: boolean;
}

class ContrivedClass {
  static createContrivedClass(num: number, str: string, priv: ContrivedObject = null) {
    return new ContrivedClass(num, str, priv);
  }

  public num: number;
  public str: string;
  private priv: ContrivedObject;

  public constructor(num: number, str: string, priv: ContrivedObject) {
    this.num = num;
    this.str = str;
    this.priv = priv;
  }

  getPriv(): ContrivedObject {
    return this.priv;
  }
}

export default ContrivedClass;
