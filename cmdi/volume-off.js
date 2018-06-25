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
      _react2.default.createElement('path', { d: 'M12 4L9.9 6.1 12 8.2M4.3 3L3 4.3 7.7 9H3v6h4l5 5v-6.7l4.3 4.2c-.7.5-1.5 1-2.3 1.2v2.1c1.4-.3 2.6-1 3.7-1.8l2 2 1.3-1.3-9-9m7 1.3c0 .9-.2 1.8-.5 2.6l1.5 1.6c.6-1.3 1-2.7 1-4.2 0-4.3-3-7.9-7-8.8v2.1c2.9.9 5 3.5 5 6.7zm-2.5 0c0-1.8-1-3.3-2.5-4v2.2l2.5 2.4V12z' })
    )
  );
};

exports.default = Icon;