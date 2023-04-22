function switchToTabWithoutParent(offset) {
  browser.tabs.query({ currentWindow: true }, function(tabs) {
    let currentTabIndex = -1;

    // Find the current tab index
    for (let i = 0; i < tabs.length; i++) {
      if (tabs[i].active) {
        currentTabIndex = i;
        break;
      }
    }

    // Find the next or previous tab without a parent
    let targetTabIndex = -1;
    for (let i = currentTabIndex + offset; i >= 0 && i < tabs.length; i += offset) {
      if (!tabs[i].openerTabId) {
        targetTabIndex = i;
        break;
      }
    }

    // If a matching tab was found, activate it
    if (targetTabIndex !== -1) {
      browser.tabs.update(tabs[targetTabIndex].id, { active: true });
    }
  });
}

// Switch to the next tab without a parent
browser.commands.onCommand.addListener(function(command) {
  if (command === "next-tab-without-parent") {
    switchToTabWithoutParent(1);
  }
});

// Switch to the previous tab without a parent
browser.commands.onCommand.addListener(function(command) {
  if (command === "previous-tab-without-parent") {
    switchToTabWithoutParent(-1);
  }
});
