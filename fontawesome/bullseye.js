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
      _react2.default.createElement('path', { d: 'M15.4 12q0 1.4-1 2.4t-2.4 1-2.4-1-1-2.4 1-2.4 2.4-1 2.4 1 1 2.4zm1.7 0q0-2.1-1.5-3.6T12 6.9 8.4 8.4 6.9 12t1.5 3.6 3.6 1.5 3.6-1.5 1.5-3.6zm1.8 0q0 2.8-2.1 4.8T12 18.9t-4.8-2.1T5.1 12t2.1-4.8T12 5.1t4.8 2.1 2.1 4.8zm1.7 0q0-1.7-.7-3.3t-1.8-2.8-2.8-1.8-3.3-.7-3.3.7-2.8 1.8-1.8 2.8-.7 3.3.7 3.3 1.8 2.8 2.8 1.8 3.3.7 3.3-.7 2.8-1.8 1.8-2.8.7-3.3zm1.7 0q0 2.8-1.4 5.2t-3.7 3.7-5.2 1.4-5.2-1.4-3.7-3.7T1.7 12t1.4-5.2 3.7-3.7T12 1.7t5.2 1.4 3.7 3.7 1.4 5.2z' })
    )
  );
};

exports.default = Icon;