import '@animxyz/core';
import '../src/styles/tachyons.min.css';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: { expanded: true },
};

function ThemeWrapper(props) {
  // render your custom theme provider
  return props.children;
}

export const decorators = [(renderStory) => <ThemeWrapper>{renderStory()}</ThemeWrapper>];
