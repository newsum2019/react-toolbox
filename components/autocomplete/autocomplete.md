# Aside

```
var Autocomplete = require('react-toolbox/components/autocomplete');

var data = [
   { '1': 'Never' },
   { '2': 'Every Night' },
   { '3': 'Weeknights' },
   { '4': 'Weekends' },
   { '5': 'Weekly' },
];

<Autocomplete label="Period" dataSource={data} value='4' />
```

## Properties

| Name              | Type          | Default         | Description|
|:-                 |:-:            | :-              |:-|
| **className**     | String        |                 | Sets the class-styles of the Component.|
| **colors**        | Object        |                 | JSON data representing all colors per key in the dropdown.||
| **dataSource**    | Object        |                 | JSON data representing all items in the component.|
| **disabled**      | Boolean       |                 | If true, component will be disabled.|
| **error**         | String        |                 | Sets the error string.|
| **exact**         | Bool          | true            | If true, component only accepts values from dataSource property..|
| **label**         | String        |                 | The text string to use for the floating label element.|
| **multiple**      | Bool          | true            | If true, component can hold multiple values.|
| **onChange**      | Function      |                 | Callback function that is fired when the components's value changes.|
| **required**      | Boolean       |                 | If true, component needs has a value.|
| **type**          | String        | "text"          | Type of the component, overwrite this property if you need set a different stylesheet.|
| **value**         | String        |                 | Default value using JSON data.|

## Methods

#### getValue
Returns the value of the input.

```
input_instance.getValue();
```

#### setValue
Sets the value of the input element.

```
input_instance.setValue(newValue);
```

#### setError

```
input_instance.setError("Something is wrong...");
```
