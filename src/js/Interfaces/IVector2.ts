export default interface IVector2 {
  x: number;
  y: number;

  minus(v: IVector2): IVector2;

  nor(): IVector2;

  rotate(theta: number): IVector2;

  toRadians(): number;
}
