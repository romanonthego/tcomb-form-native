/*

  a bootstrap like style

*/
'use strict';

var LABEL_COLOR = '#000000';
var INPUT_COLOR = '#5F5F5F';
var ERROR_COLOR = '#a94442';
var HELP_COLOR = '#999999';
var BORDER_COLOR = '#cccccc';
var DISABLED_COLOR = '#777777';
var DISABLED_BACKGROUND_COLOR = '#eeeeee';
var FONT_SIZE = 17;
var FONT_WEIGHT = '500';

var {
  PixelRatio,
} = require('react-native');

var stylesheet = Object.freeze({
  fieldset: {},
  // the style applied to the container of all inputs
  formGroup: {
    normal: {
      marginBottom: 0,
      borderBottomWidth: 1 / PixelRatio.get(),
      borderBottomColor: "#EDEDED",
    },
    error: {
      marginBottom: 10
    }
  },
  controlLabel: {
    normal: {
      color: LABEL_COLOR,
      fontSize: FONT_SIZE,
      marginBottom: 7,
      fontWeight: FONT_WEIGHT
    },
    // the style applied when a validation error occours
    error: {
      color: ERROR_COLOR,
      fontSize: FONT_SIZE,
      marginBottom: 7,
      fontWeight: FONT_WEIGHT
    }
  },
  helpBlock: {
    normal: {
      color: HELP_COLOR,
      fontSize: FONT_SIZE,
      marginBottom: 2
    },
    // the style applied when a validation error occours
    error: {
      color: HELP_COLOR,
      fontSize: FONT_SIZE,
      marginBottom: 2
    }
  },
  errorBlock: {
    fontSize: FONT_SIZE,
    marginBottom: 2,
    color: ERROR_COLOR
  },
  phoneNumber: {
    input: {
      flexDirection: 'row',
    },
    countryCode: {
      flex: 0,
      height: 55,
      paddingHorizontal: 22,
      paddingVertical: 18,
    },
    field: {
      flex: 1,
    }
  },
  textbox: {
    normal: {
      color: INPUT_COLOR,
      fontSize: FONT_SIZE,
      height: 55,
      paddingHorizontal: 22,
      paddingVertical: 18,
      lineHeight: 19,
      // borderRadius: 4,
      // borderColor: BORDER_COLOR,
      // borderWidth: 1,
      marginBottom: 5
    },
    // the style applied when a validation error occours
    error: {
      color: INPUT_COLOR,
      fontSize: FONT_SIZE,
      height: 55,
      paddingHorizontal: 22,
      paddingVertical: 18,
      lineHeight: 19,
      borderColor: ERROR_COLOR,
      borderWidth: 1,
      marginBottom: 5
    },
    // the style applied when the textbox is not editable
    notEditable: {
      fontSize: FONT_SIZE,
      height: 55,
      paddingHorizontal: 22,
      paddingVertical: 18,
      lineHeight: 19,
      borderColor: BORDER_COLOR,
      borderWidth: 1,
      marginBottom: 5,
      color: DISABLED_COLOR,
      backgroundColor: DISABLED_BACKGROUND_COLOR
    },
    multiline: {
      color: INPUT_COLOR,
      fontSize: FONT_SIZE,
      height: 133,
      padding: 22,
      // borderRadius: 4,
      // borderColor: BORDER_COLOR,
      // borderWidth: 1,
      marginBottom: 0
    },
  },
  checkbox: {
    normal: {
      color: INPUT_COLOR,
      marginBottom: 4
    },
    // the style applied when a validation error occours
    error: {
      color: INPUT_COLOR,
      marginBottom: 4
    }
  },
  select: {
    normal: {
      marginBottom: 4
    },
    // the style applied when a validation error occours
    error: {
      marginBottom: 4
    }
  },
  datepicker: {
    normal: {
      marginBottom: 4
    },
    // the style applied when a validation error occours
    error: {
      marginBottom: 4
    }
  }
});

module.exports = stylesheet;
