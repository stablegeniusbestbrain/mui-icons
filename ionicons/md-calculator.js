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
        _react2.default.createElement('path', { d: 'M368 48H144c-26.6 0-48 21.6-48 48v320c0 26.4 21.4 48 48 48h224c26.4 0 48-21.6 48-48V96c0-26.4-21.4-48-48-48zM200 416h-48v-48h48v48zm0-88h-48v-48h48v48zm0-88h-48v-48h48v48zm80 176h-48v-48h48v48zm0-88h-48v-48h48v48zm0-88h-48v-48h48v48zm80 176h-48V280h48v136zm0-176h-48v-48h48v48zm0-96H152V96h208v48z' })
      )
    )
  );
};

exports.default = Icon;