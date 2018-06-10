'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SvgIcon = require('@material-ui/core/SvgIcon');

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Icon = function Icon(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement(
      'g',
      null,
      _react2.default.createElement(
        'g',
        { style: { transform: 'scale(0.045)' } },
        _react2.default.createElement('path', { d: 'M330.666 131.202c18.668 0 33.598-14.935 33.598-33.6S349.334 64 330.666 64C312 64 297.07 78.935 297.07 97.6s14.93 33.602 33.596 33.602zm56 130.132c-51.332 0-93.332 42-93.332 93.333s42 93.333 93.332 93.333C438 448 480 406 480 354.667s-42-93.333-93.334-93.333zm0 158.666c-36.402 0-65.332-28.93-65.332-65.333s28.93-65.333 65.332-65.333c36.404 0 65.334 28.93 65.334 65.333S423.07 420 386.666 420zm-81.07-196H384v-32h-58.845l-34.62-60.134c-5.605-9.333-15.87-15.864-27.07-15.864-8.4 0-16.798 3.732-22.4 9.333l-71.73 69.065c-5.602 5.6-9.334 14-9.334 22.4 0 12.13 9.203 21.464 18.536 27.064L240 282.134V368h32V256l-39.333-32 42.93-44.533 30 44.533zm-180.263 37.334C74 261.334 32 303.334 32 354.667S74 448 125.333 448s93.333-42 93.333-93.333-42-93.333-93.333-93.333zm0 158.666C88.933 420 60 391.07 60 354.667s28.934-65.333 65.333-65.333c36.4 0 65.333 28.93 65.333 65.333S161.732 420 125.333 420z' })
      )
    )
  );
};

exports.default = Icon;