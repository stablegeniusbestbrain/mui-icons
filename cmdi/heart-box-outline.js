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
      _react2.default.createElement('path', { d: 'M12 17l-.7-.7C8.7 14 7 12.5 7 10.6 7 9 8.2 7.8 9.8 7.8c.8 0 1.7.4 2.2 1.1.5-.7 1.4-1.1 2.3-1.1 1.5 0 2.7 1.2 2.7 2.8 0 1.9-1.7 3.4-4.3 5.7l-.7.7zM5 3h14c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2zm0 2v14h14V5H5z' })
    )
  );
};

exports.default = Icon;