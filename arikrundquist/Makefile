
PRODUCTION_FILES=$(filter-out ../arikrundquist,$(wildcard ../*))

run:
	npm start

build: clean
	npm run build
	cp -r build/* ..

clean:
	-rm -r $(PRODUCTION_FILES)

.PHONY: run build clean
