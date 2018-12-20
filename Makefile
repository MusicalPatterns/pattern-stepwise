MAKEFLAGS += --no-print-directory --always-make

commit:
	@set -e; ../../node_modules/@musical-patterns/cli/bin/commit.sh

lint:
	@set -e; pushd ../..; make lint DIR="src/stepwise"; popd

pull:
	@set -e; ../../node_modules/@musical-patterns/cli/bin/pull.sh

push:
	@set -e; ../../node_modules/@musical-patterns/cli/bin/push.sh

ship:
	@set -e; pushd ../..; make ship PATTERN="stepwise"; popd

test:
	@set -e; pushd ../..; make test JASMINE_CONFIG_PATH="src/stepwise/test/jasmine.js" PATTERN_NAME="STEPWISE"; popd

update:
	@set -e; pushd ../..; make update PATTERN="stepwise"; popd
