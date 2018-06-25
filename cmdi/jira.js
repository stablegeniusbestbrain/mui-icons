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
      _react2.default.createElement('path', { d: 'M12 2c.9 0 1.6.7 1.6 1.6 0 .9-.7 1.6-1.6 1.6-.9 0-1.6-.7-1.6-1.6 0-.9.7-1.6 1.6-1.6zM7.8 3.1c.9 0 1.6.7 1.6 1.5 0 .9-.7 1.6-1.6 1.6-.9 0-1.6-.7-1.6-1.6 0-.8.7-1.5 1.6-1.5zm8.4 0c.9 0 1.6.7 1.6 1.5 0 .9-.7 1.6-1.6 1.6-.9 0-1.6-.7-1.6-1.6 0-.8.7-1.5 1.6-1.5zm-4.4 7.8c-2.1-2.1-1.6-3.1-1.6-3.1h3.7c0 1.6-2.1 3.1-2.1 3.1zm2.1 10.6s0-2.1-4.2-6.3S5 9.9 4.4 6.7c0 0 .4-.5 1 0 .5.6 1.7 1 2.7 1 0 0 1.1 3.2 4 5.4 0 0 3.8-4 3.8-5.6 0 0 1.2.3 2.6-.8 0 0 1-.5 1.1 0 .1 1.1-1 4.8-5.3 8.5 0 0 2.8 3.1 2.5 6.3h-2.9zm-4.7-5.3l2.2 2.5c-1 1.1-1.2 3.3-1.2 3.3H7.1c.5-4.2 2.1-5.8 2.1-5.8z' })
    )
  );
};

exports.default = Icon;