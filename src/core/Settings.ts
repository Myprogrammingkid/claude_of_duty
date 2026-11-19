export interface Settings {
  /** 1..10 */
  sensitivity: number;
  /** Multiplier applied while aiming down sights. */
  adsSensitivity: number;
  /** Horizontal field of view in degrees. */
  fov: number;
  /** 0..1 */
  volume: number;
  invertY: boolean;
  showFps: boolean;
  shadows: boolean;
}

const KEY = 'claude-of-duty.settings';

const defaults: Settings = {
  sensitivity: 5,
  adsSensitivity: 0.85,
  fov: 90,
  volume: 0.7,
  invertY: false,
  showFps: false,
  shadows: true,
};

function load(): Settings {
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) return { ...defaults, ...(JSON.parse(raw) as Partial<Settings>) };
  } catch {
    // storage unavailable (private mode etc.) — fall back to defaults
  }
  return { ...defaults };
}

export const settings: Settings = load();

export function saveSettings(): void {
  try {
    localStorage.setItem(KEY, JSON.stringify(settings));
  } catch {
    // ignore
  }
}
