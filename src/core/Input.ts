/**
 * Keyboard/mouse state with per-frame edge detection and pointer lock.
 * Keys are KeyboardEvent.code values ("KeyW", "Space", ...).
 */
export class Input {
  private keys = new Set<string>();
  private pressed = new Set<string>();
  private buttons = new Set<number>();
  private pressedButtons = new Set<number>();
  private releasedButtons = new Set<number>();
  mouseDX = 0;
  mouseDY = 0;
  wheel = 0;
  locked = false;
  onLockChange: ((locked: boolean) => void) | null = null;
  /** Called on keydown for keys that should work while unlocked (Escape, Tab ...). */
  onKey: ((code: string) => void) | null = null;

  constructor(private readonly element: HTMLElement) {
    window.addEventListener('keydown', (e) => {
      if (this.locked && (e.code === 'Tab' || e.code === 'Space' || e.code.startsWith('Arrow') || e.code === 'F3')) {
        e.preventDefault();
      }
      if (!e.repeat) {
        this.pressed.add(e.code);
        this.onKey?.(e.code);
      }
      this.keys.add(e.code);
    });
    window.addEventListener('keyup', (e) => this.keys.delete(e.code));
    window.addEventListener('blur', () => {
      this.keys.clear();
      this.buttons.clear();
    });
    element.addEventListener('mousedown', (e) => {
      if (!this.locked) return;
      this.buttons.add(e.button);
      this.pressedButtons.add(e.button);
    });
    window.addEventListener('mouseup', (e) => {
      if (this.buttons.delete(e.button)) this.releasedButtons.add(e.button);
    });
    element.addEventListener('contextmenu', (e) => e.preventDefault());
    window.addEventListener('mousemove', (e) => {
      if (!this.locked) return;
      // Some browsers emit huge spikes on lock; discard them.
      if (Math.abs(e.movementX) > 400 || Math.abs(e.movementY) > 400) return;
      this.mouseDX += e.movementX;
      this.mouseDY += e.movementY;
    });
    window.addEventListener(
      'wheel',
      (e) => {
        if (this.locked) this.wheel += Math.sign(e.deltaY);
      },
      { passive: true },
    );
    document.addEventListener('pointerlockchange', () => {
      this.locked = document.pointerLockElement === this.element;
      if (!this.locked) {
        this.buttons.clear();
        this.keys.clear();
      }
      this.onLockChange?.(this.locked);
    });
  }

  requestLock(): void {
    try {
      const result = this.element.requestPointerLock() as unknown as Promise<void> | undefined;
      result?.catch?.(() => undefined);
    } catch {
      // ignore — user must click again
    }
  }

  exitLock(): void {
    if (document.pointerLockElement) document.exitPointerLock();
  }

  down(code: string): boolean {
    return this.keys.has(code);
  }

  wasPressed(code: string): boolean {
    return this.pressed.has(code);
  }

  mouseDown(button: number): boolean {
    return this.buttons.has(button);
  }

  mousePressed(button: number): boolean {
    return this.pressedButtons.has(button);
  }

  mouseReleased(button: number): boolean {
    return this.releasedButtons.has(button);
  }

  endFrame(): void {
    this.pressed.clear();
    this.pressedButtons.clear();
    this.releasedButtons.clear();
    this.mouseDX = 0;
    this.mouseDY = 0;
    this.wheel = 0;
  }
}
