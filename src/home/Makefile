
PRODUCTION_FILES=$(filter-out ../arikrundquist,$(wildcard ../*))

run:
	npm start

build: clean
	npm run build
#	chmod 777 build/* -R
#	cp -r build/* ..

clean:
	echo nothing to do
#	-rm -r $(PRODUCTION_FILES)

.PHONY: run build clean
