# third-party-optimization
Improve you third party optimization

## Introduction

To understand the domain, there is a useful documentation to optimize the third party loading in this following link:
[https://web.dev/codelab-optimize-third-party-javascript/](https://web.dev/codelab-optimize-third-party-javascript/)

But allmost services providers like Google, Facebook, force developper to integrate javascript code, then
defer attribut on script tag, become unusefull.

The third party opimitzation is a real nightmare for who works very hard to optimize there platform as far as possible.
That why I created this very small javascript library.

## Documentation

### Install 
  - Add library in your HTML code into the body tag.
```
<script type="text/javascript" src="/js/third-party-optimization.js"></script>
```
  - You should copy/paste the `thirdParty` class directly into your main javascript file.

  - Instantiate the thirdParty class
```
<script type="text/javascript">

    let tp = new thirdParty();
    
	// and add some other codes ... 
</script>
```
### Options
In constructor, there are 2 parameters:
  - `event`: if true, then script wait user activity (scroll, mouse move, touch) to load third party files.
  - `bot`: if a crawler load and execute scripts then third party files are not loaded.
  
  ```
  # here, event = true, bot = false
  let tp = new thirdParty(true, false);
  ```

### Add links and functions

  - To add a javascript file to load or a specific function, use the add function
  ```
  // to add a link
    tp.add("https://www.googletagmanager.com/gtag/js?id=UA-XXXXXXXXX-XXX");
  
  // to add a function
    tp.add(function () {
        console.log('hello world !');
    });
  ```

There is a second parameter: 
  - `force`: if true, then ressource is directly executed, and by pass the waiting. This option allow to have a dynamic loading according to the context.
example:
```
// We force the third file loading to send the message.
let force = isInHomePage ? true ? false;
tp.add('https://www.analytics.com/...', force);

// We have to be sur that library is loaded to send a message.
if (force == true) {
  ga.send("I m in home page");
}
```
  
  ## Results
  
  
