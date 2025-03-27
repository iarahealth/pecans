// Merge release notes for a list of versions
export function mergeReleaseNotes(versions, opts) {
  const _opts = Object.assign({}, { includeTag: true }, opts);

  return versions.reduce((prev, version) => {
    if (!version.notes) return prev;

    let releaseNotes = prev;

    // Include tag as title
    if (_opts.includeTag) {
      releaseNotes = `${releaseNotes}## ${version.tag}\n`;
    }

    // Include notes
    releaseNotes = `${releaseNotes + version.notes}\n`;

    // New lines
    if (_opts.includeTag) {
      releaseNotes = `${releaseNotes}\n`;
    }

    return releaseNotes;
  }, "");
}
