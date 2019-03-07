import path from 'path';

function unwrap(requiredModule) {
  if (requiredModule && requiredModule.default) {
    return requiredModule.default;
  }
  return requiredModule;
}

export default function unwrap(requiredModule) {
  if (typeof requiredModule === 'string') {
    try {
      return unwrap(require(require.resolve(path.resolve(requiredModule))));
    } catch (err) {
      return unwrap(require(requiredModule));
    }
  }
  return unwrap(requiredModule);
}
