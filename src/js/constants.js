const FOCUSABLE_ELEMENTS = ['[href]:not([tabindex^="-"])', 'input:not([disabled]):not([type="hidden"]):not([tabindex^="-"]):not([type="radio"])', 'input[type="radio"]:checked', 'select:not([disabled]):not([tabindex^="-"])', 'textarea:not([disabled]):not([tabindex^="-"])', 'button:not([disabled]):not([tabindex^="-"])', '[tabindex]:not([tabindex^="-"])', '[contenteditable="true"]:not([tabindex^="-"])'];

export { FOCUSABLE_ELEMENTS };
