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
        _react2.default.createElement('path', { d: 'M256 320c37.712 0 68.57-30.924 68.57-68.714V100.714C324.57 62.924 293.713 32 256 32s-68.57 30.924-68.57 68.714v150.572c0 37.79 30.858 68.714 68.57 68.714zm121.14-75.452c0 68.714-58.283 116.815-121.14 116.815S134.86 313.26 134.86 244.548H96c0 77.873 61.72 143.153 137.144 153.465V480h45.713v-81.987C354.28 386.56 416 322.42 416 244.548h-38.86z' })
      )
    )
  );
};

exports.default = Icon;