# Snackbar

Snackbars provide lightweight feedback about an operation by showing a brief message at the bottom of the screen. Snackbars can contain an action.

<!-- example -->
```jsx
import { Button, Snackbar } from 'react-toolbox';

class SnackbarTest extends React.Component {
  handleClick = () => {
    this.refs.snackbar.show();
  };

  handleSnackbarClick = () => {
    this.refs.snackbar.hide();
  };

  render () {
    return (
      <section>
        <Button label='Show Snackbar' kind='raised' onClick={this.handleClick} />
        <Snackbar
          action='Nice'
          icon='question-answer'
          label='A new developer started using React Toolbox'
          onClick={this.handleSnackbarClick}
          ref='snackbar'
          type='accept'
      />
      </section>
    );
  }
}
```

## Properties

| Name          | Type    | Default   | Description|
|:-----|:-----|:-----|:-----|
| `action`  | `String` |   | Label for the action component inside the Snackbar.|
| `className` | `String`  | `''`      | Additional class name to provide custom styling.|
| `icon` | `String`  |       | String key for an icon displayed in left side of the snackbar.|
| `label` | `String`  |       | Text to display in the content.|
| `onClick` | `Function`  |       | Callback function that will be called when the button action is clicked.|
| `timeout` | `Number`  |       | Amount of time after the Snackbar will be automatically hidden.|
| `type` | `String`  |       | Indicates the action type. Can be `accept`, `warning` or `cancel`|

## Methods

The Snackbar, in a similar way to the Dialog and Drawer holds state to check whether it's being displayed or not. It exposes methods to hide and show it manually:

- `hide` used to hide the Snackbar.
- `show` used to show the Snackbar.

