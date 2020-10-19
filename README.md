# resizable-element
You can use this package to make your elements resizable

## Install

```
npm install reizable-element
```

## Example
```
import createResizableElements from 'resizable-element'

// You can choose class="resize-top resize-bottom resize-left resize-right" to make elements resizable
<div class="resize-bottom resize-right"></div>

// Run function createResizableElements when the page is loaded
// Take Vue as an example
mounted() {
  this.$nextTick(() => {
    createResizableElements()
  })
}
```
