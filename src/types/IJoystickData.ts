export interface IJoystickData {
  left: boolean;
  right: boolean;
  up: boolean;
  down: boolean;
}

export let joystickInitData: IJoystickData = {
  left: false,
  right: false,
  up: false,
  down: false,
};
