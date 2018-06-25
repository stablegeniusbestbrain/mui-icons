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
      _react2.default.createElement('path', { d: 'M12 4c3.2 0 5.8 2.4 6.7 5.6-.7.6-1.1 1.3-1.2 2.2l-.2 2.1c-1.8-.9-3.5-1.7-5.3-1.7-1.8 0-3.5.8-5.3 1.7l-.2-2.1c-.1-.9-.5-1.7-1.2-2.2C6.2 6.4 8.9 4 12 4zm5.1 13H7l-.3-2.5c1.8-.9 3.5-1.7 5.3-1.7 1.8 0 3.5.8 5.3 1.7l-.2 2.5zM5 19v-1l-1.3-3.5h-.2C2.1 14.5 1 13.4 1 12s1.1-2.5 2.5-2.5c1.3 0 2.4 1 2.5 2.3l.5 6.2v1H5zm14 0h-1.5v-1l.5-6.2c.1-1.3 1.2-2.3 2.5-2.3 1.4 0 2.5 1.1 2.5 2.5s-1.1 2.5-2.5 2.5h-.2L19 18v1z' })
    )
  );
};

exports.default = Icon;