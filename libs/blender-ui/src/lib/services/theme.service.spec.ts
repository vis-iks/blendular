import { TestBed } from '@angular/core/testing';
import { BuiThemeService } from './theme.service';
import { blenderDark, blenderLight } from './themes';
import { DOCUMENT } from '@angular/common';
import { vi } from 'vitest';

describe('BuiThemeService', () => {
  let service: BuiThemeService;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let documentMock: any;

  beforeEach(() => {
    documentMock = {
      documentElement: {
        style: {
          setProperty: vi.fn(),
        },
      },
    };

    TestBed.configureTestingModule({
      providers: [
        BuiThemeService,
        { provide: DOCUMENT, useValue: documentMock },
      ],
    });
    service = TestBed.inject(BuiThemeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set dark theme by default', () => {
    expect(service.activeThemeSignal()).toEqual(blenderDark);
    expect(documentMock.documentElement.style.setProperty).toHaveBeenCalledWith(
      '--bui-primary',
      blenderDark.properties['--bui-primary'],
    );
  });

  it('should switch to light theme', () => {
    service.setTheme('light');
    expect(service.activeThemeSignal()).toEqual(blenderLight);
    expect(documentMock.documentElement.style.setProperty).toHaveBeenCalledWith(
      '--bui-primary',
      blenderLight.properties['--bui-primary'],
    );
  });
});
