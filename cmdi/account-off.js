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
      _react2.default.createElement('path', { d: 'M12 4c2.2 0 4 1.8 4 4 0 2-1.4 3.6-3.2 3.9L8.1 7.2C8.4 5.4 10 4 12 4zm.3 10l6 6 1.7 1.7-1.3 1.3-3-3H4v-2c0-1.8 2.5-3.4 5.9-3.9L2.8 7l1.3-1.2 8.2 8.2zm7.7 4v1.2l-4.9-4.9c2.9.6 4.9 2.1 4.9 3.7z' })
    )
  );
};

exports.default = Icon;