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
      _react2.default.createElement('path', { d: 'M12 5c5 0 9 2.7 9 6 0 1.7-1 3.2-2.7 4.3 1.1-.9 1.7-2 1.7-3.2C20 9.3 16.4 7 12 7v3L8 6l4-4v3zm0 14c-5 0-9-2.7-9-6 0-1.7 1-3.2 2.7-4.3-1.1.9-1.7 2-1.7 3.2 0 2.8 3.6 5.1 8 5.1v-3l4 4-4 4v-3z' })
    )
  );
};

exports.default = Icon;