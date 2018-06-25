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
      _react2.default.createElement('path', { d: 'M12 5.9c1.2 0 2.1.9 2.1 2.1s-.9 2.1-2.1 2.1S9.9 9.2 9.9 8s.9-2.1 2.1-2.1m0 9c3 0 6.1 1.5 6.1 2.1v1.1H5.9V17c0-.6 3.1-2.1 6.1-2.1M12 4C9.8 4 8 5.8 8 8s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4zm0 9c-2.7 0-8 1.3-8 4v3h16v-3c0-2.7-5.3-4-8-4z' })
    )
  );
};

exports.default = Icon;