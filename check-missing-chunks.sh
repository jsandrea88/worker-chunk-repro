set -u
cd dist/worker-chunk-repro/browser
miss=0
for f in *.js; do
  for d in $(grep -o '"\./[A-Za-z0-9_-]*\.js"' "$f" | tr -d '"' | sed 's#^\./##' | sort -u); do
    [ -f "$d" ] || { echo "MISSING: $f imports $d"; miss=1; }
  done
done
echo "js files: $(ls *.js | wc -l), missing=$miss"
