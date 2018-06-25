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
      _react2.default.createElement('path', { d: 'M19 18c.6 0 1 .4 1 1s-.4 1-1 1H5c-.5 0-1-.4-1-1s.5-1 1-1h14m0-2H5c-1.7 0-3 1.3-3 3s1.3 3 3 3h14c1.7 0 3-1.3 3-3s-1.3-3-3-3zm0-5c.6 0 1 .4 1 1s-.4 1-1 1H5c-.5 0-1-.4-1-1s.5-1 1-1h14m0-2H5c-1.7 0-3 1.3-3 3s1.3 3 3 3h14c1.7 0 3-1.3 3-3s-1.3-3-3-3zm0-5c.6 0 1 .5 1 1s-.4 1-1 1H5c-.5 0-1-.5-1-1s.5-1 1-1h14m0-2H5C3.3 2 2 3.3 2 5s1.3 3 3 3h14c1.7 0 3-1.3 3-3s-1.3-3-3-3z' })
    )
  );
};

exports.default = Icon;