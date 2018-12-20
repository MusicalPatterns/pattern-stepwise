commit:
	../../node_modules/@musical-patterns/cli/bin/commit.sh

.PHONY: lint
lint:
	pushd ../..; make lint DIR="src/stepwise"; popd

pull:
	../../node_modules/@musical-patterns/cli/bin/pull.sh

push:
	../../node_modules/@musical-patterns/cli/bin/push.sh

.PHONY: test
test:
	pushd ../..; make test JASMINE_CONFIG_PATH="src/stepwise/test/jasmine.js" PATTERN_NAME="STEPWISE"; popd

update:
	pushd ../..; make update PATTERN="STEPWISE"; popd
