import IVector2 from "./IVector2";

export default interface IActorSpriteComponent {
  getSheetName(): string;

  getSource(): IVector2;

  getSize(): IVector2;

  getOrigin(): IVector2;
}
