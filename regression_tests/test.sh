#!/bin/bash
die() { echo "$@" >&2; exit 1; }

echo "Testing cellviewer"

TEST_DIR=./regression-tests/cellviewer
[ -d "$TEST_DIR" ] || die "Must run from the repository's root directory!"

if python "./cellviewer/radialtree.py" \
    $TEST_DIR/output/test; then
    :
else
    die "Python quit unexpectedly!"
fi

python "$TEST_DIR/checkerCellViewer"

echo "Done testing cellviewer"
exit