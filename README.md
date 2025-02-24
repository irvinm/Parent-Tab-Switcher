![CI/CD](https://github.com/irvinm/Parent-Tab-Switcher/workflows/CI/CD/badge.svg)

# Parent Tab Switcher
A Firefox addon that allows you to use keyboard shortcuts to traverse tabs up or down for tabs that have no parents.  The default keyboard shortcuts are Ctrl+Alt+D for next\down and Ctrl+Alt+U for previous\up.  These can be changed in about:addons -> Manage Extension Shortcuts.

This can be useful when used in conjunction with addons like "Tree Style Tabs" and "Sidebery" as this will allow you to active parent tabs of trees up or down which if used as "root tabs of topics" allows you to quickly move across topics.  

--> **This addon DOES NOT require TST nor Sidebery to be installed to work.**

Example:
* Tab 1
  * Tab 2
  * Tab 3
* Tab 4
  * Tab 5
  * Tab 6
    * Tab 7
      * Tab 8
  * Tab 9
* Tab 10

In this case, the parent tabs are tabs: 1, 4, 10

  * Starting at tab 1 and going "down", you will go to Tab 4 then Tab 10.  
  * Starting at tab 2 and going "down", you will go to Tab 4 then Tab 10.
  * Starting at tab 6 and going "down", you will go to Tab 10.
  * Starting at tab 9 and going "up", you will go to Tab 4 then Tab 1.
  * Starting at tab 3 and going "up", you will go to Tab 1.
  
If you organize your tab trees around topics, this will allow you to quickly move across topics.

switch.png provided by:  <a href="https://www.flaticon.com/free-icons/tabs" title="tabs icons">Tabs icons created by Pixel perfect - Flaticon</a>

Original TST idea/discussion:  https://github.com/piroor/treestyletab/issues/3324
