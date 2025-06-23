# MoodMuse UI

MoodMuse UI is a vibrant and expressive React component library designed to bring your user interfaces to life. With a focus on customizability and ease of use, MoodMuse UI provides a collection of pre-built components that can be themed to match your application's unique personality.

## Features

-   **Themable:** Easily switch between multiple built-in themes or create your own.
-   **Customizable:** Components offer a rich set of props for fine-grained control over their appearance and behavior.
-   **Built with TypeScript:** Enjoy the benefits of static typing for a better development experience.
-   **Powered by styled-components:** Leverage the full power of CSS-in-JS for dynamic and flexible styling.

## Installation

To install MoodMuse UI, run the following command in your project's directory:

```bash
npm install moodmuse-ui
```

## Peer Dependencies

MoodMuse UI has `react`, `react-dom`, and `styled-components` as peer dependencies. You'll need to have these installed in your project.

```bash
npm install react react-dom styled-components
```

## Usage

To use the components from MoodMuse UI, you need to wrap your application with the `ThemeProvider`. This provides the theme to all the components in your application.

### 1. Set up the ThemeProvider

In your main application file (e.g., `App.tsx`), import the `ThemeProvider` and a theme of your choice from `moodmuse-ui`.

```tsx
import React from 'react';
import { ThemeProvider, themes } from 'moodmuse-ui';
import { YourComponent } from './YourComponent';

function App() {
  return (
    <ThemeProvider theme={themes.neoglow}>
      <YourComponent />
    </ThemeProvider>
  );
}

export default App;
```

### 2. Use the Button Component

Now you can use the `Button` component anywhere in your application.

```tsx
import React from 'react';
import { Button } from 'moodmuse-ui';

export const YourComponent = () => {
  return (
    <div>
      <Button
        themeStyle="neoglow"
        size="large"
        onClick={() => alert('Button clicked!')}
      >
        Click Me!
      </Button>
    </div>
  );
};
```

## Button Component Props

| Prop         | Type                               | Default     | Description                                             |
|--------------|------------------------------------|-------------|---------------------------------------------------------|
| `themeStyle` | `neoglow`, `brandfocused`, etc.    | `'neoglow'` | The visual style of the button.                         |
| `size`       | `'small'`, `'medium'`, `'large'`   | `'medium'`  | The size of the button.                                 |
| `radius`     | `'no'`, `'small'`, `'medium'`, `'large'`, `'pill'` | `'medium'`  | The border radius of the button.                        |
| `fontFamily` | `inter`, `roboto`, etc.            | `'inter'`   | The font family for the button text.                    |
| `leftIcon`   | `ReactNode`                        | `undefined` | An icon to display to the left of the button text.      |
| `rightIcon`  | `ReactNode`                        | `undefined` | An icon to display to the right of the button text.     |
| `dropShadow` | `boolean`                          | `true`      | Whether to apply a drop shadow to the button.           |
| `disabled`   | `boolean`                          | `false`     | If `true`, the button will be disabled.                 |

## Available Themes

MoodMuse UI comes with a set of pre-built themes:

-   `neoglow`
-   `brandfocused`
-   `softclay`
-   `gradientglow`
-   `ghostline`
-   `moodpop`
-   `monogrid`

You can access them via the `themes` object exported from `moodmuse-ui`.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request if you have any ideas or improvements.

## License

This project is licensed under the MIT License.
