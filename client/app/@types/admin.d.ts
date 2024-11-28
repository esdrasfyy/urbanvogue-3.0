import { ColorProductCreateI, GeneralProductCreateI, SizesProductCreateI } from "../entities/schemas.entitie";

declare namespace Admin {
  interface ColorsProductCreateProps {
    colors: ColorProductCreateI[];
    handleColors: (color: ColorProductCreateI) => void;
    removeColor: (index: number) => void;
    nextTabIndex: () => void;
  }
  interface SizesProductCreateProps {
    sizes: SizesProductCreateI[];
    handleSizes: (size: SizesProductCreateI) => void;
    removeSize: (index: number) => void;
  }
  interface ProductCreate extends GeneralProductCreateI {
    colors: ColorProductCreateI[];
    sizes: SizesProductCreateI[];
  }
}
