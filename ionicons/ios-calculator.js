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
        _react2.default.createElement('path', { d: 'M368 64H144c-17.7 0-32 14.3-32 32v320c0 17.7 14.3 32 32 32h224c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zm-8 216v128h-48V280h48zm0-80v48h-48v-48h48zm-80 160v48h-48v-48h48zm0-80v48h-48v-48h48zm0-80v48h-48v-48h48zm-80 160v48h-48v-48h48zm0-80v48h-48v-48h48zm0-80v48h-48v-48h48zm-48-48v-48h208v48H152z' })
      )
    )
  );
};

exports.default = Icon;