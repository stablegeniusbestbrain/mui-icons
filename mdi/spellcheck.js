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
      _react2.default.createElement('path', { d: 'M12.4 16h2.1L9.4 3H7.6L2.5 16h2l1.2-3h5.6l1.1 3zm-6-5l2.1-5.5 2.1 5.5H6.4zm15.2.6l-8.1 8.1L9.8 16l-1.4 1.4 5.1 5.1L23 13l-1.4-1.4z' })
    )
  );
};

exports.default = Icon;