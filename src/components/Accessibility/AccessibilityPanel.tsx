import React, { useState, useEffect } from 'react';
import { Eye, EyeOff, Type, Contrast, Volume2, Keyboard } from 'lucide-react';

interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  screenReader: boolean;
  keyboardNavigation: boolean;
  audioDescriptions: boolean;
  fontSize: number;
  colorBlindMode: 'none' | 'protanopia' | 'deuteranopia' | 'tritanopia';
}

const AccessibilityPanel: React.FC = () => {
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    screenReader: false,
    keyboardNavigation: true,
    audioDescriptions: false,
    fontSize: 16,
    colorBlindMode: 'none'
  });

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const root = document.documentElement;

    if (settings.highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }

    if (settings.largeText) {
      root.style.fontSize = `${settings.fontSize}px`;
    } else {
      root.style.fontSize = '16px';
    }

    if (settings.reducedMotion) {
      root.style.setProperty('--animation-duration', '0s');
      root.style.setProperty('--transition-duration', '0s');
    } else {
      root.style.removeProperty('--animation-duration');
      root.style.removeProperty('--transition-duration');
    }

    if (settings.colorBlindMode !== 'none') {
      root.classList.add(`color-blind-${settings.colorBlindMode}`);
    } else {
      root.classList.remove('color-blind-protanopia');
      root.classList.remove('color-blind-deuteranopia');
      root.classList.remove('color-blind-tritanopia');
    }

  }, [settings]);

  return (
    <div className="accessibility-panel">
      <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? 'Close Accessibility Settings' : 'Open Accessibility Settings'}
      </button>

      {isOpen && (
        <div className="panel-content">
          <h2>Accessibility Settings</h2>

          <label>
            <input
              type="checkbox"
              checked={settings.highContrast}
              onChange={(e) =>
                setSettings({ ...settings, highContrast: e.target.checked })
              }
            />
            High Contrast
          </label>

          <label>
            <input
              type="checkbox"
              checked={settings.largeText}
              onChange={(e) =>
                setSettings({
                  ...settings,
                  largeText: e.target.checked,
                  fontSize: e.target.checked ? 20 : 16
                })
              }
            />
            Large Text
          </label>

          <label>
            <input
              type="checkbox"
              checked={settings.reducedMotion}
              onChange={(e) =>
                setSettings({ ...settings, reducedMotion: e.target.checked })
              }
            />
            Reduced Motion
          </label>

          <label>
            <input
              type="checkbox"
              checked={settings.screenReader}
              onChange={(e) =>
                setSettings({ ...settings, screenReader: e.target.checked })
              }
            />
            Screen Reader Support
          </label>

          <label>
            <input
              type="checkbox"
              checked={settings.audioDescriptions}
              onChange={(e) =>
                setSettings({ ...settings, audioDescriptions: e.target.checked })
              }
            />
            Audio Descriptions
          </label>

          <label>
            Color Blind Mode:
            <select
              value={settings.colorBlindMode}
              onChange={(e) =>
                setSettings({
                  ...settings,
                  colorBlindMode: e.target.value as AccessibilitySettings['colorBlindMode']
                })
              }
            >
              <option value="none">None</option>
              <option value="protanopia">Protanopia</option>
              <option value="deuteranopia">Deuteranopia</option>
              <option value="tritanopia">Tritanopia</option>
            </select>
          </label>
        </div>
      )}
    </div>
  );
}

export default AccessibilityPanel;
