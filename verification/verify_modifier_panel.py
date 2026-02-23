from playwright.sync_api import sync_playwright

def verify_modifier_panel():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        page.goto("http://localhost:4200")

        # Wait for modifier panel
        page.wait_for_selector("bui-modifier-panel")

        # Click on Advanced section to expand
        page.click("text=Advanced")

        # Wait for expansion animation or just wait a bit
        page.wait_for_timeout(500)

        # Take screenshot
        page.screenshot(path="verification/modifier_panel_expanded.png")

        browser.close()

if __name__ == "__main__":
    verify_modifier_panel()
