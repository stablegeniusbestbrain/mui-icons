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
      _react2.default.createElement('path', { d: 'M12.4 1.7l7.7 7.8-6.3 6.4-1.4-1.4 4.9-5-6.4-6.3 1.5-1.5zm3.5 7.8l-1.4 1.4-4.3-4.2-4.9 4.9-1.4-1.4 6.3-6.3 5.7 5.6zm-5.7-1.4l1.4 1.4-4.9 5 6.4 6.3-1.5 1.5-7.7-7.8 6.3-6.4zm-2.1 6.4l1.4-1.4 4.3 4.2 4.9-4.9 1.4 1.4-6.3 6.3-5.7-5.6z' })
    )
  );
};

exports.default = Icon;