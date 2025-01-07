export interface Keycap {
    brand: string;
    material: string;
    process: string;
  }
  
  export interface Keyboard {
    id: string;
    name: string;
    switchType: string;
    caseType: string;
    pcbType: string;
    keyboardType: string;
    ergonomic: boolean;
    keycaps: Keycap;
    backlight: string;
  }
  