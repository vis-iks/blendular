import {
  Component, ChangeDetectionStrategy, input, model, signal, computed,
  forwardRef, ElementRef, viewChild, OnDestroy, HostListener
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export interface BuiDropdownOption {
  label: string;
  value: unknown;
  icon?: string;
}

/**
 * BuiDropdownComponent – Blender-style enum dropdown with search filter.
 *
 * Styled like Blender's property enum selectors: flat, compact, dark.
 * Features a search/filter input at the top of the expanded list.
 */
@Component({
  selector: 'bui-dropdown',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => BuiDropdownComponent),
      multi: true,
    },
  ],
})
export class BuiDropdownComponent implements ControlValueAccessor, OnDestroy {
  /** List of selectable options */
  options = input<BuiDropdownOption[]>([]);

  /** Placeholder text when no value is selected */
  placeholder = input('Select...');

  /** Whether the dropdown is disabled */
  disabled = input(false);

  /** Two-way binding for the selected value */
  value = model<unknown>(undefined);

  /** Whether the popup is open */
  isOpen = signal(false);

  /** Current search/filter text */
  searchText = signal('');

  /** Reference to the search input */
  searchInput = viewChild<ElementRef<HTMLInputElement>>('searchInput');

  /** Filtered options based on search text */
  filteredOptions = computed(() => {
    const search = this.searchText().toLowerCase();
    const opts = this.options();
    if (!search) return opts;
    return opts.filter(o => o.label.toLowerCase().includes(search));
  });

  /** Label of the currently selected item */
  selectedLabel = computed(() => {
    const val = this.value();
    const opt = this.options().find(o => o.value === val);
    return opt?.label ?? this.placeholder();
  });

  /** Icon of the currently selected item */
  selectedIcon = computed(() => {
    const val = this.value();
    const opt = this.options().find(o => o.value === val);
    return opt?.icon;
  });

  // CVA
  private onChange: (value: unknown) => void = () => {};
  private onTouched: () => void = () => {};

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    // Close if clicking outside
    const el = event.target as HTMLElement;
    if (!el.closest('bui-dropdown')) {
      this.close();
    }
  }

  toggle() {
    if (this.disabled()) return;
    if (this.isOpen()) {
      this.close();
    } else {
      this.open();
    }
  }

  open() {
    this.isOpen.set(true);
    this.searchText.set('');
    setTimeout(() => {
      this.searchInput()?.nativeElement.focus();
    });
  }

  close() {
    this.isOpen.set(false);
    this.searchText.set('');
  }

  selectOption(option: BuiDropdownOption) {
    this.value.set(option.value);
    this.onChange(option.value);
    this.onTouched();
    this.close();
  }

  onSearchInput(event: Event) {
    const val = (event.target as HTMLInputElement).value;
    this.searchText.set(val);
  }

  onSearchKeydown(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      this.close();
    }
  }

  // CVA
  writeValue(val: unknown): void {
    this.value.set(val);
  }

  registerOnChange(fn: (value: unknown) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  ngOnDestroy() {
    // cleanup if needed
  }
}
