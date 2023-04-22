xpi: 
	rm -f ./*.xpi
	zip -r -9 Parent-Tab-Switcher.xpi images manifest.json background.js switch.png -x '*/.*' >/dev/null 2>/dev/null
