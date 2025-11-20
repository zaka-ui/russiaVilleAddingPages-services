import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  // Unique state variables for each menu
  isCilsOpen = false;
  isSourcilsOpen = false;
  isOnglesOpen = false;

  // --- General Hover/Mouse Leave Handlers (for Desktop) ---

  setHoverState(menu: 'cils' | 'sourcils' | 'ongles', state: boolean) {
    if (menu === 'cils') { this.isCilsOpen = state; }
    else if (menu === 'sourcils') { this.isSourcilsOpen = state; }
    else if (menu === 'ongles') { this.isOnglesOpen = state; }
  }

  // --- Click/Tap Handler (for Mobile) ---
  toggleMenu(menu: 'cils' | 'sourcils' | 'ongles') {
    // Check if the screen is mobile (e.g., less than 992px)
    if (window.outerWidth < 992) {
      // Toggle the state for the clicked menu
      if (menu === 'cils') {
        this.isCilsOpen = !this.isCilsOpen;
        // Close others
        this.isSourcilsOpen = false;
        this.isOnglesOpen = false;
      } else if (menu === 'sourcils') {
        this.isSourcilsOpen = !this.isSourcilsOpen;
        // Close others
        this.isCilsOpen = false;
        this.isOnglesOpen = false;
      } else if (menu === 'ongles') {
        this.isOnglesOpen = !this.isOnglesOpen;
        // Close others
        this.isCilsOpen = false;
        this.isSourcilsOpen = false;
      }
    }
  }

  // --- Helper Methods for HTML binding ---
  // Desktop Hover
  showMenu(menu: 'cils' | 'sourcils' | 'ongles') {
    if (window.outerWidth >= 992) {
      this.setHoverState(menu, true);
    }
  }
  hideMenu(menu: 'cils' | 'sourcils' | 'ongles') {
    if (window.outerWidth >= 992) {
      this.setHoverState(menu, false);
    }
  }
}


