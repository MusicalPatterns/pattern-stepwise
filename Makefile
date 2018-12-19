pull:
	../../node_modules/@musical-patterns/cli/bin/pull.sh

.PHONY: test
test:
	pushd ../..; JASMINE_CONFIG_PATH="src/stepwise/test/jasmine.js" PATTERN_NAME="STEPWISE" make test; popd

.PHONY: lint
lint:
	pushd ../..; DIR="src/stepwise" make lint; popd
