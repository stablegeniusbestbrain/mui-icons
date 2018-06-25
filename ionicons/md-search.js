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
        _react2.default.createElement('path', { d: 'M337.51 305.372h-17.502l-6.57-5.486c20.79-25.232 33.92-57.054 33.92-93.257C347.36 127.63 283.897 64 205.136 64 127.452 64 64 127.632 64 206.63s63.452 142.627 142.225 142.627c35.01 0 67.83-13.167 92.99-34.008l6.562 5.486v17.55L415.18 448 448 415.086 337.51 305.372zm-131.285 0c-54.702 0-98.463-43.887-98.463-98.743 0-54.86 43.76-98.743 98.463-98.743 54.7 0 98.462 43.884 98.462 98.742 0 54.855-43.762 98.742-98.462 98.742z' })
      )
    )
  );
};

exports.default = Icon;