import { Injectable } from '@angular/core';
import { MaterialModule, OverlayContainer } from '@angular/material';

@Injectable()
export class ThemeService {
    constructor(private overlayContainer: OverlayContainer) { }

    setThemeClass = (isDarkTheme: boolean) =>
        this.overlayContainer.themeClass = isDarkTheme ? 'dark-theme' : 'light-theme';
}
