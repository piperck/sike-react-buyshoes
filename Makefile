.PHONY: css
css:
	mkdir -p bundle
	postcss --watch --use autoprefixer --use postcss-import css/app.css --output bundle/app.css

.PHONY: server
server:
	browser-sync start --server --files='index.html,bundle/app.css,js/app.jsx,build/shoes_react.js'

.PHONY: js
js:
	babel --watch js/app.jsx --out-file build/shoes_react.js

.PHONY: all
all:
	(make css  & make server)


.PHONY: clean
clean:
	rm -r bundle
