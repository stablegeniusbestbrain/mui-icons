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
      _react2.default.createElement('path', { d: 'M8.1 13.3L3.9 9.2c-1.5-1.6-1.5-4.1 0-5.7l7 7-2.8 2.8zm5.3-.3l6.9 6.9-1.4 1.4-6.9-6.9-6.9 6.9-1.4-1.4 9.7-9.7-.2-.2c-.8-.8-.8-2 0-2.8l4.3-4.4.9.9L15.2 7l1 .9 3.2-3.2.9.9-3.2 3.3.9.9 3.3-3.2.9.9-4.4 4.3c-.8.8-2 .8-2.8 0l-.2-.2-1.4 1.4z' })
    )
  );
};

exports.default = Icon;