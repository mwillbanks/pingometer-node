# pingometer-node

## Overview

A pingometer API wrapper for talking to the pingometer API.

This wrapper is limited in functionality mainly due to the pingometer API being rather poorly documented and not
exposing much behavior.  For this reason we are currently only wrapping the metrics API as the events and alerts API's
may supply too much information thus causing the request to continually fail.

## Usage

```javascript
const Pingometer = require('pingometer-node');
const pingometer = new Pingometer('username', 'password');

pingometer.getMetrics();
```
