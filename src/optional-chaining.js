export default function optionalChaining(object, path, separator = '.') {
  if (arguments.length < 2) {
    throw new Error('Missing parameter.');
  }

  if (!Array.prototype.reduce) {
    throw new Error('Array.prototype.reduce is not supported in your environment, see https://github.com/es-shims/es5-shim');
  }

  try {
    return path
      .replace('[', separator)
      .replace(']', '').split(separator)
      .reduce((obj, property) => obj[property], object);
  } catch (err) {
    return undefined;
  }
}
